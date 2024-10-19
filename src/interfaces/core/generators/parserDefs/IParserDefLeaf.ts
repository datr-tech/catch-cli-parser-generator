import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { ParserDefMethodEnum } from '@app/config/enums';
import { IParserDefLeafEl } from './IParserDefLeafEl';

export interface IParserDefLeaf {
	el: IParserDefLeafEl;
	parser: string;
	method: ParserDefMethodEnum;
	type: ParserTypeEnum.LEAF;
}
