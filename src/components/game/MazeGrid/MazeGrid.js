import "./MazeGrid.css";

const MazeGrid = ({
  maze = [],
  playerPosition = { x: 0, y: 0 },
  exitPosition = { x: 4, y: 4 },
}) => {
  const renderCell = (rowIndex, cellIndex) => {
    const isPlayer =
      playerPosition.x === rowIndex && playerPosition.y === cellIndex;
    const isExit = exitPosition.x === rowIndex && exitPosition.y === cellIndex;
    const isWall = maze[rowIndex] && maze[rowIndex][cellIndex] === 1;

    let cellClass = "maze-cell";
    if (isWall) cellClass += " maze-cell--wall";
    if (isPlayer) cellClass += " maze-cell--player";
    if (isExit) cellClass += " maze-cell--exit";

    return (
      <div key={cellIndex} className={cellClass}>
        {isPlayer && "👤"}
        {isExit && !isPlayer && "🚪"}
        {isWall && !isPlayer && !isExit && "🧱"}
      </div>
    );
  };

  return (
    <div className="maze-grid">
      {maze.length > 0 ? (
        <div className="maze-grid__container">
          {maze.map((row, rowIndex) => (
            <div key={rowIndex} className="maze-row">
              {row.map((cell, cellIndex) => renderCell(rowIndex, cellIndex))}
            </div>
          ))}
        </div>
      ) : (
        <div className="maze-grid__placeholder">
          🎮 Лабіринт завантажується...
        </div>
      )}
    </div>
  );
};

export default MazeGrid;
