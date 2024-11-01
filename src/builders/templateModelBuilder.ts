import { TemplateModel } from '@app/models';
import { TemplateFileNameService, TemplateFilePathService } from '@app/services/fileService';
import {
	IBuilderTemplateModel,
	IBuilderTemplateModelFuncBuildInput,
} from '@app/interfaces/builders/templateModelBuilder';
import { IModelTemplate } from '@app/interfaces/models/TemplateModel';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';

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
		const fileNameService: IFileServiceFileName = TemplateFileNameService({
			defModel,
			templateTypeEnum,
		});
		const templatePathService: IFileServiceFilePath = TemplateFilePathService({
			dirService: templateDirService,
			fileNameService,
		});

		return TemplateModel({ templatePathService });
	},
};
