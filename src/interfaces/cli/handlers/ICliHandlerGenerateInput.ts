import { ICliCommonGenerateOptions } from '@app/interfaces/cli/commands';
import { IGeneratorCode } from '@app/interfaces/core/generators';
import { IWriter } from '@app/interfaces/core/writers';
import { IDataJSON } from '@app/interfaces/data';

export interface ICliHandlerGenerateInput {
	json: IDataJSON;
	options?: ICliCommonGenerateOptions;
	generator?: IGeneratorCode;
	write?: IWriter;
}
