import { ICommonNameStr } from '@app/interfaces/common';
import { TemplateTypeEnum } from '@app/config/enums';

export interface IHelperDeriveFileNamesOutputElement {
	codeFileName: ICommonNameStr;
	templateTypeEnum: TemplateTypeEnum;
}
