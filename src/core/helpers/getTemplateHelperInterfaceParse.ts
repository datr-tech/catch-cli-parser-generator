import { FileExtensionEnum, TemplateNamePrefixEnum } from '@app/config/enums';
import { IHelperGetTemplateInterfaceConsumer } from '@app/interfaces/core/helpers';
import { getTemplateHelperInterface } from './getTemplateHelperInterface';

export const getTemplateHelperInterfaceParse: IHelperGetTemplateInterfaceConsumer = ({
	parserDef,
}) => {
	const templateName = `${TemplateNamePrefixEnum.INTERFACE_PARSE}.${FileExtensionEnum.HBS}`;

	return getTemplateHelperInterface({ parserDef, templateName });
};
