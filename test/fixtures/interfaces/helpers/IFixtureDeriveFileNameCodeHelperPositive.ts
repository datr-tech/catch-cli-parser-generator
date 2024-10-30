import { ICommonNameStr } from '@app/interfaces/common';
import { IFixtureDeriveFileNameCodeHelperCommon } from './IFixtureDeriveFileNameCodeHelperCommon';

export interface IFixtureDeriveFileNameCodeHelperPositive
	extends IFixtureDeriveFileNameCodeHelperCommon {
	codeFileNameExpected: ICommonNameStr;
}
