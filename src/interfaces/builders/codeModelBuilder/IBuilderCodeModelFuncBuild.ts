import { IBuilderCodeModelFuncBuildInput } from './IBuilderCodeModelFuncBuildInput';
import { IBuilderCodeModelFuncBuildOutput } from './IBuilderCodeModelFuncBuildOutput';

export interface IBuilderCodeModelFuncBuild {
	(args: IBuilderCodeModelFuncBuildInput): IBuilderCodeModelFuncBuildOutput;
}
