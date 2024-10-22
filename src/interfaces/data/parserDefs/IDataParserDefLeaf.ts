import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { ParserMethodEnum } from '@app/config/enums';
import {
	IDataParserDefPropEl,
	IDataParserDefPropParser,
} from '@app/interfaces/data/parserDefProps';

export interface IDataParserDefLeaf {
	el: IDataParserDefPropEl;
	parser: IDataParserDefPropParser;
	method: ParserMethodEnum;
	type: ParserTypeEnum.LEAF;
}
