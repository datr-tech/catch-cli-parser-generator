import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { assertTemplateName } from '@app/core/assertions';
import { IHelperGetTemplatePath } from '@app/interfaces/core/helpers';

export const getTemplatePathHelperInterface: IHelperGetTemplatePath = ({ templateName }) => {
	assertTemplateName({ templateName });

	return `${CONSTS_PATHS_TEMPLATES_DIR}/interfaces/${templateName}`;
};
