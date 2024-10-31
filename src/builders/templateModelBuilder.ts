import { TemplateModel } from '@app/models';
import { TemplateFileNameService, TemplateFilePathService } from '@app/services/fileService';
import {
	IBuilderTemplateModel,
	IBuilderTemplateModelFuncBuildInput,
} from '@app/interfaces/builders/templateModelBuilder';
import { IModelTemplate } from '@app/interfaces/models/TemplateModel';

export const templateModelBuilder: IBuilderTemplateModel = {
	/**
	 * @public
	 *
	 * A builder that constructs a TemplateModel
	 *
	 * @param {IBuilderTemplateModelFuncBuildInput} args
	 * @param {IModelDef} args.defModel
	 * @param {IFileServiceDir} args.templateDirService
	 * @param {TemplateTypeEnum} args.templateTypeEnum
	 * @returns {IModelTemplate}
	 */
	build: ({
		defModel,
		templateDirService,
		templateTypeEnum,
	}: IBuilderTemplateModelFuncBuildInput): IModelTemplate => {
		const fileNameService = TemplateFileNameService({
			defModel,
			templateTypeEnum,
		});
		const templatePathService = TemplateFilePathService({
			dirService: templateDirService,
			fileNameService,
		});

		return TemplateModel({ templatePathService });
	},
};
