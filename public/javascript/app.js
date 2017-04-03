$(document).ready(() => {
  console.log('jQuery is working!');

  const userInput = $('input[name="photo_search"]');

  $('#unsplash-search-form').on('submit', (e) => {
    e.preventDefault();
    fetch(`/api/unsplash?photo_search=${userInput.val()}`)
    .then(r => r.json())
    .then((data) => {
      $('#container').attr('style', `background-image: url(${data.image})`);
      $('#search-field h2').css('color', 'white');
    });
  });
}
