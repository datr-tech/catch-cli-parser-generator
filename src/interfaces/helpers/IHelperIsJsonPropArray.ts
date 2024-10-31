import { ICommonBool } from '@app/interfaces/common';
import { IHelperIsJsonPropArrayInput } from './IHelperIsJsonPropArrayInput';

export interface IHelperIsJsonPropArray {
	(args: IHelperIsJsonPropArrayInput): ICommonBool;
}
