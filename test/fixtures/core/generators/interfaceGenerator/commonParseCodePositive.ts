export const commonParseCodePositive = `
import { IParseInput } from '@datr.tech/catch-lib-parser-core';
import { IParserleafParseOutput from '@app/interfaces/core/parsers/IParserleafParseOutput';

export interface IParserleafParse {
	(args: IParseInput): IParserleafParseOutput;
}`;
