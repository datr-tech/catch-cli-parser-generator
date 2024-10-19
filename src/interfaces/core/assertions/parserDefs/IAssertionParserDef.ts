import { IAssertionParserDefInput } from './IAssertionParserDefInput';

export interface IAssertionParserDef {
	(args: IAssertionParserDefInput): void;
}
