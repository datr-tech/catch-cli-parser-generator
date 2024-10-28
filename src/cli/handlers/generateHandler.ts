import { ICliHandlerGenerate } from '@app/interfaces/cli/handlers';
import { GenerateController } from '@app/controllers';
import { logger } from '@app/utils';

export const generateHandler: ICliHandlerGenerate = ({ json, options }) => {
	const { preFlight } = options;
	if (preFlight) {
		logger.info(JSON.stringify(json), preFlight);
		return;
	}

	const generateController = GenerateController({ json });
	generateController.init();

	if (!generateController.isValid()) {
		throw new Error('ABC');
	}

	generateController.run();
};
