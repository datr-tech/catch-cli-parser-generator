import { IArgsParserDef } from '@app/interfaces/args/parserDefs';

export interface IGeneratorInterfaceOutput {
	parserDef: IArgsParserDef;
	parseOutputInterface: string;
	parseInterface: string;
	parserInterface: string;
}
