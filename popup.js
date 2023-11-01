const slider = document.getElementById("mySlider");

slider.addEventListener("change", () => {
    if (slider.checked) {
        chEnabled();
    } else {
        chDisabled();
    }
});

function chEnabled() {
    console.log("counterhit modifier enabled");
};

function chDisabled() {
    console.log("counterhit modifier disabled");
};