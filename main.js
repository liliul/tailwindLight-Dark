let openTheme = document.querySelector('#theme')
let verI = document.querySelector('#verI')

if (localStorage.theme === 'dark') {
  document.documentElement.classList.add('dark')
  verI.classList.add('ph-sun')
}

openTheme.addEventListener('click', () => {
  
  verI.classList.toggle('ph-sun')  
  
  if (verI.classList.contains('ph-sun')) {
    
    verI.classList.remove('ph-moon')
    document.documentElement.classList.add('dark') 
   
    localStorage.setItem('theme', 'dark');
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      
      localStorage.theme = 'dark'
      
    }

  }else {

    verI.classList.remove('ph-sun')
    verI.classList.add('ph-moon')
    document.documentElement.classList.remove('dark')
    localStorage.removeItem('theme')
  
  }

});

