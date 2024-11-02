import { IHelperDeriveFileNameBaseInput } from './IHelperDeriveFileNameBaseInput';
import { ICommonNameStr } from '@app/interfaces/common';

export interface IHelperDeriveFileNameBase {
	(args: IHelperDeriveFileNameBaseInput): ICommonNameStr;
}
