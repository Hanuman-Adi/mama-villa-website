/* ================= MOBILE MENU TOGGLE ================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

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

/* ================= EMAILJS INITIALIZATION ================= */
emailjs.init("-Dlo0kUtlHPadmuQf"); // Your EmailJS User ID

/* ================= BOOKING FORM ================= */
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(bookingForm);
    const checkin = formData.get("checkin");
    const checkout = formData.get("checkout");

    if (!validateDates(checkin, checkout)) return;

    emailjs
      .send("service_bugwv5m", "template_2ddfret", {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        checkin: checkin,
        checkout: checkout,
        guests: formData.get("guests"),
        message: formData.get("message"),
      })
      .then(() => {
        alert(
          "✅ Booking request sent successfully! Mama will receive an email.",
        );
        bookingForm.reset();
      })
      .catch((error) => {
        alert("❌ Failed to send booking. Try again.");
        console.log(error);
      });
  });
}

/* ================= CONTACT FORM ================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    emailjs
      .send("service_bugwv5m", "template_2ddfret", {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      })
      .then(() => {
        alert("✅ Message sent successfully! We will get back to you.");
        contactForm.reset();
      })
      .catch((error) => {
        alert("❌ Failed to send message. Try again.");
        console.log(error);
      });
  });
}
