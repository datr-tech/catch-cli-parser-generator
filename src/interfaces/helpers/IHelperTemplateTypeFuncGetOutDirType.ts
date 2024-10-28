import { OutDirTypeEnum } from '@app/config/enums';
import { IHelperTemplateTypeFuncGetOutDirTypeInput } from './IHelperTemplateTypeFuncGetOutDirTypeInput';

export interface IHelperTemplateTypeFuncGetOutDirType {
	(args: IHelperTemplateTypeFuncGetOutDirTypeInput): OutDirTypeEnum;
}
