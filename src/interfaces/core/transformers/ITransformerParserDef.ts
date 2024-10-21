import { ITransformerParserDefInput } from './ITransformerParserDefInput';
import { ITransformerParserDefOutput } from './ITransformerParserDefOutput';

export interface ITransformerParserDef {
	(args: ITransformerParserDefInput): ITransformerParserDefOutput;
}
