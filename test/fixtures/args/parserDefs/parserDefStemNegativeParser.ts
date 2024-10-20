import { IParserDefStem } from '@app/interfaces/args/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeParser: IParserDefStem = {
	...parserDefStemPositive,
	parser: '',
};
