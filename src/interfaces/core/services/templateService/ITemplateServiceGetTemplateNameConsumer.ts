import { IDataCommonBaseString } from '@app/interfaces/data/common';
import { ITemplateServiceGetTemplateNameConsumerInput } from './ITemplateServiceGetTemplateNameConsumerInput';

export interface ITemplateServiceGetTemplateNameConsumer {
	(args: ITemplateServiceGetTemplateNameConsumerInput): IDataCommonBaseString;
}
