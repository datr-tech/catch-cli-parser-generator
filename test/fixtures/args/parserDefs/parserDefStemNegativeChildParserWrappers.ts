import { IArgsParserDefStem } from '@app/interfaces/args/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeChildParserWrappers: IArgsParserDefStem = {
	...parserDefStemPositive,
	childParserWrappers: [],
};
