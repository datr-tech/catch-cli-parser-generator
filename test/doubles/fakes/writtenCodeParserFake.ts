import { ICommonCodeStr } from '@app/interfaces/common';

const writtenCodeFakeParserIter: ICommonCodeStr = `
import { parserBuilderIter, IParseHandler } from '@datr.tech/catch-lib-parser-core';

export const TestIterParser = parserBuilderIter({ TestIterChildParser });`;

const writtenCodeFakeParserLeaf: ICommonCodeStr = `
import { parserBuilderLeaf, IParseHandler } from '@datr.tech/catch-lib-parser-core';

const elName = 'div.test-leaf';
const parseHandler: IParseHandler = async ({ el }) => (await el.innerText()) as string;

export const TestLeafParser = parserBuilderLeaf({ elName, parseHandler });`;

const writtenCodeFakeParserStem: ICommonCodeStr = `
import { parserBuilderStem, IParseHandler } from '@datr.tech/catch-lib-parser-core';

const elName = 'div.test-stem';

const parseHandler: IParseHandler = async ({ el }) =>
({
		childOne: await TestStemChildOneParser.parse({ elParent: el }),
		childTwo: await TestStemChildTwoParser.parse({ elParent: el }),
});

export const TestStemParser = parserBuilderStem({ elName, parseHandler });`;

export const writtenCodeParserFake: ICommonCodeStr[] = [
	writtenCodeFakeParserIter.trim(),
	writtenCodeFakeParserLeaf.trim(),
	writtenCodeFakeParserStem.trim(),
];
