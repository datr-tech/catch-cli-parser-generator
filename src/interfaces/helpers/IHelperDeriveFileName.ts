import { IHelperDeriveFileNameInput } from './IHelperDeriveFileNameInput';
import { ICommonNameStr } from '@app/interfaces/common';

export interface IHelperDeriveFileName {
	(args: IHelperDeriveFileNameInput): ICommonNameStr;
}
