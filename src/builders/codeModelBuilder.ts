import { templateTypeHelper } from '@app/helpers';
import { CodeFileNameService, CodeFilePathService } from '@app/services/fileService';
import {
	IBuilderCodeModel,
	IBuilderCodeModelFuncBuildInput,
	IBuilderCodeModelFuncBuildOutput,
} from '@app/interfaces/builders/codeModelBuilder';
import { IModelCode } from '@app/interfaces/models/CodeModel';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';
import { OutDirTypeEnum } from '@app/config/enums';

export const codeModelBuilder: IBuilderCodeModel = {
	/**
	 * @public
	 *
	 * Build a 'codeModel' with an associated FilePathService.
	 * The services can be used when calling 'codeModel.writeCodeToFile'.
	 *
	 * @param {IBuilderCodeModelFuncBuildInput} args
	 * @param {IModelDef} args.defModel
	 * @param {IModelOutDirs} args.outDirsModel
	 * @param {IModelTemplate} args.templateModel
	 * @param {TemplateTypeEnum} args.templateTypeEnum
	 * @returns {IBuilderCodeModelFuncBuildOutput}
	 */
	build: ({
		defModel,
		outDirsModel,
		templateModel,
		templateTypeEnum,
	}: IBuilderCodeModelFuncBuildInput): IBuilderCodeModelFuncBuildOutput => {
		const outDirType: OutDirTypeEnum = templateTypeHelper.getOutDirType({ templateTypeEnum });
		const dirService: IFileServiceDir = outDirsModel.getFirstOutDirModelByType({ outDirType });

		const fileNameService: IFileServiceFileName = CodeFileNameService({
			defModel,
			templateTypeEnum,
		});

		const codeFilePathService: IFileServiceFilePath = CodeFilePathService({
			dirService,
			fileNameService,
		});

		const codeModel: IModelCode = templateModel.getCodeModel({ defModel });

		return {
			codeFilePathService,
			codeModel,
		};
	},
};
