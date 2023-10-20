console.log("hi there!");

// Function to handle the click event
function handleLinkClick(event) {
  // Get the URL from the "data-url" attribute of the clicked element
  const url = event.target.getAttribute("data-url");

  // Open the URL in a new tab or window
  window.open(url, "_blank");
}

// Add click event listeners to all elements with the "link" class
const linkElements = document.querySelectorAll(".link");
linkElements.forEach((element) => {
  element.addEventListener("click", handleLinkClick);
});
