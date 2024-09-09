document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const actionButton = document.getElementById('actionButton');
    const isReset = actionButton.textContent === 'Reset';

    if (isReset) {
        // Reset the form and hide the result
        document.getElementById('name1').value = '';
        document.getElementById('name2').value = '';
        document.getElementById('result').classList.add('hidden');

        // Change button text back to "Calculate"
        actionButton.textContent = 'Calculate';
    } else {
        // Get the names from input fields
        const name1 = document.getElementById('name1').value.trim().toLowerCase();
        const name2 = document.getElementById('name2').value.trim().toLowerCase();

        // Calculate love percentage
        const lovePercentage = calculateLovePercentage(name1, name2);

        // Show the result
        document.getElementById('lovePercentage').textContent = `Love Compatibility: ${lovePercentage}%`;
        document.getElementById('message').textContent = generateMessage(lovePercentage);
        document.getElementById('result').classList.remove('hidden');

        // Change button text to "Reset"
        actionButton.textContent = 'Reset';
    }
});

function calculateLovePercentage(name1, name2) {
    const commonCharacters = getCommonCharacterCount(name1, name2);
    const totalCharacters = Math.max(name1.length, name2.length);
    const lovePercentage = Math.min((commonCharacters / totalCharacters) * 100, 100); // Ensure percentage is between 0 and 100
    return Math.round(lovePercentage);
}

function getCommonCharacterCount(name1, name2) {
    let count = 0;
    const name1Chars = new Set(name1);
    for (const char of name2) {
        if (name1Chars.has(char)) {
            count++;
            name1Chars.delete(char); // Avoid counting the same character more than once
        }
    }
    return count;
}

function generateMessage(percentage) {
    if (percentage > 80) {
        return "You two have a lot in common and are a great match!";
    } else if (percentage > 50) {
        return "You share some common traits and have a strong connection!";
    } else if (percentage > 20) {
        return "You have a few shared interests, but there's room to get to know each other better!";
    } else {
        return "You may have different interests, but there's always room for growth!";
    }
}
