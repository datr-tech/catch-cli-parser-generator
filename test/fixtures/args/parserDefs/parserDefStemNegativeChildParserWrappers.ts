import { IParserDefStem } from '@app/interfaces/args/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeChildParserWrappers: IParserDefStem = {
	...parserDefStemPositive,
	childParserWrappers: [],
};
