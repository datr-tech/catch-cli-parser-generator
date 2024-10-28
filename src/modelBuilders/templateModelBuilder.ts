import { TemplateModel, TemplateFileNameModel, TemplateFilePathModel } from '@app/models';
import { IBuilderTemplateModel } from '@app/interfaces/modelBuilders/templateModelBuilder';

export const templateModelBuilder: IBuilderTemplateModel = {
	build: ({ defModel, templateDirModel, templateTypeEnum }) => {
		const templateNameModel = TemplateFileNameModel({ defModel, templateTypeEnum });
		const templatePathModel = TemplateFilePathModel({
			dirModel: templateDirModel,
			fileNameModel: templateNameModel,
		});

		return TemplateModel({ templatePathModel });
	},
};
