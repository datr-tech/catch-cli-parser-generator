import { IDataParserDef } from '@app/interfaces/data/parserDefs';
import { IDataJSONOut } from './IDataJSONOut';

export interface IDataJSON {
	parserDefs: IDataParserDef[];
	out?: IDataJSONOut;
}
