export const parseInterfaceLeafPositiveUcfirst = `
import { IParseInput } from '@datr.tech/catch-lib-parser-core';
import { IParserLeafParseOutput from '@app/interfaces/core/parsers/IParserLeafParseOutput';

export interface IParserLeafParse {
	(args: IParseInput): IParserLeafParseOutput;
}`;
