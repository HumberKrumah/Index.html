document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve input values
    const studentName = document.getElementById('studentName').value;
    let numericalScore = parseFloat(document.getElementById('numericalScore').value);
    
    // Input validation
    while (isNaN(numericalScore) || numericalScore < 0 || numericalScore > 100) {
        alert('Please enter a valid numerical score between 0 and 100.');
        numericalScore = parseFloat(prompt('Enter the numerical score (0-100):'));
    }
    
    // Grade calculation function
    function calculateGrade(score) {
        if (score >= 90) {
            return 'A';
        } else if (score >= 80) {
            return 'B';
        } else if (score >= 70) {
            return 'C';
        } else if (score >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }
    
    // Calculate grade
    const grade = calculateGrade(numericalScore);
    
    // Display output
    document.getElementById('gradeOutput').innerHTML = `<p>Congratulations, ${studentName}! You got a(n) ${grade}.</p>`;
});
