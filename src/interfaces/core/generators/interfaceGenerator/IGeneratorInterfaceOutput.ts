import { IParserDef } from '@app/interfaces/core/generators/parserDefs';

export interface IGeneratorInterfaceOutput {
	parserDef: IParserDef;
	parseOutputInterface: string;
	parseInterface: string;
	parserInterface: string;
}
