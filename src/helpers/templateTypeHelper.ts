import { OutDirTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { IHelperTemplateType } from '@app/interfaces/helpers';

export const templateTypeHelper: IHelperTemplateType = {
	getOutDirType: ({ templateTypeEnum }) => {
		switch (templateTypeEnum) {
			case TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER:
				return OutDirTypeEnum.OUT_DIR_PARSERS;
			case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE:
				return OutDirTypeEnum.OUT_DIR_INTERFACES;
			case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT:
				return OutDirTypeEnum.OUT_DIR_INTERFACES;
			case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER:
				return OutDirTypeEnum.OUT_DIR_INTERFACES;
		}
	},
};
