import { ICommonNameStr } from '@app/interfaces/common';
import { IHelperDeriveFileNameInputCommon } from './IHelperDeriveFileNameInputCommon';

export interface IHelperDeriveFileNameBaseInput extends IHelperDeriveFileNameInputCommon {
	defNameStr: ICommonNameStr;
}
