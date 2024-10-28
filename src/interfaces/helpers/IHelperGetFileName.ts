import { IHelperGetFileNameInput } from './IHelperGetFileNameInput';
import { ICommonNameStr } from '@app/interfaces/common';

export interface IHelperGetFileName {
	(args: IHelperGetFileNameInput): ICommonNameStr;
}
