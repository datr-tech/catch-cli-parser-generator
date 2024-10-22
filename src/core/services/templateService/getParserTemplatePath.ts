import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { assertStringName } from '@app/core/assertions';
import { ITemplateServiceGetTemplatePath } from '@app/interfaces/core/services/templateService';

export const getParserTemplatePath: ITemplateServiceGetTemplatePath = ({ name }) => {
	assertStringName({ name });

	return `${CONSTS_PATHS_TEMPLATES_DIR}/parsers/${name}`;
};
