function validate() {
    const UID = document.getElementById("UID").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const country = document.getElementById("country").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementsByName("gender");
    const english = document.getElementById("eng").checked;
    const nonEnglish = document.getElementById("eng-n").checked;

    const UIDErr = document.getElementById("UID-err");
    const passwordErr = document.getElementById("password-err");
    const namaErr = document.getElementById("name-err");
    const countryErr = document.getElementById("country-err");
    const emailErr = document.getElementById("email-err");
    const genderErr = document.getElementById("gender-err");
    const langErr = document.getElementById("lang-err");

    let isValidUID = UID.length > 4 && UID != "";
    let isValidPassword = password != "" && password.length > 6;
    let isValidName = name != "" && /^[A-Z]$/i.test(name);
    let isValidCountry = country != "null";
    let isValidEmail = email != "" && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email);
    let isValidForm = true;

    if (!(english || nonEnglish)) {
        isValidForm = false;
        langErr.classList.remove('d-none');
    } else {
        langErr.classList.add('d-none');
    }

    if (!(gender[0].checked || gender[1].checked)) {
        isValidForm = false;
        genderErr.classList.remove('d-none');
    } else {
        genderErr.classList.add('d-none');
    }

    if (!isValidPassword) {
        passwordErr.classList.remove('d-none');
        isValidForm = false
    } else {
        passwordErr.classList.add('d-none');
    }

    if (!isValidUID) {
        UIDErr.classList.remove('d-none');
        isValidForm = false
    } else {
        UIDErr.classList.add('d-none');
    }

    if (!isValidCountry) {
        countryErr.classList.remove('d-none');
        isValidForm = false
    } else {
        countryErr.classList.add('d-none');
    }

    if (!isValidEmail) {
        emailErr.classList.remove('d-none');
        isValidForm = false
    } else {
        emailErr.classList.add('d-none');
    }

    if (!isValidName) {
        namaErr.classList.remove('d-none');
        isValidForm = false
    } else {
        namaErr.classList.add('d-none');
    }


    return isValidForm;
}