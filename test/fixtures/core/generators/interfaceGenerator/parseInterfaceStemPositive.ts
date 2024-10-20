export const parseInterfaceStemPositive = `
import { IParseInput } from '@datr.tech/catch-lib-parser-core';
import { IParserstemParseOutput from '@app/interfaces/core/parsers/IParserstemParseOutput';

export interface IParserstemParse {
	(args: IParseInput): IParserstemParseOutput;
}`;
