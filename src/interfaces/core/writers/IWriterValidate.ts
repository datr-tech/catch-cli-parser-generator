import { IWriterValidateInput } from './IWriterValidateInput';

export interface IWriterValidate {
	(args: IWriterValidateInput): boolean;
}
