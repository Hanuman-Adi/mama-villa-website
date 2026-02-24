/* ================= MOBILE MENU TOGGLE ================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* ================= DATE VALIDATION ================= */
function validateDates(checkin, checkout) {
  if (!checkin || !checkout) return true;

  const inDate = new Date(checkin);
  const outDate = new Date(checkout);

  if (outDate <= inDate) {
    alert("Check-out date must be after check-in date.");
    return false;
  }

  return true;
}

/* ================= BOOKING FORM ================= */
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(bookingForm);
    const checkin = formData.get("checkin");
    const checkout = formData.get("checkout");

    // Date validation
    if (!validateDates(checkin, checkout)) return;

    // ✅ EMAILJS INTEGRATION (ENABLE LATER)
    // emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    //   name: formData.get("name"),
    //   phone: formData.get("phone"),
    //   email: formData.get("email"),
    //   checkin: checkin,
    //   checkout: checkout,
    //   guests: formData.get("guests"),
    //   message: formData.get("message"),
    // }).then(() => {
    //   alert("Booking request sent successfully!");
    //   bookingForm.reset();
    // }).catch(() => {
    //   alert("Failed to send booking. Try again.");
    // });

    // TEMP SUCCESS (until EmailJS connected)
    alert("Booking request submitted! We will contact you soon.");
    bookingForm.reset();
  });
}

/* ================= CONTACT FORM ================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    // ✅ EMAILJS INTEGRATION (ENABLE LATER)
    // emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    //   name: formData.get("name"),
    //   email: formData.get("email"),
    //   phone: formData.get("phone"),
    //   message: formData.get("message"),
    // }).then(() => {
    //   alert("Message sent successfully!");
    //   contactForm.reset();
    // }).catch(() => {
    //   alert("Failed to send message.");
    // });

    // TEMP SUCCESS
    alert("Message sent! We will get back to you.");
    contactForm.reset();
  });
}
