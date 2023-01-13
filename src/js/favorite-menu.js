
const mobFavarite = document.querySelector('#dropdownmob');
const deskFavarite = document.querySelector('#dropdowndesk');
mobFavarite.addEventListener('click', myFunctionn);
function myFunctionn() {
  document.getElementById('myDropdownn').classList.toggle('show');
}
deskFavarite.addEventListener('click', myFunction);
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
