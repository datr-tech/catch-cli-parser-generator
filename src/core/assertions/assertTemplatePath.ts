import fs from 'node:fs';
import { IAssertTemplatePath } from '@app/interfaces/core/assertions';

export const assertTemplatePath: IAssertTemplatePath = ({ templatePath }) => {
	if (!templatePath) {
		throw new TypeError("Invalid 'templatePath'");
	}

	if (!fs.existsSync(templatePath)) {
		throw new TypeError("'templatePath' does not identify a valid file object");
	}

	const fsStats = fs.statSync(templatePath);

	if (!fsStats.isFile()) {
		throw new TypeError("'templatePath' does not identify a valid file");
	}
};
