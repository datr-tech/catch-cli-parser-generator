import { templateTypeHelper } from '@app/helpers';
import { CodeFileNameService, CodeFilePathService } from '@app/services/fileService';
import {
	IBuilderCodeModel,
	IBuilderCodeModelFuncBuildInput,
	IBuilderCodeModelFuncBuildOutput,
} from '@app/interfaces/builders/codeModelBuilder';

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
		const outDirType = templateTypeHelper.getOutDirType({ templateTypeEnum });
		const codeDirModel = outDirsModel.getFirstOutDirModelByType({ outDirType });

		const codeFileNameModel = CodeFileNameService({
			defModel,
			templateTypeEnum,
		});

		const codeFilePathService = CodeFilePathService({
			dirModel: codeDirModel,
			fileNameModel: codeFileNameModel,
		});

		const codeModel = templateModel.getCodeModel({ defModel });

		return {
			codeFilePathService,
			codeModel,
		};
	},
};
