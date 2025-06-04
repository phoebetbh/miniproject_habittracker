// src/components/HabitList.jsx
import React from "react";
import HabitListItem from "./HabitListItem";

function HabitList({ habits, onUpdateProgress }) {
  return (
    <div className="habit-list">
      {habits.length === 0 ? (
        <p>No habits added yet. Please add one and work on it!</p>
      ) : (
        habits.map((habit) => (
          <HabitListItem
            key={habit.id}
            habit={habit}
            onUpdateProgress={onUpdateProgress}
          />
        ))
      )}
    </div>
  );
}

export default HabitList;
