import { ICommonJsonDef } from '@app/interfaces/common';
import { IFakeJsonDefInput } from './IFakeJsonDefInput';

export interface IFakeJsonDef {
	(args?: IFakeJsonDefInput): ICommonJsonDef;
}
