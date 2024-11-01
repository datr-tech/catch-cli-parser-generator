import { templateModelBuilder } from '@app/builders/templateModelBuilder';
import {
	IBuilderCodeModel,
	IBuilderCodeModelFuncBuildInput,
	IBuilderCodeModelFuncBuildOutput,
} from '@app/interfaces/builders/codeModelBuilder';
import { IModelTemplate } from '@app/interfaces/models/TemplateModel';
import { assertCondition } from '@app/assertions';

export const codeModelBuilder: IBuilderCodeModel = {
	build: ({
		defModel,
		templateDirService,
		templateTypeEnum,
	}: IBuilderCodeModelFuncBuildInput): IBuilderCodeModelFuncBuildOutput => {
		assertCondition({
			condition: defModel.isValid() && templateDirService.isValid(),
			errorMessage: "Either 'defModel' or 'templateDirService' is invalid",
		});

		const templateModel: IModelTemplate = templateModelBuilder.build({
			defModel,
			templateDirService,
			templateTypeEnum,
		});

		assertCondition({
			condition: templateModel.isValid(),
			errorMessage: "Invalid 'templateModel",
		});

		return templateModel.getCodeModel({ defModel });
	},
};
