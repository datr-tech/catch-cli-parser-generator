import { ICommonJsonDefPayloadIter } from './ICommonJsonDefPayloadIter';
import { ICommonJsonDefPayloadLeaf } from './ICommonJsonDefPayloadLeaf';
import { ICommonJsonDefPayloadStem } from './ICommonJsonDefPayloadStem';

export type ICommonJsonDefPayload =
	| ICommonJsonDefPayloadIter
	| ICommonJsonDefPayloadLeaf
	| ICommonJsonDefPayloadStem;
