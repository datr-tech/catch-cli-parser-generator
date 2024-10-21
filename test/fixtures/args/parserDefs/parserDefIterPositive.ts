import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { IArgsParserDefIter } from '@app/interfaces/args/parserDefs';

export const parserDefIterPositive: IArgsParserDefIter = {
	parser: 'iter',
	childParser: 'child',
	type: ParserTypeEnum.ITER,
};
