import { IWriterParserValidateInput } from './IWriterParserValidateInput';

export interface IWriterParserValidate {
	(args: IWriterParserValidateInput): boolean;
}
