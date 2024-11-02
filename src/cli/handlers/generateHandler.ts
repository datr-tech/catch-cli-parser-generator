import { GenerateController } from '@app/controllers';
import { logger } from '@app/utils';
import { ICliHandlerGenerate, ICliHandlerGenerateInput } from '@app/interfaces/cli/handlers';
import { IControllerGenerate } from '@app/interfaces/controllers/GenerateController';

/**
 * @public
 *
 * The handler for the generate CLI method,
 * which call the corresponding controller,
 * GenerateController.
 *
 * @param {ICliHandlerGenerateInput} args
 * @param {ICommonJson} args.json
 * @param {ICliOptionsGenerate} args.options
 *
 * @throws When generate controller is invalid
 */
export const generateHandler: ICliHandlerGenerate = ({
	json,
	options,
}: ICliHandlerGenerateInput): void => {
	const { preFlight } = options;

	if (preFlight) {
		logger.info(JSON.stringify(json), preFlight);
		return;
	}

	const generateController: IControllerGenerate = GenerateController({ json });
	generateController.init();

	if (!generateController.isValid()) {
		throw new Error("Invalid 'generateController'");
	} else {
		generateController.run();
	}
};
