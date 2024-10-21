export const parserInterfaceLeafPositiveUcfirst = `
import { IParserBuilderCoreOutput } from '@datr.tech/catch-lib-parser-core';
import { IParserLeafParse } from '@app/interfaces/core/parsers/IParserLeafParse';

export interface IParserLeaf extends IParserBuilderCoreOutput {
	parse: IParserLeafParse;
}`;
