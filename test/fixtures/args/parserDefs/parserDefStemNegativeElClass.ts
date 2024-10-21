import { ParserTagEnum } from '@app/config/enums';
import { IArgsParserDefStem } from '@app/interfaces/args/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeElClass: IArgsParserDefStem = {
	...parserDefStemPositive,
	el: {
		class: '',
		tag: ParserTagEnum.SPAN,
	},
};
