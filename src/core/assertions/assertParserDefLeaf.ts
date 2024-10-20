import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { IAssertParserDef } from '@app/interfaces/core/assertions';
import { IParserDefLeaf } from '@app/interfaces/args/parserDefs';

export const assertParserDefLeaf: IAssertParserDef = ({ parserDef }) => {
	if (parserDef.type === ParserTypeEnum.LEAF) {
		if (!(parserDef as IParserDefLeaf).el.class) {
			throw new TypeError("Invalid 'parserDef.el.class'");
		}
		if (!(parserDef as IParserDefLeaf).parser) {
			throw new TypeError("Invalid 'parserDef.parser'");
		}
	}
};
