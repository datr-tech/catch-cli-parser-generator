import { ICommonNameStr } from '../../../../../src/interfaces/common';
import { IFixtureFileNameServiceGetFileNameCommon } from './IFixtureFileNameServiceGetFileNameCommon';

export interface IFixtureFileNameServiceGetFileNamePositive
	extends IFixtureFileNameServiceGetFileNameCommon {
	fileNameStrExpected: ICommonNameStr;
}
