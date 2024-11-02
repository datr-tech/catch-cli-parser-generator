import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DefTypeEnum, OutDirTypeEnum } from '@app/config/enums';
import { deriveFileNamesCodeHelper } from '@app/helpers';
import {
	ICommonJson,
	ICommonJsonDef,
	ICommonJsonDefPayload,
	ICommonJsonDir,
	ICommonNameStr,
	ICommonPathStr,
} from '@app/interfaces/common';
import { IHelperDeriveFileNamesOutputElement } from '@app/interfaces/helpers';
import { jsonDefFake, jsonDefPayloadLeafFake, jsonDirFake } from '@test/doubles/fakes';

let expectedFilePaths: ICommonPathStr[];
let nameBase: ICommonNameStr;

describe('CLI', (): void => {
	describe('should write the expected set of four files', (): void => {
		beforeAll((): void => {
			nameBase = 'TestLeaf';
			expectedFilePaths = deriveFileNamesCodeHelper({ defNameStr: nameBase }).map(
				({ codeFileName }: IHelperDeriveFileNamesOutputElement): ICommonNameStr =>
					`${CONSTS_PATHS_APP_ROOT}/${codeFileName}`,
			);
		});
		afterAll((): void => {
			expectedFilePaths.forEach((filePath: ICommonPathStr): void => {
				global.jestRemoveFileSync(filePath);
			});
		});
		test("when receiving a single valid 'jsonDef'", (): void => {
			/*
			 * Arrange
			 */
			const payload: ICommonJsonDefPayload = jsonDefPayloadLeafFake();

			const jsonDef: ICommonJsonDef = jsonDefFake({
				name: nameBase,
				payload,
				type: DefTypeEnum.DEF_TYPE_LEAF,
			});

			const jsonDirInterfaces: ICommonJsonDir = jsonDirFake({
				type: OutDirTypeEnum.OUT_DIR_INTERFACES,
			});

			const jsonDirParsers: ICommonJsonDir = jsonDirFake({
				type: OutDirTypeEnum.OUT_DIR_PARSERS,
			});

			const json: ICommonJson = {
				defs: [jsonDef],
				dirs: [jsonDirInterfaces, jsonDirParsers],
			};

			/*
			 * Act
			 */
			const argument: string = JSON.stringify(json);
			const { code } = global.jestRunDistCLI({ argument });

			/*
			 * Assert
			 */
			expect(code).toBe(0);
		});
	});
});
