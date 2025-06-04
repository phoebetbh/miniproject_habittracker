// src/App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import HabitForm from "./components/HabitForm.jsx";
import HabitList from "./components/HabitList.jsx";
import ProgressActions from "./components/ProgressActions.jsx";

function App() {
  const [habits, setHabits] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("habits");
    if (stored) {
      setHabits(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  function TimeArea() {
    const [theTime, setTheTime] = useState(new Date().toLocaleString());

    useEffect(() => {
      const interval = setInterval(
        () => setTheTime(new Date().toLocaleString()),
        1000
      );
      return () => clearInterval(interval);
    }, []);
    return <p>The current time is {theTime}.</p>;
  }

  // Add new habit
  const handleAddHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  // Update habit progress
  const updateHabitProgress = (id, change) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              progress: Math.max(
                0,
                Math.min(habit.goal, habit.progress + change)
              ),
            }
          : habit
      )
    );
  };

  // Calculate total progress
  const totalHabits = habits.length;
  const completedHabits = habits.filter((h) => h.progress >= h.goal).length;

  return (
    <div className="container">
      <Header />
      <TimeArea />
      <HabitForm onAddHabit={handleAddHabit} />
      <HabitList habits={habits} onUpdateProgress={updateHabitProgress} />
      <ProgressActions total={totalHabits} completed={completedHabits} />
    </div>
  );
}

export default App;
