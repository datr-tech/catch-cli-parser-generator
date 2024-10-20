import { IParserDefStem } from '@app/interfaces/args/parserDefs';
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
