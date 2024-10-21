import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { assertStringParserName } from '@app/core/assertions';

export const getParserCodeFilePath = ({ parserName }) => {
	assertStringParserName({ parserName });

	return `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${parserName}.ts`;
};
