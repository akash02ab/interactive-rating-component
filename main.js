const ratingCard = document.getElementById('rating-card');
const thankyouCard = document.getElementById('thankyou-card');
const ratings = document.querySelectorAll('.rating');
const submitBtn = document.getElementById('submit-btn');
const selectedRating = document.getElementById('selected-rating');
const stars = document.querySelector('.stars');
const star = '<img src="./images/icon-star.svg" alt="" />';
let ratingValue = 5;

ratings.forEach(rating => {
  rating.addEventListener('click', () => {
    const radioId = rating.getAttribute('for');
    const radioBtn = document.getElementById(radioId);
    const selectedValue = radioBtn.value;
    ratingValue = selectedValue;

    stars.innerHTML = "";

    for (let index = 0; index < selectedValue; index++) {
      stars.innerHTML += star;
    }
  });
});

submitBtn.addEventListener('click', () => {
  if (!ratingValue) return;
  selectedRating.innerHTML = ratingValue;
  ratingCard.style.display = 'none';
  thankyouCard.style.display = 'flex';
});