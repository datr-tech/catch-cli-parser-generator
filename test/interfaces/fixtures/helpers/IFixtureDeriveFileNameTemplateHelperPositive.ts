import { ICommonNameStr } from '@app/interfaces/common';
import { IFixtureDeriveFileNameTemplateHelperCommon } from './IFixtureDeriveFileNameTemplateHelperCommon';

export interface IFixtureDeriveFileNameTemplateHelperPositive
	extends IFixtureDeriveFileNameTemplateHelperCommon {
	templateFileNameExpected: ICommonNameStr;
}
