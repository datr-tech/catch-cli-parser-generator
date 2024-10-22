import { IDataParserDefLeaf } from '@app/interfaces/data/parserDefs';
import { parserDefLeafPositive } from './parserDefLeafPositive';

export const parserDefLeafNegativeParser: IDataParserDefLeaf = {
	...parserDefLeafPositive,
	parser: '',
};
