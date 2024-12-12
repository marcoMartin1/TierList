const navbarsidebar = document.querySelector('.navbar-tab')

//toggle sidebar when device screen is small

document.querySelector('#hamburger-menu').onclick = () => {
navbarsidebar.classList.toggle('active')
}



//klik di luar sidebar = maka sidebarnya akan hilang 

const  hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click' , function(e){

    //e.target artinya yang diklik mouse kita saat itu 
    //selama yang diklik bukan navbbar dan hamburger menu maka akan jalan 
    if(!hamburger.contains(e.target) && !navbarsidebar.contains(e.target))  {
        navbarsidebar.classList.remove('active')
    }
})


const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

