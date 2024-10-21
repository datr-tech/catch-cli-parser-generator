import { InvalidArgumentError } from 'commander';
import { parsersGenerator } from '@app/core/codeGenerators';
import { parserWriter } from '@app/core/writers';
import { IHandlerGenerate } from '@app/interfaces/cli/handlers';

export const generateHandler: IHandlerGenerate = ({
	json,
	options,
	generator = parsersGenerator,
	writer = parserWriter,
}) => {
	const { preFlight } = options;
	if (preFlight) {
		return;
	}

	const { parserDefs } = json;
	const codes = generator({ parserDefs });
	let parserOutDir = undefined;

	if (typeof json.out !== 'undefined') {
		if (typeof json.out.parserOutDir !== 'undefined') {
			const { out } = json;
			parserOutDir = out.parserOutDir;
		}
	}

	const unwritten = codes.filter((code) => {
		const isValid = writer.validate({
			parserCode: code.parserCode,
			parserName: code.parserDef.parser,
			parserOutDir,
		});

		return !isValid || writer.write() === false;
	});

	if (unwritten.length > 0) {
		throw new InvalidArgumentError('At least one parser wrapper could not be written');
	}
};
