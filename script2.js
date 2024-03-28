function toggleVisibility() {
    var paragraph = document.getElementById("paragraph");
    var currentDisplay = window.getComputedStyle(paragraph).display;
    if (currentDisplay === "none" || currentDisplay === "") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

document.getElementById("toggleButton").addEventListener("click", toggleVisibility);

var paragraph = document.getElementById("paragraph");
paragraph.addEventListener("mouseover", function() {
    this.textContent = "I have changed!";
})
paragraph.addEventListener("mouseout", function() {
    this.textContent = "Click button to toggle visibility.";
});