import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import {
	IParserDefPropEl,
	IParserDefPropChildParserWrappers,
	IParserDefPropParser,
} from '@app/interfaces/core/generators/parserDefProps';

export interface IParserDefStem {
	childParserWrappers: IParserDefPropChildParserWrappers;
	el: IParserDefPropEl;
	parser: IParserDefPropParser;
	type: ParserTypeEnum.STEM;
}
