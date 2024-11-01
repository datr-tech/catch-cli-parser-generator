import { TemplateParserMethodEnum } from '@app/config/enums';
import { ICommonJsonDefPayloadBase } from './ICommonJsonDefPayloadBase';
import { ICommonJsonDefPayloadStemChildParser } from './ICommonJsonDefPayloadStemChildParser';

export interface ICommonJsonDefPayloadStem extends ICommonJsonDefPayloadBase {
	method: TemplateParserMethodEnum;
	childParsers: ICommonJsonDefPayloadStemChildParser[];
}
