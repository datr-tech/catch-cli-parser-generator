import { IGeneratorParserOutput } from './IGeneratorParserOutput';
import { IGeneratorInterfaceOutput } from './IGeneratorInterfaceOutput';

export interface IGeneratorCodeOutputSingle
	extends IGeneratorParserOutput,
		IGeneratorInterfaceOutput {}
