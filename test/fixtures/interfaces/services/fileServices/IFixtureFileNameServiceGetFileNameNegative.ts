import { ICommonErrorMessageStr } from '@app/interfaces/common';
import { IFixtureFileNameServiceGetFileNameCommon } from './IFixtureFileNameServiceGetFileNameCommon';

export interface IFixtureFileNameServiceGetFileNameNegative
	extends IFixtureFileNameServiceGetFileNameCommon {
	errorExpected: ICommonErrorMessageStr;
}
