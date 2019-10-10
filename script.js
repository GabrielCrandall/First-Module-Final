function idcard() {
    var firstName = document.getElementById('FirstName').value;
    var lastName = document.getElementById('LastName').value;
    var address = document.getElementById('Address').value;

    document.getElementById('postFullName').innerHTML = firstName + " " + lastName;
    document.getElementById('postAddress').innerHTML = address;

    var age = parseInt(document.getElementById('Age').value);
    var phonenumber = parseInt(document.getElementById('PhoneNumber').value);

    var numberArray = [];
    numberArray.push(age);
    numberArray.push(phonenumber);

    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 100) {
            document.getElementById('postAge').innerHTML = "Age: " + age;
        } else {
            document.getElementById('postPhoneNumber').innerHTML = "Phone Number: " + phonenumber;
        }
    }
}

var btn = document.getElementById('btn');
btn.addEventListener("click", idcard);
