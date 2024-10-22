import { IDataCommonBaseString } from '@app/interfaces/data/common';
import { ICodeGeneratorHelperGenerateInterfaceInput } from './ICodeGeneratorHelperGenerateInterfaceInput';

export interface ICodeGeneratorHelperGenerateInterface {
	(args: ICodeGeneratorHelperGenerateInterfaceInput): IDataCommonBaseString;
}
