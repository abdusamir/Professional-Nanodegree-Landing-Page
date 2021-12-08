/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navBarList = document.querySelector("#navbar__list");
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 */

// build the nav

for (const section of sections) {
  const li = document.createElement("li");
  li.innerHTML = `<a href='#${
    section.id
  }' class='menu__link'>${section.getAttribute("data-nav")}</a>`;
  li.style.color = "black";
  fragment.appendChild(li);
}
navBarList.appendChild(fragment);

// Scroll to anchor ID using scrollTO event
navBarList.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    document
      .querySelector(event.target.hash)
      .scrollIntoView({ behavior: "smooth" });
  }
});
// Add class 'active' to section when near top of viewport
// Set sections as active
window.addEventListener("scroll", () => {
  for (const section of sections) {
    rect = section.getBoundingClientRect();
    if (rect.top > 0 && rect.top < 250) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
});
