export const parserInterfaceStemPositiveUcfirst = `
import { IParserBuilderCoreOutput } from '@datr.tech/catch-lib-parser-core';
import { IParserStemParse } from '@app/interfaces/core/parsers/IParserStemParse';

export interface IParserStem extends IParserBuilderCoreOutput {
	parse: IParserStemParse;
}`;
