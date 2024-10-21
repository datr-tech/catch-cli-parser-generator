import { InvalidArgumentError } from 'commander';
import { parsersGenerator } from '@app/core/codeGenerators';
import { parserWriter } from '@app/core/writers';
import { logger } from '@app/utils';
import { IHandlerGenerate } from '@app/interfaces/cli/handlers';

export const generateHandler: IHandlerGenerate = ({
	json,
	options,
	generateCode = parsersGenerator,
	writer = parserWriter,
}) => {
	const { preFlight } = options;
	const { parserDefs } = json;

	if (preFlight) {
		logger.info({ json, preFlight });
	} else {
		const codeWrappers = generateCode({ parserDefs });

		const notWritten = codeWrappers.filter((codeWrapper) => {
			const isValid = writer.validate({
				parserCode: codeWrapper.parserCode,
				parserName: codeWrapper.parserDef.parser,
			});

			return !isValid || writer.write() === false;
		});

		if (notWritten.length > 0) {
			throw new InvalidArgumentError('At least one parser wrapper could not be written');
		}
	}
};
