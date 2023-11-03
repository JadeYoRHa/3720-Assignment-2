// chSlider Messaging
let chslider = document.getElementById('chSlider');

// Listen for the change event
chslider.addEventListener('change', function() {
    let status = this.checked;

    chrome.tabs.query({active: true,
         currentWindow: true
        }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {chsliderStatus: status}, function(response) {
            console.log(response.status);
        });
    });
});

// pcSlider Messaging
let pcslider = document.getElementById('pcSlider');

//Listen for the change event
pcslider.addEventListener('change', function() {
        let status = this.checked;

        chrome.tabs.query({active: true,
         currentWindow: true
        }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {pcsliderStatus: status}, function(response) {
            console.log(response.status);
        });
    });
});

// drSlider Messaging
let drslider = document.getElementById('drSlider');

//Listen for the change event
drslider.addEventListener('change', function() {
    let status = this.checked;

    chrome.tabs.query({active: true,
         currentWindow: true
        }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {drsliderStatus: status}, function(response) {
            console.log(response.status);
        });
    });
});

// boSlider Messaging
let boslider = document.getElementById('boSlider');

//Listen for the change event
boslider.addEventListener('change', function() {
    let status = this.checked;

    chrome.tabs.query({active: true,
         currentWindow: true
        }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {bosliderStatus: status}, function(response) {
            console.log(response.status);
        });
    });
});
