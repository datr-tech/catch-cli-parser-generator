import fs from 'node:fs';
import { assertTemplatePath } from '@app/core/assertions';
import { IHelperGetTemplate } from '@app/interfaces/core/helpers';

export const getTemplateHelper: IHelperGetTemplate = ({ templatePath }) => {
	assertTemplatePath({ templatePath });

	return fs.readFileSync(templatePath, 'utf-8');
};
