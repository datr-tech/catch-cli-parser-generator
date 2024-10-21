export const parseInterfaceStemPositiveUcfirst = `
import { IParseInput } from '@datr.tech/catch-lib-parser-core';
import { IParserStemParseOutput from '@app/interfaces/core/parsers/IParserStemParseOutput';

export interface IParserStemParse {
	(args: IParseInput): IParserStemParseOutput;
}`;
