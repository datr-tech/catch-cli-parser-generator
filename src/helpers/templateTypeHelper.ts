import { OutDirTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import {
	IHelperTemplateType,
	IHelperTemplateTypeFuncGetOutDirTypeInput,
} from '@app/interfaces/helpers';

export const templateTypeHelper: IHelperTemplateType = {
	/**
	 * @public
	 *
	 * Get OutDirTypeEnum by 'TemplateTypeEnum'
	 *
	 * @param {IHelperTemplateTypeFuncGetOutDirTypeInput} args
	 * @param {TemplateTypeEnum} args.templateTypeEnum
	 * @returns {OutDirTypeEnum}
	 * @throws When 'templateTypeEnum' is unknown
	 */
	getOutDirType: ({
		templateTypeEnum,
	}: IHelperTemplateTypeFuncGetOutDirTypeInput): OutDirTypeEnum => {
		switch (templateTypeEnum) {
			case TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER:
				return OutDirTypeEnum.OUT_DIR_PARSERS;
			case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE:
				return OutDirTypeEnum.OUT_DIR_INTERFACES;
			case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT:
				return OutDirTypeEnum.OUT_DIR_INTERFACES;
			case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER:
				return OutDirTypeEnum.OUT_DIR_INTERFACES;
			default:
				throw new TypeError(`Unknown 'templateTypeEnum'`);
		}
	},
};
