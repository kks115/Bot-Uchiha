const users = {};

function checkFlood(sender, limit = 5, timeframe = 10000) {
  const now = Date.now();
  if (!users[sender]) users[sender] = [];
  users[sender] = users[sender].filter(t => now - t < timeframe);
  users[sender].push(now);
  return users[sender].length > limit;
}

module.exports = { checkFlood };