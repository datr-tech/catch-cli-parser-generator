import { InvalidArgumentError } from 'commander';
import { generateCode } from '@app/core/generators';
import { writer } from '@app/core/writers';
import { ICliHandlerGenerate } from '@app/interfaces/cli/handlers';

export const generateHandler: ICliHandlerGenerate = ({
	json,
	options,
	generator = generateCode,
	write = writer,
}) => {
	const { preFlight } = options;
	if (preFlight) {
		return;
	}

	const { parserDefs } = json;
	const codeWrappers = generator({ parserDefs });
	let parserOutDir = undefined;

	if (typeof json.out !== 'undefined') {
		if (typeof json.out.parserOutDir !== 'undefined') {
			const { out } = json;
			parserOutDir = out.parserOutDir;
		}
	}

	const unwritten = codeWrappers.filter((codeWrapper) => {
		const isValid = write.validate({
			code: codeWrapper.parserCode,
			name: codeWrapper.parserDef.parser,
			outDir: parserOutDir,
		});

		return !isValid || write.write() === false;
	});

	if (unwritten.length > 0) {
		throw new InvalidArgumentError('At least one parser wrapper could not be written');
	}
};
