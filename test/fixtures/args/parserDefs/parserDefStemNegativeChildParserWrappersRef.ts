import { IParserDefStem } from '@app/interfaces/args/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeChildParserWrappersRef: IParserDefStem = {
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
