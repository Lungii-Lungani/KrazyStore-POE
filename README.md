# KrazyCare Drug Store

**WEDE5020 Web Development (Introduction) — 2026 Portfolio of Evidence**

## 1. Student Information

- **Student Name:** Ntshobelo Lungani
- **Student Number:** ST10501371
- **Module Code:** WEDE5020
- **Project:** KrazyCare Drug Store
- **Project Type:** Individual website development project

## 2. Project Overview

KrazyCare Drug Store is a fictional luxury pharmacy website developed as part of the WEDE5020 Portfolio of Evidence (POE). The website uses the tagline **“Luxury Healthcare, Redefined.”**

The website presents the pharmacy’s products and services, company information, healthcare news, enquiry options and contact information. Its design combines a professional healthcare identity with an elegant visual style, responsive layouts and interactive features.

The website was developed progressively through HTML structure, CSS styling and JavaScript functionality.

**Live Website:** https://lungii-lungani.github.io/KrazyStorePart2/

**GitHub Repository:** https://github.com/Lungii-Lungani/KrazyStorePart2

## 3. Website Goals and Objectives

The main goals of the website are to:

- Establish a professional online presence for KrazyCare Drug Store.
- Present pharmacy products and healthcare services clearly.
- Provide visitors with information about the fictional organisation.
- Allow visitors to submit product and service enquiries.
- Provide a general contact form and location map.
- Improve navigation and usability across desktop, tablet and mobile devices.
- Demonstrate the use of HTML5, CSS3 and JavaScript in a multi-page website.
- Apply search-engine optimisation (SEO) and accessibility practices where implemented.

## 4. Target Audience

The website is designed for health-conscious adults, families, senior citizens, working professionals and customers interested in pharmacy services, healthcare products, skincare and wellness information.

## 5. Website Pages and Sitemap

The website contains seven main HTML pages.

| File | Purpose |
|---|---|
| `index.html` | Introduces KrazyCare Drug Store and highlights featured services. |
| `about.html` | Presents information about the pharmacy and includes an interactive FAQ accordion. |
| `products.html` | Displays product and service categories with search functionality. |
| `gallery.html` | Displays pharmacy images with an interactive lightbox. |
| `news.html` | Presents healthcare news and updates. |
| `enquiry.html` | Allows visitors to submit product or service enquiries. |
| `contact.html` | Provides contact information, a general contact form and an interactive map. |

### Sitemap hierarchy

- Home
  - About Us
  - Products & Services
  - Gallery
  - News & Updates
  - Enquiry
  - Contact Us

## 6. Main Features and Functionality

### Responsive design and navigation

The website uses a shared external stylesheet to maintain a consistent visual identity. CSS media queries and responsive layout techniques help the pages adapt to different screen sizes. Navigation links connect the main website pages.

### Products and services search

The Products page includes JavaScript search functionality that filters displayed items according to the visitor’s search term. Feedback is displayed when no matching items are found.

### Interactive gallery lightbox

The Gallery page allows visitors to enlarge images by selecting them. The lightbox can be closed using its close button, by selecting the overlay or by pressing the Escape key.

### FAQ accordion

The About page includes an interactive FAQ section. Selecting a question reveals or hides its answer.

### Interactive map

The Contact page uses Leaflet and OpenStreetMap tiles to display an interactive map with a marker for an illustrative pharmacy location in Johannesburg, South Africa. This is a fictional location and does not represent a verified business address.

### Enquiry form

The Enquiry page provides form controls for visitors to enter their details and select an enquiry category. JavaScript generates a response based on the selected category. This client-side response does not confirm actual stock availability, prices, appointments or bookings.

### Contact form

The Contact page includes a general contact form. Its validation, submission processing and email behaviour must be assessed according to the current implementation and testing results. A browser-side confirmation alone does not establish that an email has been delivered.

## 7. Technologies and Tools

- **HTML5:** Structures the website pages, content and forms.
- **CSS3:** Provides typography, colours, layouts, responsive styling and visual transitions.
- **JavaScript:** Implements search, lightbox, accordion and form interactions.
- **Leaflet:** Displays the interactive map.
- **OpenStreetMap:** Supplies the map tiles.
- **Google Fonts:** Provides the website typography.
- **GitHub:** Hosts the source code and records development changes.
- **GitHub Pages:** Publishes the website online.

## 8. Project File Structure

```text
KrazyStorePart2/
├── index.html
├── about.html
├── products.html
├── gallery.html
├── news.html
├── enquiry.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
├── sitemap.xml
├── robots.txt
└── README.md
```

The file structure separates HTML pages, CSS styling, JavaScript functionality and image assets. All file paths should match the actual repository structure.

## 9. SEO and Accessibility

The project applies SEO and accessibility practices where implemented, including:

- Page-specific HTML titles and meta descriptions.
- Appropriate heading hierarchy.
- Descriptive alternative text for meaningful images.
- Internal navigation links.
- Responsive layouts for mobile usability.
- `sitemap.xml` to list the website’s public pages for discovery.
- `robots.txt` to provide crawler guidance and identify the sitemap.

The deployed versions of `robots.txt` and `sitemap.xml` should be checked before submission to confirm that both load successfully and that the sitemap URL is correct.

Additional testing should cover image alternative text, form labels, keyboard navigation, broken links, loading performance and the browser console.

## 10. Testing and Quality Assurance

The following tests should be completed and recorded before final submission:

- Confirm that all seven pages load on the deployed website.
- Test navigation links between pages.
- Test the website at desktop, tablet and mobile widths.
- Enter matching and non-matching terms into the product search.
- Open and close gallery images using the supported controls.
- Expand and collapse FAQ answers.
- Test the interactive map and marker.
- Submit empty and valid enquiry and contact forms.
- Confirm that validation messages are clear and that the documented submission behaviour matches the actual implementation.
- Check for broken image paths, missing resources and JavaScript errors.
- Confirm that the deployed SEO files are accessible.

Only mark a test as passed after completing it in the browser.

## 11. Development Timeline

| Project stage | Work undertaken |
|---|---|
| Part 1: Building the Foundation | Planned the fictional organisation, target audience, website objectives, page structure and content. |
| Part 2: Designing the Visuals | Developed the shared CSS stylesheet, typography, colour scheme, layouts and responsive styling. |
| Part 3: Adding Functionality and SEO | Developed JavaScript interactions, search functionality, forms and map integration, and addressed SEO and documentation requirements. |
| Final review | Test all pages, check deployment, document changes and verify references before submission. |

## 12. Changelog

The changelog records the development of the website and improvements made in response to assessment feedback. The entries below summarise the main development stages; individual changes should also be supported by the actual Git commit history.

### Part 1 — Initial website structure

- Created the initial HTML pages and navigation structure.
- Organised the project into HTML files and separate asset folders.
- Added initial content for the fictional pharmacy and its products and services.

### Part 2 — CSS styling and responsive design

- Developed the shared external stylesheet at `css/style.css`.
- Applied consistent typography, colours, spacing and page layouts.
- Added responsive styling for different screen sizes.
- Improved navigation, images and interactive visual states.

### Part 3 — JavaScript functionality and SEO

- Added product and service search functionality.
- Implemented the gallery lightbox and keyboard closing behaviour.
- Added an interactive FAQ accordion.
- Integrated the Leaflet map using OpenStreetMap tiles.
- Developed enquiry and general contact form interactions.
- Reviewed page metadata, heading structure, image alternative text, internal links, `robots.txt` and `sitemap.xml`.
- Updated the Contact page structure and styling to align with the shared website design.
- Reviewed documentation and references to improve the completeness of the project record.

### Final verification

- Test page navigation, responsive layouts, search, gallery, FAQ, map and form behaviour.
- Verify that all local resources load correctly on GitHub Pages.
- Confirm the deployed sitemap and robots file are accessible.
- Record any remaining issues and their resolutions.

## 13. References

The following sources provide documentation for the technologies and web standards used in the project. They should be retained in the final reference list only where they correspond to resources actually consulted during development.

- Google (n.d.) *Google Fonts*. Available at: https://fonts.google.com/ (Accessed: 26 October 2026).
- GitHub (n.d.) *GitHub Pages documentation*. Available at: https://docs.github.com/en/pages (Accessed: 26 October 2026).
- Leaflet (n.d.) *Leaflet — an open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com/ (Accessed: 26 October 2026).
- Mozilla Developer Network (MDN) (n.d.) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 26 October 2026).
- Mozilla Developer Network (MDN) (n.d.) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 26 October 2026).
- Mozilla Developer Network (MDN) (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 26 October 2026).
- OpenStreetMap contributors (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org/ (Accessed: 26 October 2026).
- World Wide Web Consortium (W3C) (n.d.) *Web Accessibility Initiative (WAI)*. Available at: https://www.w3.org/WAI/ (Accessed: 26 October 2026).

## 14. Deployment

The website is published using GitHub Pages.

**Live website:** https://lungii-lungani.github.io/KrazyStorePart2/

**Source repository:** https://github.com/Lungii-Lungani/KrazyStorePart2

The deployed version should be checked after each final update to confirm that the latest files are published and that all pages, images, scripts, forms and SEO resources work as expected.
