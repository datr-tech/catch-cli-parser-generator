import { IArgsParserDefStem } from '@app/interfaces/args/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeParser: IArgsParserDefStem = {
	...parserDefStemPositive,
	parser: '',
};
