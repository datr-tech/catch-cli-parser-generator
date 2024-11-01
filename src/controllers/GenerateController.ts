import { assertCondition } from '@app/assertions';
import {
	codeModelBuilder,
	codeFilePathServiceBuilder,
	templateDirServiceBuilder,
} from '@app/builders';
import { TemplateTypeEnum } from '@app/config/enums';
import { DefsModel, OutDirsModel } from '@app/models';
import { ICommonBool, ICommonFuncIsValid } from '@app/interfaces/common';
import {
	IControllerGenerate,
	IControllerGenerateConstructor,
	IControllerGenerateConstructorInput,
	IControllerGenerateFuncInit,
	IControllerGenerateFuncRun,
	IControllerGenerateFuncRunOutput,
	IControllerGenerateFuncWriteCodeToFile,
	IControllerGenerateFuncWriteCodeToFileInput,
	IControllerGenerateFuncWriteCodeToFileOutput,
} from '@app/interfaces/controllers/GenerateController';
import { IModelCode } from '@app/interfaces/models/CodeModel';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IModelDefs } from '@app/interfaces/models/DefsModel';
import { IModelOutDirs } from '@app/interfaces/models/OutDirsModel';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';

/**
 * @public
 *
 * Construct instances of the GenerateController.
 *
 * @param {IControllerGenerateConstructorInput} args
 * @param {ICommonJson} args.json
 * @returns {IControllerGenerate}
 * @constructor
 */
export const GenerateController: IControllerGenerateConstructor = ({
	json,
}: IControllerGenerateConstructorInput): IControllerGenerate => {
	let areAllModelsValid: ICommonBool = false;
	let defsModel: IModelDefs;
	let outDirsModel: IModelOutDirs;
	let templateTypeEnums: TemplateTypeEnum[];

	/**
	 * @public
	 *
	 * A public function that initialises instances
	 * of 'GeneratorController', populating 'defsModel',
	 * 'outDirsModel', and 'templateTypeEnum'
	 */
	const init: IControllerGenerateFuncInit = (): void => {
		defsModel = DefsModel({ json });
		outDirsModel = OutDirsModel({ json });
		templateTypeEnums = Object.values(TemplateTypeEnum) as TemplateTypeEnum[];
	};

	/**
	 * @public
	 *
	 * A public function that ensures all 'child' models
	 * are valid, as well as 'templateTypeEnum'.
	 *
	 * @returns {ICommonBool}
	 */
	const isValid: ICommonFuncIsValid = (): ICommonBool => {
		areAllModelsValid =
			defsModel.isValid() && outDirsModel.isValid() && templateTypeEnums.length > 0;

		return areAllModelsValid;
	};

	/**
	 * @public
	 *
	 * For each 'defModel' generate code based upon
	 * 'templateModel' and 'writeCodeToFile'.
	 *
	 * @returns {IControllerGenerateFuncRunOutput}
	 * @throws When one or more of the 'child' models are invalid.
	 */
	const run: IControllerGenerateFuncRun = (): IControllerGenerateFuncRunOutput => {
		assertCondition({
			condition: areAllModelsValid,
		});

		const writeResponses: IControllerGenerateFuncWriteCodeToFileOutput[] = [];
		const defModels: IModelDef[] = defsModel.getDefModels();

		for (const defModel of defModels) {
			for (const templateTypeEnum of templateTypeEnums) {
				if (templateTypeEnum === 'TEMPLATE_TYPE_FOR_TESTING_PURPOSES_ONLY') {
					continue;
				}

				const { message, status } = writeCodeToFile({
					defModel,
					templateTypeEnum,
				});
				writeResponses.push({ message, status });
			}
		}

		return writeResponses;
	};

	/**
	 * @public
	 *
	 * Combine a defModel with a template and write the derived code to a file.
	 * Returns an object containing 'message' and 'status' properties. When
	 * successful, 'status' will be true and 'message' will be the path to which
	 * the derived code was written. When unsuccessful, 'status' will be false,
	 * and 'message' will be an error message.
	 *
	 * @param {IControllerGenerateFuncWriteCodeToFileInput} args
	 * @param {IModelDef} args.defModel
	 * @param {TemplateTypeEnum} args.templateTypeEnum
	 * @returns {IControllerGenerateFuncWriteCodeToFileOutput}
	 */
	const writeCodeToFile: IControllerGenerateFuncWriteCodeToFile = ({
		defModel,
		templateTypeEnum,
	}: IControllerGenerateFuncWriteCodeToFileInput): IControllerGenerateFuncWriteCodeToFileOutput => {
		const templateDirService: IFileServiceDir = templateDirServiceBuilder.build();
		const codeModel: IModelCode = codeModelBuilder.build({
			defModel,
			templateDirService,
			templateTypeEnum,
		});

		const codeFilePathService: IFileServiceFilePath = codeFilePathServiceBuilder.build({
			defModel,
			outDirsModel,
			templateTypeEnum,
		});

		assertCondition({
			condition: codeModel.isValid(),
		});

		return codeModel.writeCodeToFile({
			codeFilePathService,
		});
	};

	return {
		init,
		isValid,
		run,
	} as IControllerGenerate;
};
