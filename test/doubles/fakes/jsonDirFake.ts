import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { OutDirTypeEnum } from '@app/config/enums';
import { ICommonBool, ICommonJsonDir, ICommonPathStr } from '@app/interfaces/common';
import { IFakeJsonDir, IFakeJsonDirInput } from '@test/interfaces/doubles/fakes';

/**
 * @public
 *
 * Derive a fake jsonDir object.
 *
 * @param {IFakeJsonDirInput)} args
 * @param {ICommonPathStr} args.path
 * @param {OutDirTypeEnum} args.type
 * @param {ICommonBool} args.useDefaultPath
 * @param {ICommonBool} args.useDefaultType
 * @returns {ICommonJsonDir}
 */
export const jsonDirFake: IFakeJsonDir = ({
	path,
	type,
	useDefaultPath = true,
	useDefaultType = true,
}: IFakeJsonDirInput = {}): ICommonJsonDir => {
	let pathResolved: ICommonPathStr | undefined = path;
	let typeResolved: OutDirTypeEnum | undefined = type;

	if ((useDefaultPath as ICommonBool) && !path) {
		pathResolved = CONSTS_PATHS_APP_ROOT;
	}

	if ((useDefaultType as ICommonBool) && !type) {
		typeResolved = OutDirTypeEnum.OUT_DIR_PARSERS;
	}

	return {
		path: pathResolved,
		type: typeResolved,
	};
};
