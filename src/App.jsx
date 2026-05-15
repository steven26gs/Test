import React, { useState, useEffect } from 'react';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import Statistics from './components/Statistics';
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);

  // Load habits from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('habits');
    if (saved) {
      setHabits(JSON.parse(saved));
    }
  }, []);

  // Save habits to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habitName, description) => {
    const newHabit = {
      id: Date.now(),
      name: habitName,
      description: description,
      completedDates: [],
      createdDate: new Date().toISOString(),
    };
    setHabits([...habits, newHabit]);
  };

  const toggleHabit = (habitId) => {
    const today = new Date().toISOString().split('T')[0];
    setHabits(
      habits.map((habit) => {
        if (habit.id === habitId) {
          const isCompletedToday = habit.completedDates.includes(today);
          return {
            ...habit,
            completedDates: isCompletedToday
              ? habit.completedDates.filter((date) => date !== today)
              : [...habit.completedDates, today],
          };
        }
        return habit;
      })
    );
  };

  const deleteHabit = (habitId) => {
    setHabits(habits.filter((habit) => habit.id !== habitId));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🔥 Habit Tracker</h1>
        <p>Build better habits, one day at a time</p>
      </header>

      <div className="app-container">
        <div className="main-content">
          <HabitForm onAddHabit={addHabit} />
          <HabitList
            habits={habits}
            onToggleHabit={toggleHabit}
            onDeleteHabit={deleteHabit}
          />
        </div>

        <aside className="sidebar">
          <Statistics habits={habits} />
        </aside>
      </div>
    </div>
  );
}

export default App;
