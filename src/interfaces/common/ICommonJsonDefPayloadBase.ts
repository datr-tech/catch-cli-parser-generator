import { ICommonNameStr } from '@app/interfaces/common/ICommonNameStr';
import { ICommonJsonDefPayloadEl } from './ICommonJsonDefPayloadEl';

export type ICommonJsonDefPayloadBase = {
	parser: ICommonNameStr;
	el?: ICommonJsonDefPayloadEl;
};
