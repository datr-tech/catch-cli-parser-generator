import { assertParserCode } from '@app/core/assertions';
import {
	doesFileExistHelper,
	getParserCodeFilePath,
	writeCodeToFile,
} from '@app/core/writers/codeFileHelpers';
import { IWriterParser, IWriterParserState } from '@app/interfaces/core/writers';

export const parserWriter: IWriterParser = (() => {
	let state: IWriterParserState;

	const validate = ({ parserCode, parserName }) => {
		_initState({ state });
		assertParserCode({ parserCode });

		const parserPath = getParserCodeFilePath({ parserName });
		const isValid = !doesFileExistHelper({ filePath: parserPath });

		if (isValid) {
			_setState({ isValid, parserCode, parserName, parserPath });
		}

		return isValid;
	};

	const write = () => {
		if (!state.isValid) {
			return false;
		}

		const hasParserCodeBeenWritten = writeCodeToFile({
			fileContents: state.parserCode,
			filePath: state.parserPath,
		});

		_initState({ state });

		return hasParserCodeBeenWritten;
	};

	const _initState = ({ state }) => {
		state.isValid = false;
		state.parserCode = undefined;
		state.parserName = undefined;
		state.parserPath = undefined;
	};

	const _setState = ({ isValid, parserCode, parserName, parserPath }) => {
		state.isValid = isValid;
		state.parserCode = parserCode;
		state.parserName = parserName;
		state.parserPath = parserPath;
	};

	return { validate, write };
})();
