export const parserInterfaceStemPositive = `
import { IParserBuilderCoreOutput } from '@datr.tech/catch-lib-parser-core';
import { IParserstemParse } from '@app/interfaces/core/parsers/IParserstemParse';

export interface IParserstem extends IParserBuilderCoreOutput {
	parse: IParserstemParse;
}`;
