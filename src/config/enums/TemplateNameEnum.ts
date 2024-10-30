import { FileExtensionEnum } from '@app/config/enums/FileExtensionEnum';

export enum TemplateNameEnum {
	TEMPLATE_NAME_CODE_PARSER_ITER = `parsers/parser.iter.${FileExtensionEnum.HANDLEBARS}`,
	TEMPLATE_NAME_CODE_PARSER_LEAF = `parsers/parser.leaf.${FileExtensionEnum.HANDLEBARS}`,
	TEMPLATE_NAME_CODE_PARSER_STEM = `parsers/parser.stem.${FileExtensionEnum.HANDLEBARS}`,
	TEMPLATE_NAME_INTERFACE_PARSE = `interface.parse.${FileExtensionEnum.HANDLEBARS}`,
	TEMPLATE_NAME_INTERFACE_PARSE_OUTPUT = `interface.parse.output.${FileExtensionEnum.HANDLEBARS}`,
	TEMPLATE_NAME_INTERFACE_PARSER = `interface.parser.${FileExtensionEnum.HANDLEBARS}`,
}
