import { GenerateController } from '@app/controllers';
import { ICommonJson } from '@app/interfaces/common';
import { IControllerGenerate } from '@app/interfaces/controllers/GenerateController';
import { jsonDefFake, jsonDirFake } from '@test/doubles/fakes';

describe('GenerateController', (): void => {
	describe('constructor', (): void => {
		describe('should instantiate', (): void => {
			test("when receiving a valid 'json' param", (): void => {
				/*
				 * Arrange
				 */
				const json: ICommonJson = {
					defs: [jsonDefFake({ name: 'JSON_DEFS' })],
					dirs: [jsonDirFake()],
				};

				/*
				 * Act
				 */
				const generateController: IControllerGenerate = GenerateController({ json });

				/*
				 * Assert
				 */
				expect(generateController).toBeTruthy();
			});
		});
	});
});
