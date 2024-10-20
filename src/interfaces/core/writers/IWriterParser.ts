import { IWriterParserValidate } from './IWriterParserValidate';
import { IWriterParserWrite } from './IWriterParserWrite';

export interface IWriterParser {
	validate: IWriterParserValidate;
	write: IWriterParserWrite;
}
