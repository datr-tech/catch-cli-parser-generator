import { IParserDefStem } from '@app/interfaces/core/generators/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeChildParserWrappersChildParser: IParserDefStem = {
	...parserDefStemPositive,
	childParserWrappers: [
		{
			ref: 'name',
			childParser: 'name',
		},
		{
			ref: 'nameHref',
			childParser: '',
		},
		{
			ref: 'title',
			childParser: 'title',
		},
	],
};
