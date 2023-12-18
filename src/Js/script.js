const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.header__navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


var section = document.getElementById('certificates-resume');
var display = 0;
var button = document.getElementById('certificates__toggle');

function hideShow() {
    if (display == 0) {
        section.style.display = 'block';
        display = 1;
        button.innerHTML = 'less<<';
    } else {
        section.style.display = 'none';
        display = 0;
        button.innerHTML = 'more>>';
    }
}

const sliderContainers = document.querySelectorAll('.slider-container');
const scrollDistance = 200; 

sliderContainers.forEach((container) => {
  const sliderContent = container.querySelector('.slider-content');
  const sliderIcons = container.querySelectorAll('.slider-icon');

  sliderIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const direction = icon.classList.contains('fa-angle-left') ? -1 : 1;
      sliderContent.scrollBy({
        left: direction * scrollDistance,
        behavior: 'smooth',
      });
    });
  });


  sliderContent.addEventListener('scroll', () => {
    const isAtStart = sliderContent.scrollLeft === 0;
    sliderIcons[0].classList.toggle('disabled', isAtStart);
  });


  sliderContent.addEventListener('scroll', () => {
    const isAtEnd =
      sliderContent.scrollLeft + sliderContent.clientWidth ===
      sliderContent.scrollWidth;
    sliderIcons[1].classList.toggle('disabled', isAtEnd);
  });
});


const minibioContainer = document.querySelector('.minibio-container');
const angleLeft = document.querySelector('.angle-left');
const angleRight = document.querySelector('.angle-right');

angleLeft.addEventListener('click', () => {
  minibioContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

angleRight.addEventListener('click', () => {
  minibioContainer.scrollBy({ left: 300, behavior: 'smooth' });
});


const asideMenuIcon = document.getElementById('aside-menu-icon');
const aside = document.querySelector('.aside');

asideMenuIcon.addEventListener('click', () => {
  aside.classList.toggle('hidden');
});



function toggleTestimonials() {
  var asideHidden = document.getElementById("aside_hidden");
  if (asideHidden.style.display === "block") {
      asideHidden.style.display = "none";
  } else {
      asideHidden.style.display = "block";
  }
}