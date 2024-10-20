import { ParserTagEnum } from '@app/config/enums';
import { IParserDefStem } from '@app/interfaces/args/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeElClass: IParserDefStem = {
	...parserDefStemPositive,
	el: {
		class: '',
		tag: ParserTagEnum.SPAN,
	},
};
