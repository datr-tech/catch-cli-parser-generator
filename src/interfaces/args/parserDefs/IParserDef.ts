import { IParserDefIter } from './IParserDefIter';
import { IParserDefLeaf } from './IParserDefLeaf';
import { IParserDefStem } from './IParserDefStem';

export type IParserDef = IParserDefIter | IParserDefLeaf | IParserDefStem;
