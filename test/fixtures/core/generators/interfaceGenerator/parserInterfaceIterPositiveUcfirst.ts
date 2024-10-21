export const parserInterfaceIterPositiveUcfirst = `
import { IParserBuilderCoreOutput } from '@datr.tech/catch-lib-parser-core';
import { IParserIterParse } from '@app/interfaces/core/parsers/IParserIterParse';

export interface IParserIter extends IParserBuilderCoreOutput {
	parse: IParserIterParse;
}`;
