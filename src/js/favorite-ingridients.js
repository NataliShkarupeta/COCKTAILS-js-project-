import { defArreyCard } from './random-default-coctails';
// import { createFullMarkup } from './cocktails';
import obj from './localStorage';
import { renderTextAndHeart } from './cocktails';
import orangeHeart from '../images/svg/icons.svg';
import { INGR } from './modal';
const { save, load } = obj;
const objFromFav = load('cocktails');

const butQwe = document.querySelectorAll('.qweqwe123');
const heroEl = document.querySelector('.hero');
const cocktailsSec = document.querySelector('.section-cocktails');
const paginatorSec = document.querySelector('.paginator-sections');
const butOpCocArr = Array.from(butQwe);
butOpCocArr.map(but => {
  but.addEventListener('click', showFavoriteIngridient);
});
function showFavoriteIngridient() {
  const backdropEl = document.querySelector('.backdrop-mob.js-menu-container');
  backdropEl.classList.remove('is-open')
  cocktailsSec.style.display = 'none';
  paginatorSec.style.display = 'none';
  heroEl.innerHTML = '';
  heroEl.insertAdjacentHTML(
    'afterbegin',
    `
<body>
    <div class="container favorite"></div>
        <h1 class="favorite__title">Favorite ingredients</h1>
         <ul class="favorite__list">
        </ul>
        <p class="default-text">You haven't added any favorite cocktails yet</p>
    </div>

    <script type="module" src="/src/index.js"></script>
</body>

   `
  );
  const favCont = document.querySelector('.favorite__list');
  // favCont.insertAdjacentHTML('afterbegin', createFullMarkup(objFromFav));
}
function createFullMarkup(obj) {
  return obj
    .map(
      cocktail =>
        `
        <li id="${cocktail.idDrink}" class="favorite__item">   
          <div class="favorite__wraper">

          <div class="favorite__image-part">
            <picture>
              <source
                srcset="
                ${cocktail.strDrinkThumb} 1x,
                ${cocktail.strDrinkThumb} 2x
                "
                media="(min-width:1200px)"
              />
              <source
                srcset="
                ${cocktail.strDrinkThumb} 1x,
                ${cocktail.strDrinkThumb} 2x
                "
                media="(min-width:768px)"
              />
              <source
                srcset="
                ${cocktail.strDrinkThumb} 1x,
                ${cocktail.strDrinkThumb} 2x
                "
                media="(max-width:767px)"
              />
              <img
                class="favorite__image"
                src="${cocktail.strDrinkThumb}"
                alt="cocktail"
                width="280"
                height="280"
              />
            </picture>
          </div>

          <div class="favorite__description-part">
            <h3 class="favorite__subtitle">${cocktail.strDrink}</h3>
            <div class="favorite__buttons">
              <button data-="${
                cocktail.idDrink
              }" class="button button__learn-more" data-modal-cocktail-open >Learn more</button>
              <button data-="${
                cocktail.idDrink
              }" class="button button__add-or-remove">
              
              ${'Remove'}
                <div class="favorite__heart-wraper">

                  <svg class="favorite__big-icon--${'remove'}" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                    <use href="${orangeHeart}#bigHeart"></use>
                  </svg>
                  <svg class="favorite__small-icon--${'remove'}" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                    <use href="${orangeHeart}#smallHeart"></use>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </li>
      
  ` )
    .join('');
}
