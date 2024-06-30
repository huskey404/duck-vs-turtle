let turtlesScore = 0;
let ducksScore = 0;

// Function to update scores and determine winning team
function updateScores() {
    document.getElementById('ducks-score').textContent = ducksScore;
    document.getElementById('turtles-score').textContent = turtlesScore;

    let winningTeam = ducksScore > turtlesScore ? 'Ducks' : 'Turtles';
    document.getElementById('winning-team-message').textContent = `${winningTeam} is currently winning!`;

    // Update the font weight and alignment dynamically
    document.getElementById('ducks-score').style.fontWeight = 'bold';
    document.getElementById('ducks-score').style.textAlign = 'center';
    document.getElementById('turtles-score').style.fontWeight = 'bold';
    document.getElementById('turtles-score').style.textAlign = 'center';
}

// Function to fetch member count from Discord API
async function fetchMemberCount(inviteUrl) {
    try {
        const response = await fetch(inviteUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.approximate_member_count || 0; // Return 0 if member count is not available
    } catch (error) {
        console.error('Error fetching member count:', error);
        return 0; // Return 0 if there's an error
    }
}

// Function to update scores using Discord API data
async function updateScoresFromAPI() {
    try {
        const turtlesCount = await fetchMemberCount('https://discord.com/api/v9/invites/fH9kY9kZcf?with_counts=true');
        const ducksCount = await fetchMemberCount('https://discord.com/api/v9/invites/xZnjmaGfrQ?with_counts=true');

        // Update scores based on member counts
        turtlesScore = turtlesCount;
        ducksScore = ducksCount;

        // Update the displayed scores
        updateScores();
    } catch (error) {
        console.error('Error updating scores from API:', error);
    }
}

// Update scores initially and start periodic update
updateScoresFromAPI();
setInterval(updateScoresFromAPI, 30000); // Update scores every 30 seconds
