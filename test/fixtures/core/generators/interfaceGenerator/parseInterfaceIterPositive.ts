export const parseInterfaceIterPositive = `
import { IParseInput } from '@datr.tech/catch-lib-parser-core';
import { IParseriterParseOutput from '@app/interfaces/core/parsers/IParseriterParseOutput';

export interface IParseriterParse {
	(args: IParseInput): IParseriterParseOutput;
}`;
