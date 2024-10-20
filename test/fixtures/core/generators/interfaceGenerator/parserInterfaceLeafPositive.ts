export const parserInterfaceLeafPositive = `
import { IParserBuilderCoreOutput } from '@datr.tech/catch-lib-parser-core';
import { IParserleafParse } from '@app/interfaces/core/parsers/IParserleafParse';

export interface IParserleaf extends IParserBuilderCoreOutput {
	parse: IParserleafParse;
}`;
