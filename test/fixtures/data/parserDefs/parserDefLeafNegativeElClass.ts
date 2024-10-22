import { ParserTagEnum } from '@app/config/enums';
import { IDataParserDefLeaf } from '@app/interfaces/data/parserDefs';
import { parserDefLeafPositive } from './parserDefLeafPositive';

export const parserDefLeafNegativeElClass: IDataParserDefLeaf = {
	...parserDefLeafPositive,
	el: {
		class: '',
		tag: ParserTagEnum.DIV,
	},
};
