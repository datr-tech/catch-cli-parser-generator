import { FileExtensionEnum, TemplateNamePrefixEnum } from '@app/config/enums';
import { IHelperGetTemplateInterfaceConsumer } from '@app/interfaces/core/helpers';
import { getTemplateHelperInterface } from './getTemplateHelperInterface';

export const getTemplateHelperInterfaceParser: IHelperGetTemplateInterfaceConsumer = ({
	parserDef,
}) => {
	const templateName = `${TemplateNamePrefixEnum.INTERFACE_PARSER}.${FileExtensionEnum.HBS}`;

	return getTemplateHelperInterface({ parserDef, templateName });
};
