export const parserInterfaceIterPositive = `
import { IParserBuilderCoreOutput } from '@datr.tech/catch-lib-parser-core';
import { IParseriterParse } from '@app/interfaces/core/parsers/IParseriterParse';

export interface IParseriter extends IParserBuilderCoreOutput {
	parse: IParseriterParse;
}`;
