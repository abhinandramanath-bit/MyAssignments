// Function to calculate grade
function calculateGrade(score) {

    // Check score range using switch
    switch (true) {

        case score >= 90:
            return "Grade A";

        case score >= 75:
            return "Grade B";

        case score >= 50:
            return "Grade C";

        default:
            return "Fail";
    }
}


// Student score
let marks = 82;

// Print result
console.log(calculateGrade(marks));