import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { ParserMethodEnum, ParserTagEnum } from '@app/config/enums';
import { IArgsParserDefLeaf } from '@app/interfaces/args/parserDefs';

export const parserDefLeafPositive: IArgsParserDefLeaf = {
	el: {
		class: 'leaf',
		tag: ParserTagEnum.DIV,
	},
	parser: 'leaf',
	method: ParserMethodEnum.INNER_TEXT,
	type: ParserTypeEnum.LEAF,
};
