function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var bitsId = document.getElementById('bitsId').value;
    var hostel = document.getElementById('hostel').value;
    var size = document.querySelector('input[name="size"]:checked');
    var agreeTerms = document.getElementById('agreeTerms').checked;

    resetErrors();

    if (name.length < 5 || name.length > 50) {
        showError('name', 'Name must be between 5 and 50 characters.');
        return;
    }

    if (!validateEmail(email)) {
        showError('email', 'Invalid email address.');
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        showError('phone', 'Invalid phone number. Please enter a 10-digit number.');
        return;
    }

    if (!/^[A-Za-z0-9]{13}$/.test(bitsId)) {
        showError('bitsId', 'Invalid BITS ID. It should be 13 characters alphanumeric.');
        return;
    }

    if (hostel === "") {
        showError('hostel', 'Please select your hostel.');
        return;
    }

    if (!size) {
        showError('size', 'Please select a size.');
        return;
    }

    if (!agreeTerms) {
        showError('terms', 'Please agree to the terms and conditions.');
        return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('BITS ID:', bitsId);
    console.log('Hostel:', hostel);
    console.log('Size:', size.value);
    console.log('Agree to terms:', agreeTerms);
    
    document.getElementById('successModal').style.display = 'flex';
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function showError(field, message) {
    document.getElementById(field + 'Error').innerText = message;
}

function resetErrors() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].innerText = '';
    }
}

function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
}