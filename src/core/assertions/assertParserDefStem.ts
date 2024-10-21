import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { IAssertParserDef } from '@app/interfaces/core/assertions';
import { IArgsParserDefStem } from '@app/interfaces/args/parserDefs';
import { IArgsParserDefPropChildParserWrapper } from '@app/interfaces/args/parserDefProps';

export const assertParserDefStem: IAssertParserDef = ({ parserDef }) => {
	if (parserDef.type === ParserTypeEnum.STEM) {
		if ((parserDef as IArgsParserDefStem).childParserWrappers.length === 0) {
			throw new TypeError("Invalid 'parserDef.childParserWrappers'");
		}

		if (!(parserDef as IArgsParserDefStem).el.class) {
			throw new TypeError("Invalid 'parserDef.el.class'");
		}

		if (!(parserDef as IArgsParserDefStem).parser) {
			throw new TypeError("Invalid 'parserDef.parser'");
		}

		if ((parserDef as IArgsParserDefStem).childParserWrappers) {
			(parserDef as IArgsParserDefStem).childParserWrappers.forEach(
				(childParserWrapper: IArgsParserDefPropChildParserWrapper) => {
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
