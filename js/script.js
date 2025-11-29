const contactForm = document.querySelector('.contact-form');
const basicPrice = document.getElementById('basic-price');
const mediumPrice = document.getElementById('medium-price');
const premiumPrice = document.getElementById('premium-price');
const radioBasic = document.querySelector('.radio-basic');
const radioMedium = document.querySelector('.radio-medium');
const radioPremium = document.querySelector('.radio-premium');


function basicPriceform() {
    openQuoteForm();
    document.querySelector('.radio-basic').checked = true;
    radioBasic.checked = true;
    radioBasic.style.accentColor = '#4CAF50';
    
}

function mediumPriceform() {
    openQuoteForm();
    document.querySelector('.radio-medium').checked = true;
    radioMedium.checked = true;
    radioMedium.style.accentColor = '#4CAF50';
}

function premiumPriceform() {
    openQuoteForm();
    document.querySelector('.radio-premium').checked = true;
    radioPremium.checked = true;
    radioPremium.style.accentColor = '#4CAF50';
}
function getaQuoteform() {
    openQuoteForm();
}
function submitForm() {
    
    alert('Quote request submitted!');
    closeQuoteForm();
}



function openQuoteForm() {
    document.querySelector('.form-window').style.display = 'block';
}
function closeQuoteForm() {
    document.querySelector('.form-window').style.display = 'none';
}





document.querySelector('.premium-price').addEventListener('click', premiumPriceform);
document.querySelector('.medium-price').addEventListener('click', mediumPriceform);
document.querySelector('.basic-price').addEventListener('click', basicPriceform);
document.querySelector('.getaQuoteform').addEventListener('click', openQuoteForm);
document.querySelector('.close-btn').addEventListener('click', closeQuoteForm);

