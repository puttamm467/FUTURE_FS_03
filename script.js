
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !service || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    const whatsappNumber = "919876543210";

    const bookingDetails =
        `Hello QuickFix! I want to book a service.%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Phone: ${encodeURIComponent(phone)}%0A` +
        `Service: ${encodeURIComponent(service)}%0A` +
        `Problem: ${encodeURIComponent(message)}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${bookingDetails}`;

    document.getElementById("formMessage").textContent =
        "Your booking details are ready! Opening WhatsApp...";

    window.open(whatsappURL, "_blank");

    bookingForm.reset();
});
