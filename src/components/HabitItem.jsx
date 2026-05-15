import React from 'react';
import { calculateStreak, isCompletedToday } from '../utils/helpers';
import './HabitItem.css';

function HabitItem({ habit, onToggle, onDelete }) {
  const currentStreak = calculateStreak(habit.completedDates);
  const completed = isCompletedToday(habit.completedDates);

  return (
    <div className="habit-item">
      <div className="habit-header">
        <div className="habit-info">
          <h3>{habit.name}</h3>
          {habit.description && <p className="description">{habit.description}</p>}
        </div>
        <button className="btn-delete" onClick={onDelete} title="Delete habit">
          ✕
        </button>
      </div>

      <div className="habit-stats">
        <div className="stat">
          <span className="stat-label">Current Streak</span>
          <span className="stat-value">🔥 {currentStreak}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Total Completed</span>
          <span className="stat-value">✓ {habit.completedDates.length}</span>
        </div>
      </div>

      <button
        className={`btn-toggle ${completed ? 'completed' : ''}`}
        onClick={onToggle}
      >
        {completed ? '✓ Completed Today' : 'Mark Complete'}
      </button>
    </div>
  );
}

export default HabitItem;
