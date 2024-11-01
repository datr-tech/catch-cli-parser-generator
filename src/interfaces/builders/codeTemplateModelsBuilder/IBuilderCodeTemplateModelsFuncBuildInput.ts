import { DefTypeEnum, OutDirTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { ICommonJsonDefPayload, ICommonNameStr, ICommonPathStr } from '@app/interfaces/common';

export interface IBuilderCodeTemplateModelsFuncBuildInput {
	defTypeEnum: DefTypeEnum;
	jsonDefName: ICommonNameStr;
	jsonPayload: ICommonJsonDefPayload;
	outDirPath: ICommonPathStr;
	outDirTypeEnum: OutDirTypeEnum;
	templateTypeEnum: TemplateTypeEnum;
}
