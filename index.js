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


const darkMode = document.querySelector('.dark');
const extranavbar = document.querySelectorAll(".extra-navbar a")
const navbartab = document.querySelectorAll(".navbar .navbar-tab")
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll('.navbar-tab a');
const navbarlogo = document.querySelector(".navbar .navbar-logo")
const footer = document.querySelector(".footer-container");
const footerdescription = document.querySelectorAll(".footer-section p ")
const footerlinks = document.querySelectorAll(".footer-section a")
const card = document.querySelectorAll(".card")
const carddetail = document.querySelectorAll(".card p")
const footerbottom  = document.querySelector(".footer-bottom")


darkMode.addEventListener('click', (event) => {

  event.preventDefault();


  // Check if it's currently in dark mode
  const isDarkMode = document.body.classList.contains('dark-mode');



  if (isDarkMode) {

    //bgnya ubah ke putih
    
    // Switch to light mode
    document.body.classList.remove('dark-mode');

    console.log("remove dark in if")

    document.body.classList.add('light-mode');

    console.log("add light in if")

    navbar.style.backgroundColor = "#eaeaea";

    navbartab.forEach(element => {
      element.style.backgroundColor = "#eaeaea"
    });

    card.forEach((element)=>{
      element.style.backgroundColor = "#F8F9FA"
    })

    carddetail.forEach((element)=>{
      element.style.color = "#000"
    })


    footer.style.backgroundColor = "#eaeaea";

    footerdescription.forEach((description)=>{
      description.style.color = "#000"
    })
   

    
    

    // Apply styling to each <a> element
links.forEach(link => {
  link.style.color = '#000'; // Change text color to hitam
 
});

navbarlogo.style.color = "#000"

extranavbar.forEach((icon)=>{
  icon.style.color = "#000"
})

footerlinks.forEach((flinks)=>{
  flinks.style.color = "#000"
})

footerbottom.style.color = "#000"






  } else {
    // Switch to dark mode
    document.body.classList.remove('light-mode');

    console.log("remove light in else")

    document.body.classList.add('dark-mode');

    console.log("add dark in if");

    navbar.style.backgroundColor = " rgba(1, 1, 1 , 0.8)";
    // links.style.color = "#fff";

    links.forEach(link => {
      link.style.color = '#fff'; // Change text color to hitam
     
    });

    navbarlogo.style.color = "#fff  "

    extranavbar.forEach((icon)=>{
      icon.style.color = "#fff"
    })

    card.forEach((element)=>{
      element.style.backgroundColor = "#2a2a3c"
    })

    carddetail.forEach((element)=>{
      element.style.color = "#ccc"
    })

    navbartab.forEach(element => {
      element.style.backgroundColor = "rgba(1, 1, 1, 0.8)"
    });

    footer.style.backgroundColor = " rgba(1, 1, 1, 0.8)";

    footerdescription.forEach((description)=>{
      description.style.color = "#ccc"
    })

    footerlinks.forEach((flinks)=>{
      flinks.style.color = "#ccc"
    })



    footerbottom.style.color = "#aaa"



  
    

  }




 
})

