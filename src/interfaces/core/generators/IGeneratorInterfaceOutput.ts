import { IDataCommonCode } from '@app/interfaces/data/common';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';

export interface IGeneratorInterfaceOutput {
	parserDef: IDataParserDef;
	parseOutputInterface: IDataCommonCode;
	parseInterface: IDataCommonCode;
	parserInterface: IDataCommonCode;
}
