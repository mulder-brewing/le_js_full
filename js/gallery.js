function activateGallery() {
  let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click",function() {
      mainImage.setAttribute("src", thumbnail.dataset.largeVersion);
    });
  });
}
