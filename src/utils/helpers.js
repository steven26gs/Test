export function calculateStreak(completedDates) {
  if (completedDates.length === 0) return 0;

  const sortedDates = [...completedDates].sort().reverse();
  let streak = 0;
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  for (const dateString of sortedDates) {
    const completedDate = new Date(dateString);
    completedDate.setHours(0, 0, 0, 0);

    const diffTime = currentDate - completedDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === streak) {
      streak++;
      currentDate = new Date(completedDate);
    } else {
      break;
    }
  }

  return streak;
}

export function isCompletedToday(completedDates) {
  const today = new Date().toISOString().split('T')[0];
  return completedDates.includes(today);
}
