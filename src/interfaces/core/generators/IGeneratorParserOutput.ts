import { IDataCommonCode } from '@app/interfaces/data/common';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';

export interface IGeneratorParserOutput {
	parserCode: IDataCommonCode;
	parserDef: IDataParserDef;
}
