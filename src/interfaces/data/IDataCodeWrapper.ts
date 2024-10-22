import { IDataCommonCode, IDataCommonName } from '@app/interfaces/data/common';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';

export interface IDataCodeWrapper {
	code: IDataCommonCode;
	name: IDataCommonName;
	parserDef: IDataParserDef;
}
