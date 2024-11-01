import { IBuilderCodeFilePathServiceFuncBuildInput } from './IBuilderCodeFilePathServiceFuncBuildInput';
import { IBuilderCodeFilePathServiceFuncBuildOutput } from './IBuilderCodeFilePathServiceFuncBuildOutput';

export interface IBuilderCodeFilePathServiceFuncBuild {
	(args: IBuilderCodeFilePathServiceFuncBuildInput): IBuilderCodeFilePathServiceFuncBuildOutput;
}
