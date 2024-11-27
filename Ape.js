const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

hamburger.addEventListener("click", function () {
  // Toggle the navigation menu
  const isOpen = nav.classList.contains("hidden");
  nav.classList.toggle("hidden", !isOpen); // Show or hide nav

  // Animate the hamburger icon
  if (isOpen) {
    // When opening, create cross shape
    bar1.classList.add("rotate-45", "translate-y-1");
    bar2.classList.add("opacity-0");
    bar3.classList.add("rotate-[-45deg]", "translate-y-[-1]");
  } else {
    // When closing, revert to original state
    bar1.classList.remove("rotate-45", "translate-y-1");
    bar2.classList.remove("opacity-0");
    bar3.classList.remove("rotate-[-45deg]", "translate-y-[-1]");
  }
});

//carousel
let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.getElementById("carousel");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  // Update current index based on direction
  currentIndex += direction;

  // Wrap around if we go out of bounds
  if (currentIndex < 0) {
    currentIndex = totalItems / 3 - 1; // Go to the last visible item
  } else if (currentIndex >= totalItems / 3) {
    currentIndex = 0; // Go to the first visible item
  }

  // Move the carousel
  const offset = -currentIndex * (100 / 3); // Calculate offset for three items
  carousel.style.transform = `translateX(${offset}%)`;
}

// Automatically move the carousel every 3 seconds
setInterval(() => {
  moveSlide(1);
}, 3000);

//copy texts
function copyText() {
  // Get the text from the element with id 'copy-text'
  const textToCopy = document.getElementById("copy-text").innerText;

  // Use the Clipboard API to copy text
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      // Create a notification element
      const notification = document.createElement("div");
      notification.innerText = "Copied!";
      notification.style.position = "fixed";
      notification.style.bottom = "20px";
      notification.style.right = "20px";
      notification.style.padding = "10px";
      notification.style.backgroundColor = "#FCCC04"; // Yellow background
      notification.style.color = "black"; // Optional: Change text color to black for better contrast
      notification.style.borderRadius = "5px";
      notification.style.zIndex = "1000";

      // Append the notification to the body
      document.body.appendChild(notification);

      // Remove the notification after 3 seconds
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 3000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
// Basic carousel functionality (example)
const carouselItems = document.querySelectorAll("#carousel > div");
let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    item.style.display = i === index ? "block" : "none";
  });
}

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselItems.length - 1;
  showSlide(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
  showSlide(currentIndex);
});

// Initialize the first slide
showSlide(currentIndex);
