import { IModelTemplate } from '@app/interfaces/models/TemplateModel';
import { IBuilderTemplateModelFuncBuildInput } from './IBuilderTemplateModelFuncBuildInput';

export interface IBuilderTemplateModelFuncBuild {
	(args: IBuilderTemplateModelFuncBuildInput): IModelTemplate;
}
