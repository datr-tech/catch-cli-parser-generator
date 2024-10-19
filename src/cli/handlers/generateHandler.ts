import { logger } from '@app/utils';

export const generateHandler = ({ json, options }) => {
	const { preFlight } = options;

	logger.info({ json, preFlight });
};
