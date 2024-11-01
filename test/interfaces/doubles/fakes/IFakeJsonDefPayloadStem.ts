import { ICommonJsonDefPayloadStem } from '@app/interfaces/common';
import { IFakeJsonDefPayloadStemInput } from './IFakeJsonDefPayloadStemInput';

export interface IFakeJsonDefPayloadStem {
	(args?: IFakeJsonDefPayloadStemInput): ICommonJsonDefPayloadStem;
}
