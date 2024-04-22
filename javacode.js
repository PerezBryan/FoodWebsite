function dataValidation() {
    var firstName= document.getElementById('first-name').value
    var lastName= document.getElementById('last-name').value
    var phoneNumber= document.getElementById('phone-number').value
    var tip= document.getElementById('tip-amount').value

    if (firstName.trim() === '') {
        alert('Please enter your first name.');
    return false;
    }
    if (lastName.trim() === '') {
        alert('Please enter your last name.');
        return false;
    }
    if (phoneNumber.trim() === '') {
        alert('Please enter a valid phone number,');
        return false;
    }
    alert('Thank you ' + firstName + ' ' + lastName + ' for choosing FumbleEats!');
    return true; 
}

function validateForm() {
    var fName= document.getElementById('first-name').value
    var lName= document.getElementById('last-name').value
    var userEmail= document.getElementById('email').value
    var question= document.getElementById('textarea').value

    if (fName.trim() === '') {
        alert('Please fill in the box');
        return false;
    }
    if(lName.trim() === '') {
        alert('Please fill in the box');
        return false;
    }
    if (userEmail.trim() === '') {
        alert('Fill in an email');
        return false;
    }
    if (question.trim() === '') {
        alert('Please fill in the box');
        return false;
    }
    alert('Thank you for your feedback!');
    return true;
}

        