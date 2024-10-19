import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { IAssertionParserDef } from '@app/interfaces/core/assertions/parserDefs';
import { IParserDefLeaf } from '@app/interfaces/core/generators/parserDefs';

export const assertParserDefLeaf: IAssertionParserDef = ({ parserDef }) => {
	if (parserDef.type === ParserTypeEnum.LEAF) {
		if (!(parserDef as IParserDefLeaf).el.class) {
			throw new TypeError("Invalid 'parserDef.el.class'");
		}
		if (!(parserDef as IParserDefLeaf).parser) {
			throw new TypeError("Invalid 'parserDef.parser'");
		}
	}
};
