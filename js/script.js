const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("enquiryName").value.trim();

        const type =
            document.getElementById("enquiryType").value;

        const responseBox =
            document.getElementById("enquiryResponse");

        const responseMessage =
            document.getElementById("responseMessage");

        let message = "";


        if (type === "product") {

            message =
                `Thank you, ${name}. Your product availability enquiry has been received. ` +
                `Our team will confirm product availability and provide pricing information where applicable.`;

        }

        else if (type === "service") {

            message =
                `Thank you, ${name}. Your healthcare service enquiry has been received. ` +
                `Our team will provide information about the requested service, availability and applicable costs.`;

        }

        else if (type === "prescription") {

            message =
                `Thank you, ${name}. Your prescription support enquiry has been received. ` +
                `Our pharmacy team will provide guidance regarding prescription requirements and availability.`;

        }

        else if (type === "skincare") {

            message =
                `Thank you, ${name}. Your luxury skincare enquiry has been received. ` +
                `Our team will provide information about suitable products, availability and pricing.`;

        }

        else if (type === "wellness") {

            message =
                `Thank you, ${name}. Your wellness and supplements enquiry has been received. ` +
                `Our team will provide information about available products and pricing.`;

        }


        responseMessage.textContent = message;

        responseBox.style.display = "block";

        responseBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        enquiryForm.reset();

    });

}



// ==========================================
// GALLERY LIGHTBOX
// ==========================================

const galleryImages =
    document.querySelectorAll(".gallery-grid img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


if (
    galleryImages.length > 0 &&
    lightbox &&
    lightboxImage &&
    lightboxClose
) {

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src =
                image.getAttribute("src");

            lightboxImage.alt =
                image.getAttribute("alt");

            lightbox.classList.add("show");

        });

    });


    lightboxClose.addEventListener(
        "click",
        function () {

            lightbox.classList.remove("show");

        }
    );


    lightbox.addEventListener(
        "click",
        function (event) {

            if (event.target === lightbox) {

                lightbox.classList.remove("show");

            }

        }
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                lightbox.classList.remove("show");

            }

        }
    );

}



// ==========================================
// KRAZYCARE INTERACTIVE MAP
// ==========================================

const mapElement =
    document.getElementById("map");

const mapMessage =
    document.getElementById("mapMessage");


if (mapElement) {


    // Check whether Leaflet loaded

    if (typeof L === "undefined") {

        mapMessage.textContent =
            "The interactive map could not be loaded. Please check your internet connection and refresh the page.";

        mapMessage.style.marginTop = "15px";

        mapMessage.style.fontWeight = "600";

    }


    else {


        // Representative Johannesburg coordinates

        const latitude = -26.2041;

        const longitude = 28.0473;


        // Create map

        const map =
            L.map("map").setView(
                [latitude, longitude],
                13
            );


        // OpenStreetMap layer

        L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                maxZoom: 19,

                attribution:
                    "&copy; OpenStreetMap contributors"
            }
        ).addTo(map);


        // Marker

        const marker =
            L.marker(
                [latitude, longitude]
            ).addTo(map);


        // Popup

        marker.bindPopup(
            `
                <strong>KrazyCare Drug Store</strong>
                <br>
                123 Luxury Avenue
                <br>
                Johannesburg, South Africa
            `
        );


        // Automatically show popup

        marker.openPopup();


        // Make sure Leaflet calculates the map size

        setTimeout(function () {

            map.invalidateSize();

        }, 500);

    }

}

// ==========================================
// PRODUCT AND SERVICE SEARCH
// ==========================================

const productSearch =
    document.getElementById("productSearch");

const searchItems =
    document.querySelectorAll(".search-item");

const searchMessage =
    document.getElementById("searchMessage");


if (productSearch && searchItems.length > 0) {

    productSearch.addEventListener(
        "input",
        function () {

            const searchTerm =
                productSearch.value
                    .toLowerCase()
                    .trim();


            let visibleItems = 0;


            searchItems.forEach(function (item) {

                const itemText =
                    item.textContent
                        .toLowerCase();


                if (
                    itemText.includes(searchTerm)
                ) {

                    item.style.display = "";

                    visibleItems++;

                }

                else {

                    item.style.display = "none";

                }

            });


            // Display search results message

            if (searchTerm === "") {

                searchMessage.textContent = "";

            }

            else if (visibleItems === 0) {

                searchMessage.textContent =
                    "No products or services were found. Please try another search.";

            }

            else {

                searchMessage.textContent =
                    visibleItems +
                    " matching item(s) found.";

            }

        }
    );

}

// ==========================================
// FAQ ACCORDION
// ==========================================

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const faqItem =
            question.parentElement;

        faqItem.classList.toggle("active");

    });

});


 
// ==========================================
// CONTACT FORM VALIDATION AND EMAIL
// ==========================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get the contact form fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("message").value.trim();

        // Check that all required information is provided
        if (!name || !email || !messageType || !message) {
            alert("Please complete all fields before sending your message.");
            return;
        }

        // Validate the email address
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            document.getElementById("email").focus();
            return;
        }

        // Prepare the email details
        const recipient = "info@krazycare.co.za";
        const subject = `KrazyCare Contact: ${messageType}`;

        const emailBody =
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Message Type: ${messageType}\n\n` +
            `Message:\n${message}`;

        // Open the visitor's default email application
        const mailtoLink =
            `mailto:${recipient}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

    });

}
