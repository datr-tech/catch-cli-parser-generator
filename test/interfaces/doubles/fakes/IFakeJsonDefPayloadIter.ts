import { ICommonJsonDefPayloadIter } from '@app/interfaces/common';
import { IFakeJsonDefPayloadIterInput } from './IFakeJsonDefPayloadIterInput';

export interface IFakeJsonDefPayloadIter {
	(args?: IFakeJsonDefPayloadIterInput): ICommonJsonDefPayloadIter;
}
