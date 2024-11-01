import { ICommonCodeStr } from '@app/interfaces/common';

const writtenInterfaceParseFakeIter: ICommonCodeStr = `
import { IParseInput } from '@datr.tech/catch-lib-parser-core';
import { IParserTestIterParseOutput from '@app/interfaces/core/parsers/IParserTestIterParseOutput';

export interface IParserTestIterParse {
	(args: IParseInput): IParserTestIterParseOutput;
}`;

const writtenInterfaceParseFakeLeaf: ICommonCodeStr = `
import { IParseInput } from '@datr.tech/catch-lib-parser-core';
import { IParserTestLeafParseOutput from '@app/interfaces/core/parsers/IParserTestLeafParseOutput';

export interface IParserTestLeafParse {
	(args: IParseInput): IParserTestLeafParseOutput;
}`;

const writtenInterfaceParseFakeStem: ICommonCodeStr = `
import { IParseInput } from '@datr.tech/catch-lib-parser-core';
import { IParserTestStemParseOutput from '@app/interfaces/core/parsers/IParserTestStemParseOutput';

export interface IParserTestStemParse {
	(args: IParseInput): IParserTestStemParseOutput;
}`;

export const writtenInterfaceParseFake: ICommonCodeStr[] = [
	writtenInterfaceParseFakeIter.trim(),
	writtenInterfaceParseFakeLeaf.trim(),
	writtenInterfaceParseFakeStem.trim(),
];
