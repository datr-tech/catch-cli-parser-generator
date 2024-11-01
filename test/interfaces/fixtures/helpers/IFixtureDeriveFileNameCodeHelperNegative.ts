import { ICommonStr } from '@app/interfaces/common';
import { IFixtureDeriveFileNameCodeHelperCommon } from './IFixtureDeriveFileNameCodeHelperCommon';

export interface IFixtureDeriveFileNameCodeHelperNegative
	extends IFixtureDeriveFileNameCodeHelperCommon {
	errorExpected: ICommonStr;
}
