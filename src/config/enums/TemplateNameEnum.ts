import { FileExtensionEnum } from '@app/config/enums/FileExtensionEnum';

export enum TemplateNameEnum {
	TEMPLATE_NAME_CODE_PARSER_ITER = `parsers/parser.iter.${FileExtensionEnum.HANDLEBARS}`,
	TEMPLATE_NAME_CODE_PARSER_LEAF = `parsers/parser.leaf.${FileExtensionEnum.HANDLEBARS}`,
	TEMPLATE_NAME_CODE_PARSER_STEM = `parsers/parser.stem.${FileExtensionEnum.HANDLEBARS}`,
	TEMPLATE_NAME_INTERFACE_PARSE = `interfaces/interface.parse.${FileExtensionEnum.HANDLEBARS}`,
	TEMPLATE_NAME_INTERFACE_PARSE_OUTPUT_ITER = `interfaces/interface.parse.output.iter.${FileExtensionEnum.HANDLEBARS}`,
	TEMPLATE_NAME_INTERFACE_PARSE_OUTPUT_LEAF = `interfaces/interface.parse.output.leaf.${FileExtensionEnum.HANDLEBARS}`,
	TEMPLATE_NAME_INTERFACE_PARSE_OUTPUT_STEM = `interfaces/interface.parse.output.stem.${FileExtensionEnum.HANDLEBARS}`,
	TEMPLATE_NAME_INTERFACE_PARSER = `interfaces/interface.parser.${FileExtensionEnum.HANDLEBARS}`,
}
