import { ITransformerStrInput } from './ITransformerStrInput';
import { ITransformerStrOutput } from './ITransformerStrOutput';

export interface ITransformerStr {
	(args: ITransformerStrInput): ITransformerStrOutput;
}
