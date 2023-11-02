// Select all elements with class "accordionBox__title"
let accordionTitle = document.querySelectorAll(".accordionBox__title");

// Select all elements with class "accordionBox__content"
let accordionContent = document.querySelectorAll(".accordionBox__content");

// Add a click event listener to each "accordionBox__title" element
accordionTitle.forEach((eachTitle, index) => {
    eachTitle.addEventListener("click", () => {

        // Select the '+' span element inside the clicked "accordionBox__title"
        let span = eachTitle.lastElementChild; // selection '+' span

        // Check if the corresponding "accordionBox__content" is active
        let isActive = accordionContent[index].classList.contains('active'); // initially it will be false because none of the accordion sections have the 'active' class

        // Remove the 'active' class from all "accordionBox__content" elements and the 'rotate' class from all the '+' spans
        accordionContent.forEach((eachContent, currentIndex) => {
            eachContent.classList.remove('active'); // initially removing 'active' from each content div (hiding initially)
            accordionTitle[currentIndex].lastElementChild.classList.remove('rotate'); // Remove 'rotate' from all <span> elements
        });

        // If the clicked section is not active, add the 'active' class to the "accordionBox__content" and 'rotate' class to the '+' span
        if (!isActive) {
            accordionContent[index].classList.add('active'); // adding 'active' class to the current index
            span.classList.add('rotate'); // rotating the '+' span
        }
    });
});
