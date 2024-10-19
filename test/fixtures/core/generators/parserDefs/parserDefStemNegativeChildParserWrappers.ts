import { IParserDefStem } from '@app/interfaces/core/generators/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeChildParserWrappers: IParserDefStem = {
	...parserDefStemPositive,
	childParserWrappers: [],
};
