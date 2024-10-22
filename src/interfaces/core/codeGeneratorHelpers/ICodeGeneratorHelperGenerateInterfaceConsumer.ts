import { IDataCommonBaseString } from '@app/interfaces/data/common';
import { ICodeGeneratorHelperGenerateInterfaceConsumerInput } from './ICodeGeneratorHelperGenerateInterfaceConsumerInput';

export interface ICodeGeneratorHelperGenerateInterfaceConsumer {
	(args: ICodeGeneratorHelperGenerateInterfaceConsumerInput): IDataCommonBaseString;
}
