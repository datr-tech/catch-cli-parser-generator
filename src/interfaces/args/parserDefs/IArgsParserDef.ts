import { IArgsParserDefIter } from './IArgsParserDefIter';
import { IArgsParserDefLeaf } from './IArgsParserDefLeaf';
import { IArgsParserDefStem } from './IArgsParserDefStem';

export type IArgsParserDef = IArgsParserDefIter | IArgsParserDefLeaf | IArgsParserDefStem;
