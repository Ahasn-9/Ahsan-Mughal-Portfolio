(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) {
    console.error("Contact form not found!");
    return;
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const subject = document.getElementById("subject")?.value.trim();
    const message = document.getElementById("message")?.value.trim();
    const responseMessage = document.getElementById("responseMessage");

    if (!responseMessage) {
      console.error("Response message container not found!");
      return;
    }

    // Basic validation
    if (!name || !email || !subject || !message) {
      responseMessage.innerText = "All fields are required.";
      responseMessage.style.color = "red";
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const result = await response.json();
      responseMessage.innerText =
        result.message || "Message sent successfully!";
      responseMessage.style.color = result.success ? "green" : "red";

      // Clear form fields on success
      if (result.success) {
        contactForm.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      responseMessage.innerText = "Something went wrong. Please try again.";
      responseMessage.style.color = "red";
    }
  });
});
