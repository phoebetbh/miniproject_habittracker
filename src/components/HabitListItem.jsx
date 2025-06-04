function HabitListItem({ habit, onUpdateProgress }) {
  const { id, name, goal, progress, dateAdded } = habit;
  const isComplete = progress >= goal;

  return (
    <div className={`habit-item ${isComplete ? "completed" : ""}`}>
      <h3>{name}</h3>
      <div className="progress-controls">
        <button onClick={() => onUpdateProgress(id, -1)}>-</button>
        <span>
          {progress} / {goal}
        </span>
        <button onClick={() => onUpdateProgress(id, 1)}>+</button>
      </div>
      <div className="timestamp">
        <div className="timestamp-item">{dateAdded}</div>
      </div>
    </div>
  );
}

export default HabitListItem;
