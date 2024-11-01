import { TemplateParserMethodEnum } from '@app/config/enums';
import { ICommonJsonDefPayloadBase } from './ICommonJsonDefPayloadBase';

export interface ICommonJsonDefPayloadLeaf extends ICommonJsonDefPayloadBase {
	method: TemplateParserMethodEnum;
}
