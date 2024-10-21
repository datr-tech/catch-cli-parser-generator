import { TemplateNamePrefixEnum } from '@app/config/enums';
import { IArgsParserDef } from '@app/interfaces/args/parserDefs';

export interface ITemplateServiceGetTemplateNameInput {
	parserDef: IArgsParserDef;
	templateNamePrefix: TemplateNamePrefixEnum;
}
