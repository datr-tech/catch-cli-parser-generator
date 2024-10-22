import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { IDataParserDefIter, IDataParserDefStem } from '@app/interfaces/data/parserDefs';
import { ITransformerParserDef } from '@app/interfaces/core/transformers';
import { transformStrToUcfirst } from './transformStrToUcfirst';

export const transformParserDefPropChildParserUcfirst: ITransformerParserDef = ({ parserDef }) => {
	const parserDefCloned = { ...parserDef };

	if (parserDefCloned.type === ParserTypeEnum.LEAF) {
		return parserDefCloned;
	}

	if (parserDefCloned.type === ParserTypeEnum.ITER) {
		const parserDefIter = parserDefCloned as IDataParserDefIter;

		parserDefIter.childParser = transformStrToUcfirst({
			value: parserDefIter.childParser,
			name: 'childParser',
		});
		return parserDefIter;
	}

	if (parserDefCloned.type === ParserTypeEnum.STEM) {
		const parserDefStem = parserDefCloned as IDataParserDefStem;
		const { childParserWrappers } = parserDefStem;

		if (childParserWrappers) {
			parserDefStem.childParserWrappers = childParserWrappers.map((childParserWrapper) => {
				childParserWrapper.childParser = transformStrToUcfirst({
					value: childParserWrapper.childParser,
					name: 'childParser',
				});
				return childParserWrapper;
			});

			return parserDefStem;
		}
	}
};
