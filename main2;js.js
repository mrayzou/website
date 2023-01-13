var myname= window.prompt("what's yout name?");

console.log("hello",myname)

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
 
  });

//
$('.expandHome').mouseover(function() {
  $('.sub-home').css({
        'display': 'block'
    }); 
});
$('.subnavbtn').mouseover(function() {
  $('.sub-home').css({
        'display': 'none'
    }); 
});

$('#trapezoid').mouseleave(function() {
  $('#trapezoid').css({
        'margin-top': '-53px'
    }); 
    $('.sub-home').css({
        'display': 'none'
    }); 
}).mouseenter(function() {
  $('#trapezoid').css({
        'margin-top': '0px'
    }); 
});
 

 
 