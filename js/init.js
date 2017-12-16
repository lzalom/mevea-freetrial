var bodyHeight = $('body').height();    
var footerHeight = $('footer').height();
var headerHeight = $('header').height();
var windowWidth = $(window).width(); //retrieve current window width
var windowHeight = $(window).height(); //retrieve current window height
var scrollTop  = $(document).scrollTop();

$(document).ready(function(){

    $(window).resize(function(){
        /* resize */
        pageDimensions();
    });

    $(".form-row-buttonset input").checkboxradio();
    $("select").selectmenu();

    $('input#nextstep').click(function(e){
      if ( $('input#no').is(':checked')==true){
        $('.step1').hide();
        $('.step2a').show();
        $('.text1').show();
        $('.text2b').hide();
      }
      if ( $('input#yes').is(':checked')==true){
        $('.step1').hide();
        $('.step2b').show();
        $('.text1').hide();
        $('.text2b').show();
      }
      e.preventDefault();
    });

    /* SUBMIT */
    $('input#send1').click(function(e){
      $('.overlay-2').hide();
      $('.overlay.overlay-1').show();
      e.preventDefault();
    });

    $('input#send2').click(function(e){
      $('.overlay').hide();
      $('.overlay.overlay-2').show();
      e.preventDefault();
    });

    $('a.close').click(function(e){
      $('.overlay').hide();
      e.preventDefault();
    });


});

$(window).load(function(){

    pageDimensions(); 

});



/* CORE FUNCTIONS */
function pageDimensions(){
    bodyHeight = $('body').height();    
    footerHeight = $('footer').height();
    headerHeight = $('header').height();
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    pageMeasurement = windowWidth/windowHeight;
    scrollTop  = $(document).scrollTop();
    
    $('#bodyHeight').text(bodyHeight);
    $('#footerHeight').text(footerHeight);
    $('#headerHeight').text(headerHeight);
    $('#windowWidth').text(windowWidth);
    $('#windowHeight').text(windowHeight);
    $('#pageMeasurement').text(pageMeasurement);
    $('#scrollTop').text(scrollTop);
}
function UtilityHasTouch() {    

    var agent   = navigator.userAgent;

    if ( agent.match(/(iPhone|iPod|iPad|Blackberry|Android)/) ) {
        return true;
    }

    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}



var timer = 0;
function recheck() {
    var window_top = $(this).scrollTop();
    var window_height = $(this).height();
    var view_port_s = window_top;
    var view_port_e = window_top + window_height;
    
    if ( timer ) {
      clearTimeout( timer );
    }
    
    $('.fly').each(function(){
      var block = $(this);
      var block_top = block.offset().top;
      var block_height = block.height();
      
      if ( block_top < view_port_e ) {
        timer = setTimeout(function(){
          block.addClass('show-block');
        },100);       
      } else {
        timer = setTimeout(function(){
          block.removeClass('show-block');
        },100);          
      }
    });
}

$(function(){
  $(window).scroll(function(){
    recheck();
  });
  
  $(window).resize(function(){
     recheck();   
  });
  
  recheck();
});