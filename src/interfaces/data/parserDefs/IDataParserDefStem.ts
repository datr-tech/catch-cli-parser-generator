import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import {
	IDataParserDefPropEl,
	IDataParserDefPropChildParserWrappers,
	IDataParserDefPropParser,
} from '@app/interfaces/data/parserDefProps';

export interface IDataParserDefStem {
	childParserWrappers: IDataParserDefPropChildParserWrappers;
	el: IDataParserDefPropEl;
	parser: IDataParserDefPropParser;
	type: ParserTypeEnum.STEM;
}
