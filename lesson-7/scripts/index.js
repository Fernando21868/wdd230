// Get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]');

// Optional parameters being set for the IntersectionObserver
const imgOptions = {
  threshold: 1,
  rootMargin: '0px 0px 50px 0px',
};

const loadImages = (image) => {
  const src = image.getAttribute('data-src');
  image.setAttribute('src', src);
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

// First check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (!item.isIntersecting) {
        return;
      } else {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  // Just load all images if not supported
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
