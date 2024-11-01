import { IBuilderCodeTemplateModelsFuncBuildInput } from './IBuilderCodeTemplateModelsFuncBuildInput';
import { IBuilderCodeTemplateModelsFuncBuildOutput } from './IBuilderCodeTemplateModelsFuncBuildOutput';

export interface IBuilderCodeTemplateModelsFuncBuild {
	(args: IBuilderCodeTemplateModelsFuncBuildInput): IBuilderCodeTemplateModelsFuncBuildOutput;
}
