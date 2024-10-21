import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { assertStringParserName } from '@app/core/assertions';
import { IFileServiceGetParserCodeFilePath } from '@app/interfaces/core/services/fileService';

export const getParserCodeFilePath: IFileServiceGetParserCodeFilePath = ({
	parserName,
	parserOutDir,
}) => {
	assertStringParserName({ parserName });
	const codeFileDir = parserOutDir ? parserOutDir : CONSTS_PATHS_GENERATED_PARSER_CODE_DIR;

	return `${codeFileDir}/${parserName}.ts`;
};
