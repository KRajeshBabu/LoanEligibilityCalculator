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
    return intrest;
}

function getMaxLoanPayout(employementType) {
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

    if(loanType == "Home") {
        maxLoan = 360 * monthlySalary;
    }
    else if(loanType == "Vehicle") {
        maxLoan = 12 * monthlySalary;
    }
    else {
        document.write("Invalid input")
    }
    return maxLoan;
}

function getTenure() {
    var tenure;
    var loanType;
    var e = document.getElementById("loanType");
    loanType = e.options[e.selectedIndex].text;

    if(loanType == "Home") {
        tenure = 360;
    }
    else if(loanType == "Vehicle") {
        tenure = 84;
    }
    else {
        document.write("Invalid input")
    }
    return tenure;
}

function getProposedEMI() {
    // (LA * R * ( 1 + R )^N)/(( 1 + R)^N - 1)
    //var l = document.getElementById("loanType");
    //var loanType = l.options[l.selectedIndex].value;
    var LA = getMaxLoan();
    //var LA = 360 * 132000;

    //var g = document.getElementById("gender");
    //var g2 = document.getElementById("gender");
    //var gender = g2.options[g2.selectedIndex].text;
    var R = getIntrest();
    //var R = 6.95;

    var N = getTenure();
    //var N = 84;
    var N2 = Math.pow((1+R),N);
    return ((LA * R * N2)/(N2 - 1))/12;
}

function complexMath() {
    var LA = 47520000;
    var R = 6.95;
    var N = 360;
    var N2 = Math.pow((1+R),N);
    return ((LA * R * N2)/(N2 - 1))/12;
}

function complexMath2() {
    var LA = 100000;
    var R = 10;
    var N = 12;
    var N2 = Math.pow((1+R),N);
    return ((LA * R * N2)/(N2 - 1))/12;
}

function eligibility() {
    document.getElementById('eligibility').value = getProposedEMI();
}

function test() {

    var e = document.getElementById("gender");
    var strUser = e.options[e.selectedIndex].text;

    return strUser;
}