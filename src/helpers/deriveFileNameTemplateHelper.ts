import { DefTypeEnum, TemplateNameEnum, TemplateTypeEnum } from '@app/config/enums';
import { IHelperDeriveFileName, IHelperDeriveFileNameInput } from '@app/interfaces/helpers';
import { ICommonNameStr, ICommonStr } from '@app/interfaces/common';
import { assertCondition } from '@app/assertions';

/**
 * @public
 *
 * Derive the name for a template file based upon
 * the 'defModel' and the template type.
 *
 * @param {IHelperDeriveFileNameInput} args
 * @param {IModelDef} args.defModel
 * @param {TemplateTypeEnum} args.templateTypeEnum
 * @returns {ICommonNameStr}
 */
export const deriveFileNameTemplateHelper: IHelperDeriveFileName = ({
	defModel,
	templateTypeEnum,
}: IHelperDeriveFileNameInput): ICommonNameStr => {
	let templateNameStr: ICommonStr = '';

	assertCondition({
		condition: defModel.isValid(),
		errorMessage: "Invalid 'defModel'",
	});

	const defTypeEnum: DefTypeEnum = defModel.getType();

	switch (templateTypeEnum) {
		case TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER:
			switch (defTypeEnum) {
				case DefTypeEnum.DEF_TYPE_ITER:
					templateNameStr = TemplateNameEnum.TEMPLATE_NAME_CODE_PARSER_ITER;
					break;
				case DefTypeEnum.DEF_TYPE_LEAF:
					templateNameStr = TemplateNameEnum.TEMPLATE_NAME_CODE_PARSER_LEAF;
					break;
				case DefTypeEnum.DEF_TYPE_STEM:
					templateNameStr = TemplateNameEnum.TEMPLATE_NAME_CODE_PARSER_STEM;
					break;
			}
			break;
		case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE:
			templateNameStr = TemplateNameEnum.TEMPLATE_NAME_INTERFACE_PARSE;
			break;
		case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT:
			switch (defTypeEnum) {
				case DefTypeEnum.DEF_TYPE_ITER:
					templateNameStr = TemplateNameEnum.TEMPLATE_NAME_INTERFACE_PARSE_OUTPUT_ITER;
					break;
				case DefTypeEnum.DEF_TYPE_LEAF:
					templateNameStr = TemplateNameEnum.TEMPLATE_NAME_INTERFACE_PARSE_OUTPUT_LEAF;
					break;
				case DefTypeEnum.DEF_TYPE_STEM:
					templateNameStr = TemplateNameEnum.TEMPLATE_NAME_INTERFACE_PARSE_OUTPUT_STEM;
					break;
			}
			break;
		case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER:
			templateNameStr = TemplateNameEnum.TEMPLATE_NAME_INTERFACE_PARSER;
			break;
	}

	return templateNameStr;
};
