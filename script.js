
/* ========================================
   JAYENN'S ABOUT ME WEBSITE
   Basic Copy and Download Restrictions
======================================== */

// Disable right-click context menu
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

// Block common keyboard shortcuts
document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    const ctrlOrCmd = event.ctrlKey || event.metaKey;

    // Block copy, cut, paste, save, print, select all, and view source
    if (
        ctrlOrCmd &&
        ["c", "x", "v", "s", "p", "u", "a"].includes(key)
    ) {
        event.preventDefault();
    }

    // Block common developer-tools shortcuts
    if (
        event.key === "F12" ||
        (ctrlOrCmd && event.shiftKey &&
            ["i", "j", "c"].includes(key))
    ) {
        event.preventDefault();
    }
});

// Disable copying
document.addEventListener("copy", function (event) {
    event.preventDefault();
});

// Disable cutting
document.addEventListener("cut", function (event) {
    event.preventDefault();
});

// Prevent dragging images
document.addEventListener("dragstart", function (event) {
    if (event.target.tagName === "IMG") {
        event.preventDefault();
    }
});

// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
