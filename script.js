// JavaScript for sliding images
const slider = document.querySelector('.slider');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.clientX;
  slider.style.cursor = 'grabbing';
});

slider.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const currentPosition = e.clientX;
    currentTranslate = prevTranslate + currentPosition - startPosition;
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  prevTranslate = currentTranslate;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
  prevTranslate = currentTranslate;
  slider.style.cursor = 'grab';
});

$(document).ready(function(){
    // Smooth scrolling for links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    
    // Change navbar background on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('bg-dark');
        } else {
            $('.navbar').removeClass('bg-dark');
        }
    });
});
$(document).ready(function() {
    $('#servicesCarousel').on('slide.bs.carousel', function (e) {
        var $activeIndicator = $('.carousel-indicators li.active');
        var $indicators = $('.carousel-indicators li');
        var index = $indicators.index($activeIndicator);
        
        $indicators.eq(index).removeClass('active');
        $indicators.eq(e.to).addClass('active');
    });

    $('.carousel-indicators li').click(function() {
        var index = $(this).data('slide-to');
        $('#servicesCarousel').carousel(index);
    });
});
$(document).ready(function() {
    $('.list-group-item').on('click', function(e) {
        e.preventDefault();
        var newImage = $(this).data('image');
        
        // Update active state
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
        
        // Change image
        $('#project-image').attr('src', newImage);
    });
});