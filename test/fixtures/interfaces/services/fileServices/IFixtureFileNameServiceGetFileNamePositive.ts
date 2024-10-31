import { ICommonNameStr } from '@app/interfaces/common';
import { IFixtureFileNameServiceGetFileNameCommon } from './IFixtureFileNameServiceGetFileNameCommon';

export interface IFixtureFileNameServiceGetFileNamePositive
	extends IFixtureFileNameServiceGetFileNameCommon {
	fileNameStrExpected: ICommonNameStr;
}
