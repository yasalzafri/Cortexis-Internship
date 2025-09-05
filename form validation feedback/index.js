const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (event) {
    const emailValue = emailInput.value.trim();

    if (!emailValue.includes("@")) {
        event.preventDefault(); // stop form submission
        emailInput.classList.add("error");
        errorMsg.style.display = "block";
    }
});

// Clear error state when user types again
emailInput.addEventListener("input", function () {
    if (emailInput.classList.contains("error")) {
        emailInput.classList.remove("error");
        errorMsg.style.display = "none";
    }
});
