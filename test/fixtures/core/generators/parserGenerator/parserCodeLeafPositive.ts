export const parserCodeLeafPositive = `
import { parserBuilderLeaf, IParseHandler } from '@datr.tech/catch-lib-parser-core';

const elName = 'div.leaf';
const parseHandler: IParseHandler = async ({ el }) => (await el.innerText()) as string;

export const leafParser = parserBuilderLeaf({ elName, parseHandler });`;
