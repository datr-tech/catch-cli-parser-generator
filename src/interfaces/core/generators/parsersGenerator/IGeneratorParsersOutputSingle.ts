import { IGeneratorParserOutput } from '@app/interfaces/core/generators/parserGenerator';
import { IGeneratorInterfaceOutput } from '@app/interfaces/core/generators/interfaceGenerator';

export interface IGeneratorParsersOutputSingle
	extends IGeneratorParserOutput,
		IGeneratorInterfaceOutput {}
