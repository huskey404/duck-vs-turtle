let turtlesScore = 0;
let ducksScore = 0;

// Function to update scores and determine winning team
function updateScores() {
    document.getElementById('ducks-score').textContent = ducksScore;
    document.getElementById('turtles-score').textContent = turtlesScore;

    let winningTeam = ducksScore > turtlesScore ? 'Ducks' : 'Turtles';
    document.getElementById('winning-team-message').textContent = `${winningTeam} is currently winning!`;
}

// Function to fetch member count from Discord API (sample function, replace with actual API call if needed)
async function fetchMemberCount(inviteCode) {
    // Replace with actual implementation for fetching from Discord API if needed
    return Math.floor(Math.random() * 100); // Random number for demonstration
}

// Simulate updating scores (sample function, replace with actual logic)
function simulateScoring() {
    setInterval(async () => {
        // Simulate random scoring updates
        ducksScore = await fetchMemberCount('xZnjmaGfrQ');
        turtlesScore = await fetchMemberCount('fH9kY9kZcf');
        updateScores();
    }, 5000); // Update every 5 seconds
}

// Initialize the scores and start simulation
updateScores();
simulateScoring();
