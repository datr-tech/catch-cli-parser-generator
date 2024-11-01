import { ICommonJsonDef, ICommonStr } from '@app/interfaces/common';
import { IFixtureDeriveFileNameTemplateHelperCommon } from './IFixtureDeriveFileNameTemplateHelperCommon';

export interface IFixtureDeriveFileNameTemplateHelperNegative
	extends IFixtureDeriveFileNameTemplateHelperCommon {
	errorExpected: ICommonStr;
	jsonDef: ICommonJsonDef;
}
