export const parserCodeLeafPositive = `
import { parserBuilderLeaf, IParseHandler } from '@datr.tech/catch-lib-parser-core';

const elName = 'div.MOCK';
const parseHandler: IParseHandler = async ({ el }) => (await el.innerText()) as string;

export const mockParser = parserBuilderLeaf({ elName, parseHandler });`;
