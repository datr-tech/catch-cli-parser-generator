import { IDataParserDefStem } from '@app/interfaces/data/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeChildParserWrappers: IDataParserDefStem = {
	...parserDefStemPositive,
	childParserWrappers: [],
};
