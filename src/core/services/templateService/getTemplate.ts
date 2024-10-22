import fs from 'node:fs';
import { assertPath } from '@app/core/assertions';
import { ITemplateServiceGetTemplate } from '@app/interfaces/core/services/templateService';

export const getTemplate: ITemplateServiceGetTemplate = ({ path }) => {
	assertPath({ path });

	return fs.readFileSync(path, 'utf-8');
};
