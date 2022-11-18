// Exercise 1 Print Odds Continued
function printOdds(count) {
    if (count < 0) {
    for (let i = -1; i >= count; i--) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
} else {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
            }
        }
    }
}
printOdds(10);
printOdds(100);

// Exercise 2 Legal?
function checkAge(name, age){
    let oldEnoughMsg = `Congratulations ${name}! You are able to drive`;
    let tooYoungMsg = `Unfortunately ${name}, you need ${16 - age} more year(s) to drive.`;
    
    if (age < 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg);
    }
}

checkAge("Kevin", 14);
checkAge("Daniella", 16);
checkAge("Asiel", 21);

// Exercise 3 Which Quadrant?
function checkQuadrant(x, y){
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "X-axis";
    }else if (x != 0 && y == 0) {
        return "Y-axis";
    } else {
        return "Origin";
    }
}

console.log(checkQuadrant(0, 2));
console.log(checkQuadrant(1, 2));
console.log(checkQuadrant(-6, 18));


// Exercise 4 What type of triangle?
function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        } else if (a == b || b == c || a == c) {
            return `Isoceles`;
        } else {
            return `Scalene`;
        }
    } else {
        return `Not a valid triangle.`;
    }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));


// Exercise 5 Data Plan Status
function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    if (currentAvg > projectedAvg) {
        statusMsg = "exceeding";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "under";
    } else {
        statusMsg = "at";
    }
    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg} GB/day`);
    console.log(`You are ${statusMsg} your average daily use (${currentAvg} GB/day), continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)}GB from your data limit.`);
    console.log(`To stay below your data plan, use no more than ${remainingData / remainingDays} GB/day.`);
}
dataUsageFeedback(50, 15, 45);