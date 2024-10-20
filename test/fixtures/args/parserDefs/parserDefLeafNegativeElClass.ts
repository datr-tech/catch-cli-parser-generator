import { ParserTagEnum } from '@app/config/enums';
import { IParserDefLeaf } from '@app/interfaces/args/parserDefs';
import { parserDefLeafPositive } from './parserDefLeafPositive';

export const parserDefLeafNegativeElClass: IParserDefLeaf = {
	...parserDefLeafPositive,
	el: {
		class: '',
		tag: ParserTagEnum.DIV,
	},
};
