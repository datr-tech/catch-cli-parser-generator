import { assertStringCode } from '@app/core/assertions';
import {
	doesFileExist,
	getParserCodeFilePath,
	writeCodeToFile,
} from '@app/core/services/fileService';
import { IWriterParser, IWriterParserState } from '@app/interfaces/core/writers';

export const parserWriter: IWriterParser = (() => {
	const state: IWriterParserState = {
		isValid: false,
		parserCode: undefined,
		parserName: undefined,
		parserPath: undefined
	};

	const validate = ({ parserCode, parserName }) => {
		_initState({ state });
		assertStringCode({ code: parserCode });

		const parserPath = getParserCodeFilePath({ parserName });
		const { doesExist } = doesFileExist({ filePath: parserPath });
		const isValid = !doesExist;

		if (isValid) {
			_setState({ isValid, parserCode, parserName, parserPath });
		}

		return isValid;
	};

	const write = () => {
		if (!state.isValid) {
			return false;
		}

		writeCodeToFile({
			code: state.parserCode,
			codeFilePath: state.parserPath,
		});

		_initState({ state });
		return true;
	};

	const _getState = () => state;

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

	return { validate, write, _getState };
})();
