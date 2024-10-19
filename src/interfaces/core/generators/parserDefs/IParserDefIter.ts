import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import {
	IParserDefPropChildParser,
	IParserDefPropParser,
} from '@app/interfaces/core/generators/parserDefProps';

export interface IParserDefIter {
	childParser: IParserDefPropChildParser;
	parser: IParserDefPropParser;
	type: ParserTypeEnum.ITER;
}
