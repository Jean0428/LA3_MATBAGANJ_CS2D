let score = prompt("Enter your grade: ");
let grade = ( score >= 97 ) ?alert("Your equivalent Grade is 1.00 Excellent "):
            ( score >= 94 ) ?alert("Your equivalent Grade is 1.25 Excellent ") :
            ( score >= 91 ) ?alert("Your equivalent Grade is 1.50 Above Average ") :
            ( score >= 88 ) ?alert("Your equivalent Grade is 1.75 Above Average ") :
            ( score >= 85 ) ?alert("Your equivalent Grade is 2.00 Average ") :
            ( score >= 82 ) ?alert("Your equivalent Grade is 2.25 Average ") :
            ( score >= 79 ) ?alert("Your equivalent Grade is 2.50 Below Average "):
            ( score >= 76 ) ?alert("Your equivalent Grade is 2.75 Below Average") :
            ( score >= 75 ) ?alert("Your equivalent Grade is 3.00 Below Average ") :
            ( score >= 72 ) ?alert("Your equivalent Grade is 4.00 Poor ") :
                alert("Your equivalent Grade is 5.00 Poor ");

if (score>= 90){
    alert("Final Remarks: HIGH PASS, Candidate for Cum Laude");
} else if (score >= 80){
    alert("Final Remarks: AVERAGE PASS");
}else if (score >= 75){
    alert("Final Remarks: LOW PASS");
}else{
    alert("Final Remarks: FAILED, Needs Improvement");
}