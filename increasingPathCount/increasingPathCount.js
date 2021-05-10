let input = [
    [5,6,10,1,5,10],
    [54,25,29,5,4,32],
    [23,2,1,13,26,8],
    [10,0,2,12,14,20]
  ];
  let count = 0;
  function increasingPath(grid) {
    for (let row in grid) {
      for (let column in grid[row]) {
        countHelper(parseInt(row), parseInt(column), grid);
      }
    }
    return count;
  }
  function countHelper(row, column, grid) {
    if (grid[row][column+1] !== undefined && grid[row][column] < grid[row][column+1]) {
      count++;
      countHelper(row, column + 1, grid);
    }
    if (grid[row-1] !== undefined && grid[row][column] < grid[row-1][column]) {
      count++;
      countHelper(row - 1, column, grid);
    }
    if (grid[row+1] !== undefined && grid[row][column] < grid[row+1][column]) {
      count++;
      countHelper(row + 1, column, grid);
    }
    if (grid[row][column-1] !== undefined && grid[row][column] < grid[row][column-1]) {
      count++;
      countHelper(row, column - 1, grid);
    }
  }
  increasingPath(input);
  