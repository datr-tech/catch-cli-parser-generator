import { IWriterGetState } from './IWriterGetState';
import { IWriterValidate } from './IWriterValidate';
import { IWriterWrite } from './IWriterWrite';

export interface IWriter {
	validate: IWriterValidate;
	write: IWriterWrite;
	_getState: IWriterGetState;
}
