import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import {
	IDataParserDefPropChildParser,
	IDataParserDefPropParser,
} from '@app/interfaces/data/parserDefProps';

export interface IDataParserDefIter {
	childParser: IDataParserDefPropChildParser;
	parser: IDataParserDefPropParser;
	type: ParserTypeEnum.ITER;
}
