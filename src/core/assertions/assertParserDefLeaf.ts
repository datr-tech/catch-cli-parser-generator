import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { IAssertParserDef } from '@app/interfaces/core/assertions';
import { IDataParserDefLeaf } from '@app/interfaces/data/parserDefs';

export const assertParserDefLeaf: IAssertParserDef = ({ parserDef }) => {
	if (parserDef.type === ParserTypeEnum.LEAF) {
		if (!(parserDef as IDataParserDefLeaf).el.class) {
			throw new TypeError("Invalid 'parserDef.el.class'");
		}
		if (!(parserDef as IDataParserDefLeaf).parser) {
			throw new TypeError("Invalid 'parserDef.parser'");
		}
	}
};
