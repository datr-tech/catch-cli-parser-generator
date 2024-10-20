import { TemplateNamePrefixEnum } from '@app/config/enums';
import { IParserDef } from '@app/interfaces/core/generators/parserDefs';

export interface IHelperGetTemplateNameBaseInput {
	parserDef: IParserDef;
	templateNamePrefix: TemplateNamePrefixEnum;
}
