import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { ParserMethodEnum } from '@@app/config/enums';
import {
	IArgsParserDefPropEl,
	IArgsParserDefPropParser,
} from '@app/interfaces/args/parserDefProps';

export interface IArgsParserDefLeaf {
	el: IArgsParserDefPropEl;
	parser: IArgsParserDefPropParser;
	method: ParserMethodEnum;
	type: ParserTypeEnum.LEAF;
}
