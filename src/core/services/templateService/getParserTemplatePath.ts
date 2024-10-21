import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { assertStringTemplateName } from '@app/core/assertions';
import { ITemplateServiceGetTemplatePath } from '@app/interfaces/core/services/templateService';

export const getParserTemplatePath: ITemplateServiceGetTemplatePath = ({ templateName }) => {
	assertStringTemplateName({ templateName });

	return `${CONSTS_PATHS_TEMPLATES_DIR}/parsers/${templateName}`;
};
