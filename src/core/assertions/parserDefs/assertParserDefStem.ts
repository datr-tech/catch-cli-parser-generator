import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { IAssertionParserDef } from '@app/interfaces/core/assertions/parserDefs';
import { IParserDefStem } from '@app/interfaces/core/generators/parserDefs';
import { IParserDefPropChildParserWrapper } from '@app/interfaces/core/generators/parserDefProps';

export const assertParserDefStem: IAssertionParserDef = ({ parserDef }) => {
	if (parserDef.type === ParserTypeEnum.STEM) {
		if ((parserDef as IParserDefStem).childParserWrappers.length === 0) {
			throw new TypeError("Invalid 'parserDef.childParserWrappers'");
		}
		if (!(parserDef as IParserDefStem).el.class) {
			throw new TypeError("Invalid 'parserDef.el.class'");
		}
		if (!(parserDef as IParserDefStem).parser) {
			throw new TypeError("Invalid 'parserDef.parser'");
		}
		if ((parserDef as IParserDefStem).childParserWrappers) {
			(parserDef as IParserDefStem).childParserWrappers.forEach(
				(childParserWrapper: IParserDefPropChildParserWrapper) => {
					if (!childParserWrapper.childParser) {
						throw new TypeError("Invalid 'parserDef.childParserWrappers[].childParser'");
					}

					if (!childParserWrapper.ref) {
						throw new TypeError("Invalid 'parserDef.childParserWrappers[].ref'");
					}
				},
			);
		}
	}
};
