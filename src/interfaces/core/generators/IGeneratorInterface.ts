import { IGeneratorInterfaceInput } from './IGeneratorInterfaceInput';
import { IGeneratorInterfaceOutput } from './IGeneratorInterfaceOutput';

export interface IGeneratorInterface {
	(args: IGeneratorInterfaceInput): IGeneratorInterfaceOutput;
}
