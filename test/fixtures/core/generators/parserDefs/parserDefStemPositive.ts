import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { ParserTagEnum } from '@app/config/enums';
import { IParserDefStem } from '@app/interfaces/core/generators/parserDefs';

export const parserDefStemPositive: IParserDefStem = {
	childParserWrappers: [
		{
			ref: 'name',
			childParser: 'name',
		},
		{
			ref: 'nameHref',
			childParser: 'nameHref',
		},
		{
			ref: 'title',
			childParser: 'title',
		},
	],
	el: {
		class: 'stem',
		tag: ParserTagEnum.SPAN,
	},
	parser: 'stem',
	type: ParserTypeEnum.STEM,
};
