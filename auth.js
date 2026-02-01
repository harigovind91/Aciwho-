function sendOTP() {
    const email = document.getElementById('userEmail').value;
    const phone = document.getElementById('userPhone').value;

    if(email && phone) {
        // यहाँ API कॉल होगी जो ईमेल और मोबाइल पर OTP भेजेगी
        document.getElementById('otp-section').style.display = 'block';
        alert("OTP आपके ईमेल और मोबाइल पर भेज दिया गया है!");
    } else {
        alert("कृपया पूरी जानकारी भरें");
    }
}

function verifyAndLogin() {
    // OTP वेरिफिकेशन लॉजिक
    window.location.href = "dashboard.html"; // सफल होने पर डैशबोर्ड पर भेजें
}
