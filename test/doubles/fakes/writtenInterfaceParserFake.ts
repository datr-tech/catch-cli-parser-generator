import { ICommonCodeStr } from '@app/interfaces/common';

const writtenInterfaceParserFakeIter: ICommonCodeStr = `
import { IParserBuilderCoreOutput } from '@datr.tech/catch-lib-parser-core';
import { IParserTestIterParse } from '@app/interfaces/core/parsers/IParserTestIterParse';

export interface IParserTestIter extends IParserBuilderCoreOutput {
	parse: IParserTestIterParse;
}`;

const writtenInterfaceParserFakeLeaf: ICommonCodeStr = `
import { IParserBuilderCoreOutput } from '@datr.tech/catch-lib-parser-core';
import { IParserTestLeafParse } from '@app/interfaces/core/parsers/IParserTestLeafParse';

export interface IParserTestLeaf extends IParserBuilderCoreOutput {
	parse: IParserTestLeafParse;
}`;

const writtenInterfaceParserFakeStem: ICommonCodeStr = `
import { IParserBuilderCoreOutput } from '@datr.tech/catch-lib-parser-core';
import { IParserTestStemParse } from '@app/interfaces/core/parsers/IParserTestStemParse';

export interface IParserTestStem extends IParserBuilderCoreOutput {
	parse: IParserTestStemParse;
}`;

export const writtenInterfaceParserFake: ICommonCodeStr[] = [
	writtenInterfaceParserFakeIter.trim(),
	writtenInterfaceParserFakeLeaf.trim(),
	writtenInterfaceParserFakeStem.trim(),
];
