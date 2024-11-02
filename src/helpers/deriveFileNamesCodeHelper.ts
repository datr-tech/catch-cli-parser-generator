import { deriveFileNameCodeHelperBase } from '@app/helpers/deriveFileNameCodeHelperBase';
import {
	IHelperDeriveFileNames,
	IHelperDeriveFileNamesInput,
	IHelperDeriveFileNamesOutput,
	IHelperDeriveFileNamesOutputElement,
} from '@app/interfaces/helpers';
import { TemplateTypeEnum } from '@app/config/enums';
import { CONSTS_LABELS_TEMPLATE_TYPE_NON_PROD_KEY } from '@app/config/consts/labels';

export const deriveFileNamesCodeHelper: IHelperDeriveFileNames = ({
	defNameStr,
}: IHelperDeriveFileNamesInput): IHelperDeriveFileNamesOutput => {
	const templateTypeEnums: TemplateTypeEnum[] = Object.values(TemplateTypeEnum);

	const fileNamesCodeObjs: IHelperDeriveFileNamesOutputElement[] = templateTypeEnums.map(
		(templateTypeEnum: TemplateTypeEnum): IHelperDeriveFileNamesOutputElement => {
			if (!templateTypeEnum.toLowerCase().includes(CONSTS_LABELS_TEMPLATE_TYPE_NON_PROD_KEY)) {
				return {
					codeFileName: deriveFileNameCodeHelperBase({ defNameStr, templateTypeEnum }),
					templateTypeEnum,
				};
			}
		},
	);

	return fileNamesCodeObjs.filter(
		(fileNamesCodeObj: IHelperDeriveFileNamesOutputElement): boolean =>
			typeof fileNamesCodeObj != 'undefined',
	);
};
