function game(grid, cols, rows) {
	// create brand new deep-copy grid
	let next = grid.map(inner => inner.slice());

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let state = grid[i][j];
			// live neighbors counting
			let neighbors = countNeighbors(grid, i, j, cols, rows);

			if (state === 0 && neighbors === 3) {
				next[i][j] = 1;
			} else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
				next[i][j] = 0;
			} else {
				next[i][j] = state;
			}
		}
	}
	return next;
}

function countNeighbors(grid, x, y, cols, rows) {
	let sum = 0;
	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			let col = (x + i + cols) % cols;
			let row = (y + j + rows) % rows;
			sum += grid[col][row];
		}
	}
	sum -= grid[x][y];
	return sum;
	// sum += grid[i-1][j-1]
	// sum += grid[i][j-1]
	// sum += grid[i+1][j-1]
	// sum += grid[i-1][j]
	// sum += grid[i+1][j]
	// sum += grid[i-1][j+1]
	// sum += grid[i][j+1]
	// sum += grid[i+1][j+1]
}

export default game