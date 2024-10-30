import { TemplateTypeEnum } from '@app/config/enums';
import { deriveFileNameCodeHelper } from '@app/helpers';
import { IHelperDeriveFileName, IHelperDeriveFileNameInput } from '@app/interfaces/helpers';

export const getFileNameHelperMock: IHelperDeriveFileName = ({
	defModel,
	templateTypeEnum,
}: IHelperDeriveFileNameInput) => {
	if (templateTypeEnum === TemplateTypeEnum.TEMPLATE_TYPE_UNK) {
		return '';
	} else {
		return deriveFileNameCodeHelper({ defModel, templateTypeEnum });
	}
};