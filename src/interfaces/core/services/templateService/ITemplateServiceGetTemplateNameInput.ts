import { TemplateNamePrefixEnum } from '@app/config/enums';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';

export interface ITemplateServiceGetTemplateNameInput {
	parserDef: IDataParserDef;
	namePrefix: TemplateNamePrefixEnum;
}
