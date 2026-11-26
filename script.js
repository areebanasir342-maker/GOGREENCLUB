
// MOBILE NAVIGATION
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", function() {
        document.getElementById("menu").classList.remove("active");
    });
});

// STUDENT REGISTRATION FORM
const joinForm = document.getElementById("joinForm");

joinForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // GET FORM INFORMATION
    const name = document.getElementById("name").value.trim();
    const department = document.getElementById("department").value.trim();
    const semester = document.getElementById("semester").value;
    const email = document.getElementById("email").value.trim();
    const reason = document.getElementById("reason").value.trim();

    // CHECK EMPTY FIELDS
    if (!name || !department || !semester || !email || !reason) {
        alert("Please fill in all the required fields.");
        return;
    }

    // DISPLAY SUCCESS MESSAGE
    document.getElementById("formMessage").textContent =
        "Thank you, " + name +
        "! Your application has been prepared successfully.";

    // SHOW APPLICATION DETAILS IN CONSOLE
    console.log("New Student Application");
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Semester:", semester);
    console.log("Email:", email);
    console.log("Reason for Joining:", reason);

    // RESET FORM
    joinForm.reset();

});

// GALLERY IMAGE CLICK EFFECT
const galleryImages = document.querySelectorAll(".gallery-container img");

galleryImages.forEach(image => {

    image.addEventListener("click", function() {
        window.open(image.src, "_blank");
    });

});

// SMOOTH NAVIGATION
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
