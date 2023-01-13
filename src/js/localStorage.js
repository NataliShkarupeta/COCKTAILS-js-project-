const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const remove = (key, id) => {
  try {
    let serializedState = load(key);
    for (let i = 0; i < serializedState.length; i++) {
      if (serializedState[i].idDrink === id) {
        serializedState.splice(i, 1);
      }
    }
    save(key, serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export default {
  save,
  load,
  remove,
};

export function addToLocalStorage(KEY, obj) {
  if (obj) {
    let oneCoctailIngredient = obj.map(cocktailEl => {
      const { idDrink, strDrink, strDrinkThumb, strInstructions } = cocktailEl;
      let OneCocktailData = {
        idDrink: idDrink,
        strDrink: strDrink,
        strDrinkThumb: strDrinkThumb,
        cocktailIngr: allIngridient(cocktailEl, 'strIngredient'),
        cocktailMeasure: allIngridient(cocktailEl, 'strMeasure'),
        strInstructions: strInstructions,
      };

      function allIngridient(el, string) {
        let ingridientArr = [];
        const objIngr = Object.entries(el);
        for (let i = 0; i < objIngr.length; i++) {
          if (objIngr[i][0].includes(string) && objIngr[i][1] !== null) {
            ingridientArr.push(objIngr[i][1]);
          }
        }

        return ingridientArr;
      }
      return OneCocktailData;
    });
    save(KEY, oneCoctailIngredient);;
  }
}
const favIgridientFromStorage = [];
favIgridientFromStorage.push(load('ingridient'));
export function favIngridientToLocalStorage(KEY, obj) {
  save(KEY, favIgridientFromStorage.push(obj));
}

export function addIngridientToStorage(KEY, obj) {
  if (obj) {
    const {
      idIngredient,
      strABV,
      strAlcohol,
      strDescription,
      strIngredient,
      strType,
    } = obj;

    let OneIgridient = {
      idIngredient: idIngredient,
      strABV: strABV,
      strAlcohol: strAlcohol,
      strDescription: strDescription,
      strIngredient: strIngredient,
      strType: strType,
    };
  }
}
