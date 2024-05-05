/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input, .skill',{interval: 200}); 

// ============================= SEND MAIL ===========================

function sendMail(){
    
    var params = {
        from_name: document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    };
        
    if(params.from_name && params.email_id && params.message){
        document.querySelector(".contact-btn").textContent = 'Sending...';
        const serviceID = "service_tiiscx8";
        const templateID = "template_nki0hp8";
        
        emailjs.send(serviceID,templateID,params).then(
            res =>{
                document.getElementById("fullname").value = "";
                document.getElementById("email_id").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                document.querySelector(".contact-btn").textContent = 'Send';
                alert("Message Sent successfully.");
            }
        )
        .catch(err=>console.log(err));
    }
}



// ==========================LIGHT/DARK MODE=======================================

function changeTheme(){
    document.body.classList.toggle("lightmode");
}
