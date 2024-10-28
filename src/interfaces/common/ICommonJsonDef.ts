import { DefTypeEnum } from '@app/config/enums';
import { ICommonDescriptionStr } from './ICommonDescriptionStr';
import { ICommonJsonDefPayload } from './ICommonJsonDefPayload';
import { ICommonNameStr } from './ICommonNameStr';

export interface ICommonJsonDef {
	name: ICommonNameStr;
	payload: ICommonJsonDefPayload;
	type: DefTypeEnum;
	description?: ICommonDescriptionStr;
}
