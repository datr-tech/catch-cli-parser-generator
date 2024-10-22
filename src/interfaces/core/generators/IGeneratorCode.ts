import { IGeneratorCodeInput } from './IGeneratorCodeInput';
import { IGeneratorCodeOutput } from './IGeneratorCodeOutput';

export interface IGeneratorCode {
	(args: IGeneratorCodeInput): IGeneratorCodeOutput;
}
