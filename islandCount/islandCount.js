let input = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','1','1'],
  ]
  function numIslands(grid) {
    let islandCounter = 0;
    for (let rowIndex in grid) {
      for (let columnIndex in grid[rowIndex]) {
        if(grid[rowIndex][columnIndex] === '1') {
          islandCounter++;
          countHelper(parseInt(rowIndex), parseInt(columnIndex), grid);
        }
      }
    }
    return islandCounter;
  }
  function countHelper(rowIndex, columnIndex, grid) {
    if(grid[rowIndex] === undefined || grid[rowIndex][columnIndex] === undefined || grid[rowIndex][columnIndex] === '0') return;
    grid[rowIndex][columnIndex] = '0';
    teraform(rowIndex+1, columnIndex, grid);
    teraform(rowIndex-1, columnIndex, grid);
    teraform(rowIndex, columnIndex+1, grid);
    teraform(rowIndex, columnIndex-1, grid);
  
  }
  numIslands(input);