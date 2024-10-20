import { IGeneratorParserInput } from './IGeneratorParserInput';
import { IGeneratorParserOutput } from './IGeneratorParserOutput';

export interface IGeneratorParser {
	(args: IGeneratorParserInput): IGeneratorParserOutput;
}
