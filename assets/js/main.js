/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');
/*=============== MENU SHOW ===============*/
/* validate if constant exist*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 
/*=============== MENU HIDDEN ===============*/
/* validate if constant exist*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, remove show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // when we Scroll add  class scroll-header to header section
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollsY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href *=' + sectionId +']')

            if(scrollsY > sectionTop && scrollsY <= sectionTop + sectionHeight){
                sectionClass.classList.add('active-link')
            }else{
                sectionClass.classList.remove('active-link')

            }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is  higher than 350 viewport height, add the show-scroll class  
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logo__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')
    

const calculateBmi = ((e) => {
    e.preventDefault();
    // Check if the fields have a value
    if(calculateCm.value === '' || calculateKg.value === ''){
        // Add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        // Show message
        calculateMessage.textContent = 'Fill in the Height and Weight😃'
        // Remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent= ''
        },3000)
    
        }
    else{
            // BMI Formula
            const cm = calculateCm.value / 100,
                kg = calculateKg.value,
                bmi = Math.round(kg/(cm*cm))
            // Show your health status
            if(bmi < 18.5){
                calculateMessage.textContent= `Your BMI ${bmi} is and you are skinny😔`
                calculateMessage.classList.add('color-green')
            }else if(bmi < 25){
                calculateMessage.textContent= `Your BMI ${bmi} is and you are healthy🥳`
                calculateMessage.classList.add('color-green')
            }else{
                calculateMessage.textContent= `Your BMI ${bmi} is and you are overweight😔`
                calculateMessage.classList.add('color-greem')
            }  
            // To clear the input field
            calculateCm.value = ''
            calculateKg.value = ''

            // Remove message four seconds
            setTimeout(() => {
                calculateMessage.textContent = ''},4000)
            }
    })
    calculateForm.addEventListener('submit', calculateBmi)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user')


const sendEmail = (e) =>{
    e.preventDefault();
    // Check if the field has a value
    if(contactUser.value === ''){
        // Add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
        // Show message
        contactMessage.textContent = 'You must enter your email👆'
        // Remove message three seconds
        setTimeout(() =>{
        contactMessage.textContent = ''},3000)
    }else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_etw9n4h', 'template_ycplabs', '#contact-form', 'zSZRhx9qoA2eVoJFO')
        .then(() =>{
        // Show message and add color
        contactMessage.classList.add('color-green')
        contactMessage.textContent = 'You registered successfully💪'
        // Remove message after three seconds
        setTimeout(() => {
            contactMessage.textContent= ''},3000)   
    }
    , (error) => {   
        // Mail sending error
        alert('OOPS! SOMETHING HAS FAILED...', error)
    })
    // To clear the input field
    contactUser.value= ''
    }
}
    
contactForm.addEventListener('submit', sendEmail)