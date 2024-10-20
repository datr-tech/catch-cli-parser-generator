import fs from 'node:fs';
import { assertTemplatePath } from '@app/core/assertions';
import { ITemplateServiceGetTemplate } from '@app/interfaces/core/services/templateService';

export const getTemplate: ITemplateServiceGetTemplate = ({ templatePath }) => {
	assertTemplatePath({ templatePath });

	return fs.readFileSync(templatePath, 'utf-8');
};
