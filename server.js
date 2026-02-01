// यूजर की लोकेशन ट्रैक करना और आपको मेल भेजना
async function notifyAdmin(paymentId, amount) {
    // ब्राउज़र से लोकेशन लेना
    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        const data = {
            payment_id: paymentId,
            amount: amount,
            location: `https://www.google.com/maps?q=${lat},${lon}`,
            status: "PENDING_APPROVAL"
        };

        // यह डेटा आपके एडमिन पैनल (Back-end) पर जाएगा
        await fetch('/api/new-donation', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        
        alert("आपका दान 'Hold' पर है। फाउंडेशन के अप्रूवल के बाद यह स्वीकार किया जाएगा।");
    });
}
