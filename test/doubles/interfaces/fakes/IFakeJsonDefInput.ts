import {
	ICommonBool,
	ICommonJsonDefPayload,
	ICommonNameStr,
	ICommonStr,
} from '@app/interfaces/common';
import { DefTypeEnum } from '@app/config/enums';

export interface IFakeJsonDefInput {
	description?: ICommonStr;
	name?: ICommonNameStr;
	payload?: ICommonJsonDefPayload;
	type?: DefTypeEnum;
	useDefaultDescription?: ICommonBool;
	useDefaultName?: ICommonBool;
	useDefaultPayload?: ICommonBool;
	useDefaultType?: ICommonBool;
}
