import { IArgsParserDef } from '@app/interfaces/args/parserDefs';
import { IArgsJSONOut } from './IArgsJSONOut';

export interface IArgsJSON {
	parserDefs: IArgsParserDef[];
	out?: IArgsJSONOut;
}
