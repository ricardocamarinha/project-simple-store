function size(){
  if (window.innerWidth >= 700){
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
}

function clickMenu() {
   if (menu.style.display == 'block') {
       menu.style.display = 'none'
       
   } else {
     menu.style.display = 'block'
   }
}