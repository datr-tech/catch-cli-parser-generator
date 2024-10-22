import { IDataParserDefIter } from './IDataParserDefIter';
import { IDataParserDefLeaf } from './IDataParserDefLeaf';
import { IDataParserDefStem } from './IDataParserDefStem';

export type IDataParserDef = IDataParserDefIter | IDataParserDefLeaf | IDataParserDefStem;
