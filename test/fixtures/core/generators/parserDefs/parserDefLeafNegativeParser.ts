import { IParserDefLeaf } from '@app/interfaces/core/generators/parserDefs';
import { parserDefLeafPositive } from './parserDefLeafPositive';

export const parserDefLeafNegativeParser: IParserDefLeaf = {
	...parserDefLeafPositive,
	parser: '',
};
