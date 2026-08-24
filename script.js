// ==========================================
// EVENTIFY - JAVASCRIPT
// ==========================================


// ==========================================
// SELECT ELEMENTS
// ==========================================

const themeBtn = document.getElementById("themeBtn");

const searchInput = document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const searchBtn =
    document.getElementById("searchBtn");

const eventCards =
    document.querySelectorAll(".event-card");

const noEvents =
    document.getElementById("noEvents");

const registerButtons =
    document.querySelectorAll(".register-btn");

const modal =
    document.getElementById("modal");

const closeBtn =
    document.getElementById("closeBtn");

const selectedEvent =
    document.getElementById("selectedEvent");

const registrationForm =
    document.getElementById("registrationForm");


// ==========================================
// DARK MODE
// ==========================================

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// ==========================================
// FILTER EVENTS
// ==========================================

function filterEvents() {

    const searchText =
        searchInput.value
        .toLowerCase()
        .trim();

    const selectedCategory =
        categoryFilter.value;

    let visibleEvents = 0;


    eventCards.forEach(function (card) {

        const eventName =
            card
            .querySelector("h3")
            .textContent
            .toLowerCase();


        const category =
            card.dataset.category;


        const matchesSearch =
            eventName.includes(searchText);


        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;


        if (
            matchesSearch &&
            matchesCategory
        ) {

            card.style.display = "block";

            visibleEvents++;

        } else {

            card.style.display = "none";

        }

    });


    // Show / hide no events message

    if (visibleEvents === 0) {

        noEvents.style.display = "block";

    } else {

        noEvents.style.display = "none";

    }

}


// ==========================================
// SEARCH BUTTON
// ==========================================

searchBtn.addEventListener(
    "click",
    filterEvents
);


// ==========================================
// SEARCH WHILE TYPING
// ==========================================

searchInput.addEventListener(
    "input",
    filterEvents
);


// ==========================================
// CATEGORY FILTER
// ==========================================

categoryFilter.addEventListener(
    "change",
    filterEvents
);


// ==========================================
// REGISTER BUTTONS
// ==========================================

registerButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const eventCard =
                button.closest(".event-card");


            const eventName =
                eventCard
                .querySelector("h3")
                .textContent;


            selectedEvent.textContent =
                "Registering for: " + eventName;


            modal.classList.add("active");

        }
    );

});


// ==========================================
// CLOSE MODAL
// ==========================================

closeBtn.addEventListener(
    "click",
    function () {

        modal.classList.remove("active");

    }
);


// ==========================================
// CLOSE MODAL OUTSIDE
// ==========================================

modal.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            modal.classList.remove("active");

        }

    }
);


// ==========================================
// REGISTRATION FORM
// ==========================================

registrationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document
            .getElementById("name")
            .value
            .trim();


        const email =
            document
            .getElementById("email")
            .value
            .trim();


        if (!name || !email) {

            alert(
                "Please enter your name and email."
            );

            return;

        }


        alert(
            "Thank you, " +
            name +
            "! Your registration was successful 🎉"
        );


        registrationForm.reset();


        modal.classList.remove("active");

    }
);


// ==========================================
// ESC KEY CLOSES MODAL
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            modal.classList.remove("active");

        }

    }
);


// ==========================================
// INITIAL FILTER
// ==========================================

filterEvents();
// ==========================================
// CONTACT FORM
// ==========================================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            document
            .getElementById("contactName")
            .value
            .trim();

        if (!name) {
            return;
        }

        alert(
            "Thank you, " +
            name +
            "! Your message has been sent successfully 💌"
        );

        contactForm.reset();

    }
);