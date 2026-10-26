
"use strict";

// ==========================================
// 1. ENQUIRY FORM
// ==========================================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("enquiryName").value.trim();
        const enquiryType = document.getElementById("enquiryType").value;
        const responseBox = document.getElementById("responseBox");
        const responseMessage = document.getElementById("responseMessage");

        if (!name || !enquiryType) {
            alert("Please complete all required fields.");
            return;
        }

        let response = "";

        switch (enquiryType.toLowerCase()) {
            case "product":
            case "product enquiry":
                response = "Thank you, " + name +
                    "! Your product enquiry has been recorded for this demonstration. " +
                    "Product prices and availability must be confirmed by KrazyCare.";
                break;

            case "service":
            case "services":
                response = "Thank you, " + name +
                    "! Your service enquiry has been recorded for this demonstration. " +
                    "Our fictional team would provide further details about available services.";
                break;

            case "prescription":
            case "prescription enquiry":
                response = "Thank you, " + name +
                    "! Your prescription enquiry has been recorded for this demonstration. " +
                    "Please consult a qualified healthcare professional about prescription needs.";
                break;

            case "skincare":
            case "skin care":
                response = "Thank you, " + name +
                    "! Your skincare enquiry has been recorded for this demonstration. " +
                    "Product suitability should be confirmed with an appropriate professional.";
                break;

            case "wellness":
            case "wellness enquiry":
                response = "Thank you, " + name +
                    "! Your wellness enquiry has been recorded for this demonstration. " +
                    "Our fictional team would provide further information.";
                break;

            default:
                response = "Thank you, " + name +
                    "! Your enquiry has been recorded for this demonstration. " +
                    "No real enquiry has been sent to a business.";
        }

        if (responseBox && responseMessage) {
            responseMessage.textContent = response;
            responseBox.hidden = false;
            responseBox.style.display = "block";
            responseBox.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        } else {
            alert(response);
        }

        enquiryForm.reset();
    });
}


// ==========================================
// 2. GALLERY LIGHTBOX
// ==========================================

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

if (lightbox && lightboxImage) {

    function closeLightbox() {
        lightbox.style.display = "none";
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImage.src = "";
    }

    galleryImages.forEach(function (image) {
        image.style.cursor = "pointer";

        image.addEventListener("click", function () {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt || "Enlarged gallery image";

            lightbox.style.display = "flex";
            lightbox.setAttribute("aria-hidden", "false");
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            lightbox.style.display !== "none"
        ) {
            closeLightbox();
        }
    });
}


// ==========================================
// 3. INTERACTIVE LEAFLET MAP
// ==========================================

const mapElement = document.getElementById("map");
const mapMessage = document.getElementById("mapMessage");

if (mapElement) {

    if (typeof L !== "undefined") {

        const krazyCareMap = L.map("map").setView(
            [-26.2041, 28.0473],
            13
        );

        L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">' +
                    "OpenStreetMap</a> contributors",
                maxZoom: 19
            }
        ).addTo(krazyCareMap);

        L.marker([-26.2041, 28.0473])
            .addTo(krazyCareMap)
            .bindPopup("<strong>KrazyCare Drug Store</strong><br>Example location in Johannesburg.")
            .openPopup();

        if (mapMessage) {
            mapMessage.textContent =
                "The interactive map shows an example location in Johannesburg.";
        }

        window.setTimeout(function () {
            krazyCareMap.invalidateSize();
        }, 300);

    } else if (mapMessage) {
        mapMessage.textContent =
            "The map could not load. Please check your internet connection.";
    }
}


// ==========================================
// 4. PRODUCT SEARCH AND FILTER
// ==========================================

const productSearch = document.getElementById("productSearch");
const searchItems = document.querySelectorAll(".search-item");
const searchMessage = document.getElementById("searchMessage");

if (productSearch) {

    productSearch.addEventListener("input", function () {
        const searchTerm = productSearch.value.trim().toLowerCase();
        let visibleCount = 0;

        searchItems.forEach(function (item) {
            const itemText = item.textContent.toLowerCase();
            const matches = itemText.includes(searchTerm);

            item.style.display = matches ? "" : "none";

            if (matches) {
                visibleCount++;
            }
        });

        if (searchMessage) {
            if (searchItems.length === 0) {
                searchMessage.textContent = "No searchable items are available.";
            } else if (visibleCount === 0) {
                searchMessage.textContent =
                    "No products or services match your search.";
            } else {
                searchMessage.textContent =
                    visibleCount + " matching item(s) found.";
            }
        }
    });
}


// ==========================================
// 5. FAQ ACCORDION
// ==========================================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {
        const faqItem = question.parentElement;
        const isExpanded = question.classList.contains("active");

        question.classList.toggle("active");

        if (faqItem) {
            const answer = faqItem.querySelector(
                ".faq-answer, .faq-content"
            );

            if (answer) {
                answer.style.display = isExpanded ? "none" : "block";
            }
        }

        question.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );
    });
});


// ==========================================
// 6. CONTACT FORM VALIDATION
//    AND ASYNCHRONOUS DEMONSTRATION
// ==========================================

const contactForm = document.getElementById("contactForm");
const contactResponse = document.getElementById("contactResponse");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const messageTypeField = document.getElementById("messageType");
        const messageField = document.getElementById("message");
        const sendButton = document.getElementById("sendMessageButton");

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const messageType = messageTypeField.value;
        const message = messageField.value.trim();

        function showContactResponse(text, isError) {
            if (!contactResponse) {
                alert(text);
                return;
            }

            contactResponse.textContent = text;
            contactResponse.hidden = false;
            contactResponse.style.display = "block";

            contactResponse.style.padding = "12px";
            contactResponse.style.marginTop = "15px";
            contactResponse.style.borderRadius = "5px";

            contactResponse.style.border = isError
                ? "1px solid #b00020"
                : "1px solid #287a45";

            contactResponse.setAttribute(
                "role",
                isError ? "alert" : "status"
            );

            contactResponse.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }

        // Validate required information.
        if (!name || !email || !messageType || !message) {
            showContactResponse(
                "Please complete all fields before submitting the form.",
                true
            );
            return;
        }

        // Validate email format.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showContactResponse(
                "Please enter a valid email address.",
                true
            );

            emailField.focus();
            return;
        }

        if (name.length < 2 || message.length < 10) {
            showContactResponse(
                "Please enter a name of at least 2 characters and a message of at least 10 characters.",
                true
            );
            return;
        }

        const contactData = {
            name: name,
            email: email,
            messageType: messageType,
            message: message
        };

        if (sendButton) {
            sendButton.disabled = true;
            sendButton.textContent = "Processing...";
        }

        if (contactResponse) {
            contactResponse.hidden = true;
            contactResponse.textContent = "";
        }

        try {
            /*
             * DEMONSTRATION ONLY:
             * This asynchronous operation simulates processing the form.
             * It does not contact a server or send an email.
             *
             * Real AJAX delivery requires a configured endpoint or backend.
             */

            await new Promise(function (resolve) {
                window.setTimeout(resolve, 500);
            });

            console.log(
                "Contact form demonstration data:",
                contactData
            );

            showContactResponse(
                "Thank you, " + contactData.name +
                "! Your " + contactData.messageType.toLowerCase() +
                " form has been processed in this demonstration. " +
                "No email was sent because KrazyCare is a fictional business " +
                "and no real submission service is connected.",
                false
            );

            contactForm.reset();

        } catch (error) {
            console.error("Contact form processing error:", error);

            showContactResponse(
                "Something went wrong while processing your form. Please try again.",
                true
            );

        } finally {
            if (sendButton) {
                sendButton.disabled = false;
                sendButton.textContent = "Send Message";
            }
        }
    });
}
