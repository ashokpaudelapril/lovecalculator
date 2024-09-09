document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the names from input fields
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    // Calculate love percentage
    const lovePercentage = calculateLovePercentage(name1, name2);

    // Show the result
    document.getElementById('lovePercentage').textContent = `Love Compatibility: ${lovePercentage}%`;
    document.getElementById('message').textContent = generateMessage(lovePercentage);
    document.getElementById('result').classList.remove('hidden');
});

function calculateLovePercentage(name1, name2) {
    // Simple calculation based on the length of names
    const combinedLength = name1.length + name2.length;
    const lovePercentage = combinedLength % 101; // ensure percentage is between 0 and 100
    return lovePercentage;
}

function generateMessage(percentage) {
    if (percentage > 80) {
        return "You two are a perfect match!";
    } else if (percentage > 50) {
        return "You have a strong connection!";
    } else if (percentage > 20) {
        return "There's potential, but work on it!";
    } else {
        return "It might not be the best match, but who knows?";
    }
}
