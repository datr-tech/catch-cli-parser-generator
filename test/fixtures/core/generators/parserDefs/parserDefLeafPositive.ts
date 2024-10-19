import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { ParserMethodEnum, ParserTagEnum } from '@app/config/enums';
import { IParserDefLeaf } from '@app/interfaces/core/generators/parserDefs';

export const parserDefLeafPositive: IParserDefLeaf = {
	el: {
		class: 'leaf',
		tag: ParserTagEnum.DIV,
	},
	parser: 'leaf',
	method: ParserMethodEnum.INNER_TEXT,
	type: ParserTypeEnum.LEAF,
};
