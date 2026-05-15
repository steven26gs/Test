import React from 'react';
import HabitItem from './HabitItem';
import './HabitList.css';

function HabitList({ habits, onToggleHabit, onDeleteHabit }) {
  if (habits.length === 0) {
    return (
      <div className="empty-state">
        <p>🎯 No habits yet! Create one to get started.</p>
      </div>
    );
  }

  return (
    <div className="habit-list">
      <h2>Your Habits</h2>
      <div className="habits-grid">
        {habits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            onToggle={() => onToggleHabit(habit.id)}
            onDelete={() => onDeleteHabit(habit.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default HabitList;
