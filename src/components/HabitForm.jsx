import React, { useState } from 'react';
import './HabitForm.css';

function HabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      onAddHabit(habitName, description);
      setHabitName('');
      setDescription('');
    }
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <h2>Create a New Habit</h2>
      <div className="form-group">
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          placeholder="Enter habit name (e.g., Morning Exercise)"
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description (optional)"
          className="input-field textarea"
          rows="2"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        ➕ Add Habit
      </button>
    </form>
  );
}

export default HabitForm;
