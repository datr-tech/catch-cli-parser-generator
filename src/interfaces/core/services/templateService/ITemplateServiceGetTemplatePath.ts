import { IDataCommonBaseString } from '@app/interfaces/data/common';
import { ITemplateServiceGetTemplatePathInput } from './ITemplateServiceGetTemplatePathInput';

export interface ITemplateServiceGetTemplatePath {
	(args: ITemplateServiceGetTemplatePathInput): IDataCommonBaseString;
}
