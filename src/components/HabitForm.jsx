// src/components/HabitForm.jsx
import React, { useState } from "react";

function HabitForm({ onAddHabit }) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && goal > 0) {
      const newHabit = {
        id: Date.now(),
        name,
        goal,
        progress: 0,
        dateAdded: getCurrentDate(),
      };
      onAddHabit(newHabit);
      setName("");
      setGoal("");
    }
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Habit Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        min="1"
        placeholder="Target Goal"
        value={goal}
        onChange={(e) => setGoal(parseInt(e.target.value))}
        required
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

function getCurrentDate() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0"); // Day of month (1-31)
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
  const year = now.getFullYear();

  return `${day}/${month}/${year}`;
}

export default HabitForm;
