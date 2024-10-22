import { IDataParserDefStem } from '@app/interfaces/data/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeChildParserWrappersRef: IDataParserDefStem = {
	...parserDefStemPositive,
	childParserWrappers: [
		{
			ref: 'name',
			childParser: 'name',
		},
		{
			ref: '',
			childParser: 'nameHref',
		},
		{
			ref: 'title',
			childParser: 'title',
		},
	],
};
