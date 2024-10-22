import { ICliHandlerGenerateInput } from './ICliHandlerGenerateInput';

export interface ICliHandlerGenerate {
	(args: ICliHandlerGenerateInput): void;
}
