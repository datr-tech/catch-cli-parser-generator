import { ICommonNameStr } from '@app/interfaces/common/ICommonNameStr';
import { ICommonJsonDefPayloadBase } from './ICommonJsonDefPayloadBase';

export interface ICommonJsonDefPayloadIter extends ICommonJsonDefPayloadBase {
	childParser: ICommonNameStr;
}
