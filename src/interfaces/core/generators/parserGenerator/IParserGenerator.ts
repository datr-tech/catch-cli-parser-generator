import { IParserGeneratorInput } from './IParserGeneratorInput';
import { IParserGeneratorOutput } from './IParserGeneratorOutput';

export interface IParserGenerator {
	(args: IParserGeneratorInput): IParserGeneratorOutput;
}
