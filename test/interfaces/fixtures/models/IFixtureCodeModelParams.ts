import { DefTypeEnum, OutDirTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import {
	ICommonCodeStr,
	ICommonDescriptionStr,
	ICommonJsonDefPayload,
	ICommonNameStr,
} from '@app/interfaces/common';

export interface IFixtureCodeModelParams {
	description?: ICommonDescriptionStr;
	defTypeEnum: DefTypeEnum;
	jsonDefName: ICommonNameStr;
	jsonPayload: ICommonJsonDefPayload;
	outDirTypeEnum: OutDirTypeEnum;
	templateTypeEnum: TemplateTypeEnum;
	writtenCodeExpected: ICommonCodeStr;
}
