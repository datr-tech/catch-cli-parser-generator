import { IDataCommonBaseString } from '@app/interfaces/data/common';
import { ITemplateServiceGetTemplateNameInput } from './ITemplateServiceGetTemplateNameInput';

export interface ITemplateServiceGetTemplateName {
	(args: ITemplateServiceGetTemplateNameInput): IDataCommonBaseString;
}
