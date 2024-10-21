import { IArgsJSON, IArgsOptions } from '@app/interfaces/args';
import { IGeneratorParsers } from '@app/interfaces/core/generators';
import { IWriterParser } from '@app/interfaces/core/writers';

export interface IHandlerGenerateInput {
	json: IArgsJSON;
	options: IArgsOptions;
	generateCode?: IGeneratorParsers;
	writer?: IWriterParser;
}
