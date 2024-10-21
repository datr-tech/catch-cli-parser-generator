import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import {
	IArgsParserDefPropChildParser,
	IArgsParserDefPropParser,
} from '@app/interfaces/args/parserDefProps';

export interface IArgsParserDefIter {
	childParser: IArgsParserDefPropChildParser;
	parser: IArgsParserDefPropParser;
	type: ParserTypeEnum.ITER;
}
