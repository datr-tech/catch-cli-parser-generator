import { IArgsParserDefLeaf } from '@app/interfaces/args/parserDefs';
import { parserDefLeafPositive } from './parserDefLeafPositive';

export const parserDefLeafNegativeParser: IArgsParserDefLeaf = {
	...parserDefLeafPositive,
	parser: '',
};
