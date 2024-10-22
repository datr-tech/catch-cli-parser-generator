import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { IDataParserDefIter } from '@app/interfaces/data/parserDefs';

export const parserDefIterPositive: IDataParserDefIter = {
	parser: 'iter',
	childParser: 'child',
	type: ParserTypeEnum.ITER,
};
