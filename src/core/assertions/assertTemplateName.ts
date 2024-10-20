import { IAssertTemplateName } from '@app/interfaces/core/assertions';

export const assertTemplateName: IAssertTemplateName = ({ templateName }) => {
	if (!templateName) {
		throw new TypeError("Invalid 'templateNames'");
	}
};
