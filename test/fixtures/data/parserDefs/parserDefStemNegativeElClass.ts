import { ParserTagEnum } from '@app/config/enums';
import { IDataParserDefStem } from '@app/interfaces/data/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeElClass: IDataParserDefStem = {
	...parserDefStemPositive,
	el: {
		class: '',
		tag: ParserTagEnum.SPAN,
	},
};
