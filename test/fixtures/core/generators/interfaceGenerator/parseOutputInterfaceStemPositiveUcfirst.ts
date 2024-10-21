export const parseOutputInterfaceStemPositiveUcfirst = `
import { IParserNameParseOutput } from '@app/interfaces/core/parsers/IParserNameParseOutput';
import { IParserNameHrefParseOutput } from '@app/interfaces/core/parsers/IParserNameHrefParseOutput';
import { IParserTitleParseOutput } from '@app/interfaces/core/parsers/IParserTitleParseOutput';

export type IParserStemParseOutput = {
		name: IParserNameParseOutput;
		nameHref: IParserNameHrefParseOutput;
		title: IParserTitleParseOutput;
};`;
