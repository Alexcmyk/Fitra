document.addEventListener('DOMContentLoaded', function () {
  let option = document.getElementById('variant-id');
  if (option) {
    option.addEventListener('change', function (e) {
      let target = e.target.value;
      let productImage = document.querySelector(`.single-product-image[data-variant="${target}"]`);
      let productImages = document.querySelectorAll('.single-product-image');
      productImages.forEach((image) => {
        image.style.display = 'none';
      });
      productImage.style.display = 'block';
    });
  }
});
