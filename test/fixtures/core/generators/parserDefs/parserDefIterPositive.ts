import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { IParserDefIter } from '@app/interfaces/core/generators/parserDefs';

export const parserDefIterPositive: IParserDefIter = {
	parser: 'iter',
	childParser: 'child',
	type: ParserTypeEnum.ITER,
};
