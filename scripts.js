function chDisabled() {
    const elements = document.getElementsByClassName("onhit");
    let parts = [];
    for (let i = 0; i < elements.length; i++) {
        let str = elements[i].innerHTML;
        let matches = str.split(/(-?\+?\d+(?:\.\d+)?)/).filter(Boolean);
        parts.push(matches);
    }
    console.log(parts);

    for (let i = 0; i < parts.length; i++) {
        let num1 = parseFloat(parts[i][1]);
        let num2 = parseFloat(parts[i][3]);
        let num3 = parseFloat(parts[i][5]);
        console.log("num1:", num1);
        console.log("num2:", num2);
        console.log("num3:", num3);
        let result1 = num1 - 3; // Replace with desired math operation
        let result2 = num2 - 3; // Replace with desired math operation
        let result3 = num3 - 3; // Replace with desired math operation
        console.log("Result 1:", result1);
        console.log("Result 2:", result2);
        console.log("Result 3:", result3);
        console.log("Before replace:", elements[i].innerHTML);
        let count = 0;
        elements[i].innerHTML = elements[i].innerHTML.replace(/-?\d+(?:\.\d+)?/g, function (match) {
            count++;
            if (count === 1) {
                return result1;
            } else if (count === 2) {
                return result2;
            } else if (count === 3) {
                return result3;
            } else {
                return match;
            }
        });
        console.log("After replace:", elements[i].innerHTML);
    }
}

function chEnabled() {
    const elements = document.getElementsByClassName("onhit");
    let parts = [];
    for (let i = 0; i < elements.length; i++) {
        let str = elements[i].innerHTML;
        let matches = str.split(/(-?\+?\d+(?:\.\d+)?)/).filter(Boolean);
        parts.push(matches);
    }
    console.log(parts);

    for (let i = 0; i < parts.length; i++) {
        let num1 = parseFloat(parts[i][1]);
        let num2 = parseFloat(parts[i][3]);
        let num3 = parseFloat(parts[i][5]);
        console.log("num1:", num1);
        console.log("num2:", num2);
        console.log("num3:", num3);
        let result1 = num1 + 3; // Replace with desired math operation
        let result2 = num2 + 3; // Replace with desired math operation
        let result3 = num3 + 3; // Replace with desired math operation
        console.log("Result 1:", result1);
        console.log("Result 2:", result2);
        console.log("Result 3:", result3);
        console.log("Before replace:", elements[i].innerHTML);
        let count = 0;
        elements[i].innerHTML = elements[i].innerHTML.replace(/-?\d+(?:\.\d+)?/g, function (match) {
            count++;
            if (count === 1) {
                return result1;
            } else if (count === 2) {
                return result2;
            } else if (count === 3) {
                return result3;
            } else {
                return match;
            }
        });
        console.log("After replace:", elements[i].innerHTML);
    }
}