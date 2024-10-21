export const parseInterfaceIterPositiveUcfirst = `
import { IParseInput } from '@datr.tech/catch-lib-parser-core';
import { IParserIterParseOutput from '@app/interfaces/core/parsers/IParserIterParseOutput';

export interface IParserIterParse {
	(args: IParseInput): IParserIterParseOutput;
}`;
