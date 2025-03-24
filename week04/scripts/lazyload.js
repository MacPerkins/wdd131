let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

// -------Intersection Observer-------

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
}

const yearSpan = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

const today = new Date();
const currentYear = today.getFullYear();

yearSpan.textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified);
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const formattedDate = lastModifiedDate.toLocaleDateString(undefined, options);

lastModified.textContent = `Last Modified on: ${formattedDate}`;