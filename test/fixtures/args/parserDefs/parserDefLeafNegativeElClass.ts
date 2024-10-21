import { ParserTagEnum } from '@app/config/enums';
import { IArgsParserDefLeaf } from '@app/interfaces/args/parserDefs';
import { parserDefLeafPositive } from './parserDefLeafPositive';

export const parserDefLeafNegativeElClass: IArgsParserDefLeaf = {
	...parserDefLeafPositive,
	el: {
		class: '',
		tag: ParserTagEnum.DIV,
	},
};
