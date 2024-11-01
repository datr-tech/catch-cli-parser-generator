import { ICommonErrorMessageStr } from '../../../../../src/interfaces/common';
import { IFixtureFileNameServiceGetFileNameCommon } from './IFixtureFileNameServiceGetFileNameCommon';

export interface IFixtureFileNameServiceGetFileNameNegative
	extends IFixtureFileNameServiceGetFileNameCommon {
	errorExpected: ICommonErrorMessageStr;
}
