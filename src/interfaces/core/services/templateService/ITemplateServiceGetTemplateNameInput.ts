import { TemplateNamePrefixEnum } from '@app/config/enums';
import { IParserDef } from '@app/interfaces/args/parserDefs';

export interface ITemplateServiceGetTemplateNameInput {
	parserDef: IParserDef;
	templateNamePrefix: TemplateNamePrefixEnum;
}
