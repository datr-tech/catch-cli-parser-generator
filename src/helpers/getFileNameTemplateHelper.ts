import { DefTypeEnum, TemplateNameEnum, TemplateTypeEnum } from '@app/config/enums';
import { IHelperGetFileName } from '@app/interfaces/helpers';

export const getFileNameTemplateHelper: IHelperGetFileName = ({ defModel, templateTypeEnum }) => {
	let templateNameStr = '';
	const defTypeEnum = defModel.getType();

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
			templateNameStr = TemplateNameEnum.TEMPLATE_NAME_INTERFACE_PARSE_OUTPUT;
			break;
		case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER:
			templateNameStr = TemplateNameEnum.TEMPLATE_NAME_INTERFACE_PARSER;
			break;
	}

	return templateNameStr;
};
