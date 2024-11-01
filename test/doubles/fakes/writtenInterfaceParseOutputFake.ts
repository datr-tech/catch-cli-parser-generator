import { ICommonCodeStr } from '@app/interfaces/common';

const writtenInterfaceParseOutputFakeIter: ICommonCodeStr = `
import { IParserTestIterChildParseOutput } from '@app/interfaces/core/parsers/IParserTestIterChildParseOutput';

export type IParserTestIterParseOutput = IParserTestIterChildParseOutput[];`;

const writtenInterfaceParseOutputFakeLeaf: ICommonCodeStr = `
export type IParserTestLeafParseOutput = string | undefined;`;

const writtenInterfaceParseOutputFakeStem: ICommonCodeStr = `
import { IParserTestStemChildOneParseOutput } from '@app/interfaces/core/parsers/IParserTestStemChildOneParseOutput';
import { IParserTestStemChildTwoParseOutput } from '@app/interfaces/core/parsers/IParserTestStemChildTwoParseOutput';

export type IParserTestStemParseOutput = {
		childOne: IParserTestStemChildOneParseOutput;
		childTwo: IParserTestStemChildTwoParseOutput;
};`;

export const writtenInterfaceParseOutputFake: ICommonCodeStr[] = [
	writtenInterfaceParseOutputFakeIter.trim(),
	writtenInterfaceParseOutputFakeLeaf.trim(),
	writtenInterfaceParseOutputFakeStem.trim(),
];
