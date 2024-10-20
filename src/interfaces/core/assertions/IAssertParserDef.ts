import { IAssertParserDefInput } from './IAssertParserDefInput';

export interface IAssertParserDef {
	(args: IAssertParserDefInput): void;
}
