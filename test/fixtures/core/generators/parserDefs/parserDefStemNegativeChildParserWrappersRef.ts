import { IParserDefStem } from '@app/interfaces/core/generators/parserDefs';
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
