import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { IAssertParserDef } from '@app/interfaces/core/assertions';
import { IDataParserDefStem } from '@app/interfaces/data/parserDefs';
import { IDataParserDefPropChildParserWrapper } from '@app/interfaces/data/parserDefProps';

export const assertParserDefStem: IAssertParserDef = ({ parserDef }) => {
	if (parserDef.type === ParserTypeEnum.STEM) {
		if ((parserDef as IDataParserDefStem).childParserWrappers.length === 0) {
			throw new TypeError("Invalid 'parserDef.childParserWrappers'");
		}

		if (!(parserDef as IDataParserDefStem).el.class) {
			throw new TypeError("Invalid 'parserDef.el.class'");
		}

		if (!(parserDef as IDataParserDefStem).parser) {
			throw new TypeError("Invalid 'parserDef.parser'");
		}

		if ((parserDef as IDataParserDefStem).childParserWrappers) {
			(parserDef as IDataParserDefStem).childParserWrappers.forEach(
				(childParserWrapper: IDataParserDefPropChildParserWrapper) => {
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
