const reachDestination = (distance, speed) => {
  const duration = distance / speed;
  const roundedDuration = Math.round(duration * 2) / 2;
  return "I should be there in " + roundedDuration + " hours."
};

module.exports = reachDestination;
