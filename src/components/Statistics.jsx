import React from 'react';
import './Statistics.css';

function Statistics({ habits }) {
  const totalHabits = habits.length;
  const totalCompletions = habits.reduce(
    (sum, habit) => sum + habit.completedDates.length,
    0
  );
  const avgCompletion =
    totalHabits > 0 ? (totalCompletions / (totalHabits * 30)).toFixed(0) : 0;

  return (
    <div className="statistics">
      <h2>📊 Statistics</h2>
      <div className="stat-card">
        <div className="stat-icon">📌</div>
        <div className="stat-content">
          <p className="stat-label">Total Habits</p>
          <p className="stat-number">{totalHabits}</p>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">✓</div>
        <div className="stat-content">
          <p className="stat-label">Total Completions</p>
          <p className="stat-number">{totalCompletions}</p>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">📈</div>
        <div className="stat-content">
          <p className="stat-label">Avg. Completion</p>
          <p className="stat-number">{avgCompletion}%</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
