import {
	CONSTS_PATHS_GENERATED_INTERFACE_CODE_DIR,
	CONSTS_PATHS_GENERATED_PARSER_CODE_DIR,
} from '@app/config/consts/paths';
import { CodeTypeEnum } from '@app/config/enums';
import { assertStringName } from '@app/core/assertions';
import { IFileServiceGetCodePath } from '@app/interfaces/core/services/fileService';

export const getCodePath: IFileServiceGetCodePath = ({
	name,
	outDir,
	codeType = CodeTypeEnum.PARSER,
}) => {
	assertStringName({ name });
	const defaultDir =
		codeType === CodeTypeEnum.PARSER
			? CONSTS_PATHS_GENERATED_PARSER_CODE_DIR
			: CONSTS_PATHS_GENERATED_INTERFACE_CODE_DIR;

	const codeDir = outDir ? outDir : defaultDir;

	return `${codeDir}/${name}.ts`;
};
