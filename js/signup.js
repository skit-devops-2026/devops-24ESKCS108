// ========================================
// GET ELEMENTS
// ========================================

const signupForm = document.getElementById("signupForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");

const errorName = document.getElementById("errorname");
const errorEmail = document.getElementById("erroremail");
const errorPassword = document.getElementById("errorpassword");
const errorConfirm = document.getElementById("errorconfirm");
const errorTerms = document.getElementById("errorterms");


// ========================================
// PASSWORD VISIBILITY
// ========================================

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");


togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});


toggleConfirmPassword.addEventListener("click", () => {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";

        toggleConfirmPassword.classList.remove("fa-eye");
        toggleConfirmPassword.classList.add("fa-eye-slash");

    } else {

        confirmPassword.type = "password";

        toggleConfirmPassword.classList.remove("fa-eye-slash");
        toggleConfirmPassword.classList.add("fa-eye");

    }

});


// ========================================
// VALIDATION FUNCTIONS
// ========================================

function validateName() {

    const name = fullname.value.trim();

    if (name === "") {

        errorName.textContent = "Please enter your full name.";

        return false;
    }

    if (name.length < 3) {

        errorName.textContent =
            "Name must contain at least 3 characters.";

        return false;
    }

    errorName.textContent = "";

    return true;
}


function validateEmail() {

    const emailValue = email.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {

        errorEmail.textContent =
            "Please enter your email address.";

        return false;
    }

    if (!emailPattern.test(emailValue)) {

        errorEmail.textContent =
            "Please enter a valid email address.";

        return false;
    }

    errorEmail.textContent = "";

    return true;
}


function validatePassword() {

    const passwordValue = password.value;

    if (passwordValue === "") {

        errorPassword.textContent =
            "Please enter a password.";

        return false;
    }

    if (passwordValue.length < 8) {

        errorPassword.textContent =
            "Password must contain at least 8 characters.";

        return false;
    }

    if (!/[A-Z]/.test(passwordValue)) {

        errorPassword.textContent =
            "Password must contain at least one uppercase letter.";

        return false;
    }

    if (!/[0-9]/.test(passwordValue)) {

        errorPassword.textContent =
            "Password must contain at least one number.";

        return false;
    }

    errorPassword.textContent = "";

    return true;
}


function validateConfirmPassword() {

    const confirmValue = confirmPassword.value;

    if (confirmValue === "") {

        errorConfirm.textContent =
            "Please confirm your password.";

        return false;
    }

    if (confirmValue !== password.value) {

        errorConfirm.textContent =
            "Passwords do not match.";

        return false;
    }

    errorConfirm.textContent = "";

    return true;
}


function validateTerms() {

    if (!terms.checked) {

        errorTerms.textContent =
            "Please accept the Terms & Conditions.";

        return false;
    }

    errorTerms.textContent = "";

    return true;
}


// ========================================
// FORM SUBMISSION
// ========================================

signupForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmValid = validateConfirmPassword();
    const areTermsValid = validateTerms();

    const isFormValid =
        isNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmValid &&
        areTermsValid;


    if (!isFormValid) {

        return;
    }


    // ------------------------------------
    // TEMPORARY SUCCESS
    // ------------------------------------

    alert("Account created successfully!");

    signupForm.reset();

});