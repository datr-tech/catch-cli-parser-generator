import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import {
	IArgsParserDefPropEl,
	IArgsParserDefPropChildParserWrappers,
	IArgsParserDefPropParser,
} from '@app/interfaces/args/parserDefProps';

export interface IArgsParserDefStem {
	childParserWrappers: IArgsParserDefPropChildParserWrappers;
	el: IArgsParserDefPropEl;
	parser: IArgsParserDefPropParser;
	type: ParserTypeEnum.STEM;
}
