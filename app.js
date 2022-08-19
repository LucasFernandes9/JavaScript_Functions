console.log("Hello World!\n==========\n");

// Exercise 1 Print Odds

function printOdds (count) {
    for (let i = 1; i <= count; i++){
        if (i % 2 != 0) {
            console.log (i)
        }
    }
}

printOdds (10); // should print 1-3-5-7-9 or i could use console.log (i+1) as long as i change to == 0
printOdds (100); // same but 1 to 99

// Exercise 2 Check Age

function checkAge (name, age) {
    let oldEnoughMsg = `congrats ${name}! You can drive!`;
    let tooYoungMsg = `sorry ${name}, you need to wait ${ 16 - age} year(s) until you can drive.`;

    if (age < 16) {
        console.log (tooYoungMsg)
    } else {
        console.log (oldEnoughMsg)
    }
}
checkAge ("Ben", 12);
checkAge ("Seth", 16);
checkAge ("Cameron", 21);

// Exercise 3 

function checkQuadrant (x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
        } else if (x < 0 && y > 0) {
            return "Quadrant 2"
        } else if (x < 0 && y < 0) {
            return "Quadrant 3"
        } else if (x > 0 && y < 0) {
            return "Quadrant 4"
        } else if (x == 0 && y != 0) {
            return "x Axis"
        } else if (x != 0 && y == 0) {
            return "y Axis"
        } else {
            return "Origin"
        }
    }

    console.log(checkQuadrant(1, 1));
    console.log(checkQuadrant(-1, 1));
    console.log(checkQuadrant(-1, -1));
    console.log(checkQuadrant(1, -1));
    console.log(checkQuadrant(0, -1));
    console.log(checkQuadrant(-1, 0));
    console.log(checkQuadrant(0, 0));

    //Exercise 4 

    function isValidTriangle (a, b, c) {
        return a + b > c && a + c > b && b + c > a
        }
    
    function checkTriangle (a, b, c) {
        let isValid = isValidTriangle (a, b, c);
        if (isValid) {
            if (a == b && b == c) {
                return `Equilateral`;
            } else if (a == b || b == c || a == c) {
                return `Isosceles`;
            }  else {
                return `Scalene`;
            } 
        } else {
            return `not a valid triangle.`
        }
    }

    console.log(checkTriangle(2, 2, 2));
    console.log(checkTriangle(2, 3, 4));
    console.log(checkTriangle(1, 2, 2));
    console.log(checkTriangle(1, 1, 2));

    // Exercise 5 
// 15 days used, 15 days remaining
// Average daily use: 3.333 GB/day
// You are EXCEEDING your average daily use (3.73 GB/day),
// continuing this high usage, you'll exceed your data plan by 11.9 GB.
// To stay below your data plan, use no more than 2.93 GB/day.

function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAverage = usage / day;
    let projectedAverage = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAverage;
    let statusMsg;
    console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining.`);
    console.log (`Average projected use: ${projectedAverage} GB/day`);
    
    if ( currentAverage > projectedAverage) {
        statusMsg = "EXCEEDING"
    } else if (currentAverage < projectedAverage)
        statusMsg = "UNDER"
        else {
            statusMsg = "AT"
        }

    console.log (`You are ${statusMsg} your average daily use (${currentAverage} GB/day),
    continuing this high usage, you'll end up using 
    ${usage - projectedUsage} GB from your data limit.`)
}

dataUsageFeedback(50, 15, 25);

// tip - breaking down per line what needs to be done. 15 days... avera daily... youre exceeding... etc...

