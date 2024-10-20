import { IParserDefLeaf } from '@app/interfaces/args/parserDefs';
import { parserDefLeafPositive } from './parserDefLeafPositive';

export const parserDefLeafNegativeParser: IParserDefLeaf = {
	...parserDefLeafPositive,
	parser: '',
};
