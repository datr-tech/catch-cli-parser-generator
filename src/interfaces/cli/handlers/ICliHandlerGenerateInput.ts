import { ICliOptionsGenerate } from '@app/interfaces/cli/options';
import { ICommonJson } from '@app/interfaces/common';

export interface ICliHandlerGenerateInput {
	json: ICommonJson;
	options?: ICliOptionsGenerate;
}
