import { IGeneratorParsersInput } from './IGeneratorParsersInput';
import { IGeneratorParsersOutput } from './IGeneratorParsersOutput';

export interface IGeneratorParsers {
	(args: IGeneratorParsersInput): IGeneratorParsersOutput;
}
