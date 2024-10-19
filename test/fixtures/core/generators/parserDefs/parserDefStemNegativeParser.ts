import { IParserDefStem } from '@app/interfaces/core/generators/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeParser: IParserDefStem = {
	...parserDefStemPositive,
	parser: '',
};
