import { assertCondition } from '@app/assertions';
import { codeModelBuilder, templateDirServiceBuilder, templateModelBuilder } from '@app/builders';
import { TemplateTypeEnum } from '@app/config/enums';
import { DefsModel, OutDirsModel } from '@app/models';
import { ICommonBool, ICommonFuncIsValid } from '@app/interfaces/common';
import {
	IControllerGenerate,
	IControllerGenerateConstructor,
	IControllerGenerateConstructorInput,
	IControllerGenerateFuncInit,
	IControllerGenerateFuncRun,
} from '@app/interfaces/controllers/GenerateController';
import { IModelDefs } from '@app/interfaces/models/DefsModel';
import { IModelOutDirs } from '@app/interfaces/models/OutDirsModel';

export const GenerateController: IControllerGenerateConstructor = ({
	json,
}: IControllerGenerateConstructorInput): IControllerGenerate => {
	let areAllModelsValid = false;
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
		outDirsModel = OutDirsModel({ json });
		defsModel = DefsModel({ json });
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
			outDirsModel.isValid() && defsModel.isValid() && templateTypeEnums.length > 0;

		return areAllModelsValid;
	};

	/**
	 * @public
	 *
	 * For each 'defModel' generate code based upon
	 * 'templateModel' and 'writeCodeToFile'.
	 *
	 * @throws When one or more of the 'child' models are invalid.
	 */
	const run: IControllerGenerateFuncRun = (): void => {
		assertCondition({
			condition: areAllModelsValid,
		});

		const templateDirService = templateDirServiceBuilder.build();

		const defModels = defsModel.getDefs();
		for (const defModel of defModels) {
			for (const templateTypeEnum of templateTypeEnums) {
				const templateModel = templateModelBuilder.build({
					defModel,
					templateDirService,
					templateTypeEnum,
				});

				const { codeFilePathService, codeModel } = codeModelBuilder.build({
					defModel,
					outDirsModel,
					templateModel,
					templateTypeEnum,
				});

				codeModel.writeCodeToFile({
					codeFilePathService,
				});
			}
		}
	};

	return {
		init,
		isValid,
		run,
	} as IControllerGenerate;
};
