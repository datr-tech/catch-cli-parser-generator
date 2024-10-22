import { IDataCommonName } from '@app/interfaces/data/common';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';

export interface ICodeGeneratorHelperGenerateInterfaceInput {
	parserDef: IDataParserDef;
	name: IDataCommonName;
}
