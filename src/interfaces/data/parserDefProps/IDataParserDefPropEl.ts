import { IDataCommonClass } from '@app/interfaces/data/common';
import { ParserTagEnum } from '@app/config/enums';

export interface IDataParserDefPropEl {
	class: IDataCommonClass;
	tag: ParserTagEnum;
}
