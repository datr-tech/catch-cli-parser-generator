import { IDataParserDefStem } from '@app/interfaces/data/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeParser: IDataParserDefStem = {
	...parserDefStemPositive,
	parser: '',
};
