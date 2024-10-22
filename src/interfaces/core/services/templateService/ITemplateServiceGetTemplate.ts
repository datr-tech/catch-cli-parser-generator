import { IDataCommonBaseString } from '@app/interfaces/data/common';
import { ITemplateServiceGetTemplateInput } from './ITemplateServiceGetTemplateInput';

export interface ITemplateServiceGetTemplate {
	(args: ITemplateServiceGetTemplateInput): IDataCommonBaseString;
}
