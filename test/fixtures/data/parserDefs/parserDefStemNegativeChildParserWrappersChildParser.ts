import { IDataParserDefStem } from '@app/interfaces/data/parserDefs';
import { parserDefStemPositive } from './parserDefStemPositive';

export const parserDefStemNegativeChildParserWrappersChildParser: IDataParserDefStem = {
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
