import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { ParserMethodEnum, ParserTagEnum } from '@app/config/enums';
import { IDataParserDefLeaf } from '@app/interfaces/data/parserDefs';

export const parserDefLeafPositive: IDataParserDefLeaf = {
	el: {
		class: 'leaf',
		tag: ParserTagEnum.DIV,
	},
	parser: 'leaf',
	method: ParserMethodEnum.INNER_TEXT,
	type: ParserTypeEnum.LEAF,
};
