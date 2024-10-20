import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { ParserMethodEnum } from '@@app/config/enums';
import { IParserDefPropEl, IParserDefPropParser } from '@app/interfaces/args/parserDefProps';

export interface IParserDefLeaf {
	el: IParserDefPropEl;
	parser: IParserDefPropParser;
	method: ParserMethodEnum;
	type: ParserTypeEnum.LEAF;
}
