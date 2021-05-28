function getIntrest() {
    var gender;
    var e = document.getElementById("gender");
    gender = e.options[e.selectedIndex].text;

    // Base interest is 6.9
    // 0.05 will be added to base if gender is male
    var baseIntrest = 6.9;

    if(gender == "Male") {
        intrest = baseIntrest + 0.05;
    }
    else if(gender == "Female") {
        intrest = baseIntrest;
    }
    else {
        document.write("Invalid input");
    }
    return intrest/1200;
}

function getMaxLoanPayout(maxLoan) {
    var eT = document.getElementById("jobType");
    employementType = eT.options[eT.selectedIndex].text;

    if(employementType == "Government") {
        maxLoanPayout = maxLoan * 0.9;
    }
    else if(employementType == "Private") {
        maxLoanPayout = maxLoan * 0.85;
    }
    else {
        document.write("Invalid input");
    }
    return maxLoanPayout;
}

function getMaxLoan() {
    var maxLoan;
    var monthlySalary = document.getElementById("netSalary").value;
    var loanType;
    var e = document.getElementById("loanType");
    loanType = e.options[e.selectedIndex].text;

    var t = document.getElementById("loanAmount");

    if(t.value != "") {
        maxLoan = t.value;
    }
    else {
        if(loanType == "Home") {
            maxLoan = 72 * monthlySalary;
        }
        else if(loanType == "Vehicle") {
            maxLoan = 24 * monthlySalary;
        }
        else {
            document.write("Invalid input")
        }
    }
    return getMaxLoanPayout(maxLoan);
}

function getTenure() {
    var tenure;
    var loanType;
    var e = document.getElementById("loanType");
    var t = document.getElementById("tenure");
    loanType = e.options[e.selectedIndex].text;

    if(t.value != ""){
        tenure = t.value;
    }
    else {
        if(loanType == "Home") {
            tenure = 360;
        }
        else if(loanType == "Vehicle") {
            tenure = 84;
        }
        else {
            document.write("Invalid input")
        }
    }
    return tenure;
}

function getProposedEMI() {
    // (LA * R * ( 1 + R )^N)/(( 1 + R)^N - 1)
    var LA = getMaxLoan();
    var R = getIntrest();
    var N = getTenure();

    var N2 = Math.pow((1+R),N);
    return ((LA * R * N2)/(N2 - 1)).toFixed(2);
}

function complexMath() {
    var LA = 47520000;
    var R = 6.95/1200;
    var N = 120;
    var N2 = Math.pow((1+R),N);
    return ((LA * R * N2)/(N2 - 1)).toFixed(2);
}

function eligibility() {
    //document.getElementById('eligibility').value = "Proposed EMI: " + getProposedEMI();
    var proposedEMI = getProposedEMI();
    var monthlySalary = document.getElementById("netSalary").value;
    var previousEMI = document.getElementById("preEmi").value;
    var tenure = getTenure();

    if((monthlySalary - previousEMI - proposedEMI) <= 25000) {
        document.getElementById('eligibility').value = "As net income including other loans and current loan is lessthan 25000, loan can't be granted."
    }
    else {
        document.getElementById('eligibility').value = "Loan can be granted with EMI " + getProposedEMI() + " for a tenure of " + tenure + " months."
    }
}