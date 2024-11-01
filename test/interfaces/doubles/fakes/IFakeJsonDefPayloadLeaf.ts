import { ICommonJsonDefPayloadLeaf } from '@app/interfaces/common';
import { IFakeJsonDefPayloadLeafInput } from './IFakeJsonDefPayloadLeafInput';

export interface IFakeJsonDefPayloadLeaf {
	(args?: IFakeJsonDefPayloadLeafInput): ICommonJsonDefPayloadLeaf;
}
