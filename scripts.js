// chSlider Message Recieval and Action
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.chsliderStatus !== undefined) {
        if (request.chsliderStatus === true) {
            chEnabled();
        } else {
            chDisabled();
        }
        sendResponse({ status: 'Message received' });
    }
});

function chEnabled() {
    console.log('chSlider is checked');
}

function chDisabled() {
    console.log('chSlider is not checked');
}

// pcSlider Message Recieval and Action
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.pcsliderStatus !== undefined) {
        if (request.pcsliderStatus === true) {
            pcEnabled();
        } else {
            pcDisabled();
        }
        sendResponse({ status: 'Message received' });
    }
});

function pcEnabled() {
    console.log('pcSlider is checked');
}

function pcDisabled() {
    console.log('pcSlider is not checked');
}

// drSlider Message Recieval and Action
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.drsliderStatus !== undefined) {
        if (request.drsliderStatus === true) {
            drhEnabled();
            drbEnabled();
        } else {
            drhDisabled();
            drbDisabled();
        }
        sendResponse({ status: 'Message received' });
    }
});

function drhEnabled() {
    console.log('pcSlider is checked');
}

function drhDisabled() {
    console.log('pcSlider is not checked');
}

// boSlider Message Recieval and Action
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.bosliderStatus !== undefined) {
        if (request.bosliderStatus === true) {
            boEnabled();
        } else {
            boDisabled();
        }
        sendResponse({ status: 'Message received' });
    }
});

function boEnabled() {
    console.log('pcSlider is checked');
}

function boDisabled() {
    console.log('pcSlider is not checked');
}

// Main functionality for the project

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
        let result1 = num1 + 2;
        let result2 = num2 + 2;
        let result3 = num3 + 2;
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
        let result1 = num1 - 2;
        let result2 = num2 - 2;
        let result3 = num3 - 2;
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

function pcEnabled() {
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
        let result1 = num1 + 4;
        let result2 = num2 + 4;
        let result3 = num3 + 4;
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

function pcDisabled() {
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
        let result1 = num1 - 4;
        let result2 = num2 - 4;
        let result3 = num3 - 4;
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

function boEnabled() {
    const elements = document.getElementsByClassName("onblock");
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
        let result1 = num1 + 4;
        let result2 = num2 + 4;
        let result3 = num3 + 4;
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

function boDisabled() {
    const elements = document.getElementsByClassName("onblock");
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
        let result1 = num1 - 4;
        let result2 = num2 - 4;
        let result3 = num3 - 4;
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

function drhEnabled() {
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
        let result1 = num1 + 4;
        let result2 = num2 + 4;
        let result3 = num3 + 4;
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

function drbEnabled() {
    const elements = document.getElementsByClassName("onblock");
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
        let result1 = num1 + 4;
        let result2 = num2 + 4;
        let result3 = num3 + 4;
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

function drhDisabled() {
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
        let result1 = num1 - 4;
        let result2 = num2 - 4;
        let result3 = num3 - 4;
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

function drbDisabled() {
    const elements = document.getElementsByClassName("onblock");
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
        let result1 = num1 - 4;
        let result2 = num2 - 4;
        let result3 = num3 - 4;
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