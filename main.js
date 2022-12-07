let openTheme = document.querySelector('#theme')
let verI = document.querySelector('#verI')

openTheme.addEventListener('click', () => {
  
  verI.classList.toggle('ph-sun')  
 
  if (verI.classList.contains('ph-sun')) {
  
    verI.classList.remove('ph-moon')
    document.documentElement.classList.add('dark') 
  
  }else {

    verI.classList.remove('ph-sun')
    verI.classList.add('ph-moon')
    document.documentElement.classList.remove('dark')
  
  }



//<i class="ph-moon"></i>
//<i class="ph-sun"></i>
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
//if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //document.documentElement.classList.add('dark')
//} else {
  //document.documentElement.classList.remove('dark')
//}

// Whenever the user explicitly chooses light mode
//localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
//localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
//localStorage.removeItem('theme')

});
