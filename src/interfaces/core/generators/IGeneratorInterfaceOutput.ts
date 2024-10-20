import { IParserDef } from '@app/interfaces/args/parserDefs';

export interface IGeneratorInterfaceOutput {
	parserDef: IParserDef;
	parseOutputInterface: string;
	parseInterface: string;
	parserInterface: string;
}
