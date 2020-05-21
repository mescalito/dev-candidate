import game from './game';

describe('Still life', function () {
	test('Block', () => {
		const grid = [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]];
		let cols = 4;
		let rows = 4;
		expect(game(grid, cols, rows)).toStrictEqual(grid);
	});
	test('Loaf', () => {
		const grid = [[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,0,1,0,1,0],[0,0,0,1,0,0],[0,0,0,0,0,0]];
		let cols = 6;
		let rows = 6;
		expect(game(grid, cols, rows)).toStrictEqual(grid);
	});
	test('Bee-hive', () => {
		const grid = [[0,0,0,0,0],[0,0,1,0,0],[0,1,0,1,0],[0,1,0,1,0],[0,0,1,0,0],[0,0,0,0,0]];
		let cols = 6;
		let rows = 5;
		expect(game(grid, cols, rows)).toStrictEqual(grid);
	});
	test('Loaf', () => {
		const grid = [[0,0,0,0,0,0],[0,0,1,0,0,0],[0,1,0,1,0,0],[0,1,0,0,1,0],[0,0,1,1,0,0],[0,0,0,0,0,0]];
		let cols = 6;
		let rows = 6;
		expect(game(grid, cols, rows)).toStrictEqual(grid);
	});
});

describe('Oscillators', function () {
	test('Blinker', () => {
		const grid =  [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]];
		const grid2 = [[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]];
		let cols = 5;
		let rows = 5;
		expect(game(grid, cols, rows)).toStrictEqual(grid2);
	});
	test('Toad', () => {
		const grid =  [[0,0,0,0,0,0],[0,0,0,1,0,0],[0,0,1,1,0,0],[0,0,1,1,0,0],[0,0,1,0,0,0],[0,0,0,0,0,0]];
		const grid2 = [[0,0,0,0,0,0],[0,0,1,1,0,0],[0,0,0,0,1,0],[0,1,0,0,0,0],[0,0,1,1,0,0],[0,0,0,0,0,0]];
		let cols = 6;
		let rows = 6;
		expect(game(grid, cols, rows)).toStrictEqual(grid2);
	});
	test('Beacon', () => {
		const grid =  [[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,1,0,0,0],[0,0,0,1,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]];
		const grid2 = [[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]];
		let cols = 6;
		let rows = 6;
		expect(game(grid, cols, rows)).toStrictEqual(grid2);
	});
});