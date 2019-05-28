
/********* Toggle Menu JS *********/
const toggleMenu = document.querySelector('.toggle-menu');

if(toggleMenu) {
  toggleMenu.addEventListener('click', () => {
    const menu = document.querySelector('.header-nav-navegation-menu');
    menu.classList.toggle('active-menu');
  });
}

/********* Toggle Card Menu JS *********/
const toggleCardMenu = document.querySelector('[data-toggle="card-menu"]');
if(toggleCardMenu) {
  toggleCardMenu.addEventListener('click', () => {
    const cardMenu = document.querySelector('[data-target="card-menu"]');
    cardMenu.classList.toggle('active');
  });
}


/********* Seleciona os toggle Dividas frequentes e Downloads *********/
const dataToggles = document.querySelectorAll('[data-toggle-topic]');

if(dataToggles) {
  /********* Toggle questions e downloads JS *********/
  dataToggles.forEach((dataToggle) => {
    const toggleNumber = dataToggle.getAttribute('data-toggle-topic');
    dataToggle.addEventListener('click', () => handleDownloadAndQuestionClick(dataToggle, toggleNumber));
  });

  function handleDownloadAndQuestionClick(dataToggle, toggleNumber) {
    const dataResponse = document.querySelector(`[data-response="${toggleNumber}"]`);
    dataToggle.classList.toggle('active-toggle');
    dataResponse.classList.toggle('active-response');
  }
}

/********* Copy URL to clipboard JS *********/
const buttonShareURL = document.querySelector('.share-url-button');
if(buttonShareURL) {
  buttonShareURL.addEventListener('click', copyURL);

  function copyURL(event) {
    event.preventDefault();
    const url = buttonShareURL.getAttribute('href');
    if(url) {
      const copyUrlPromise = navigator.clipboard.writeText(url);
      copyUrlPromise.then(() => {
        const urlCopied = document.querySelector('.copy-url');
        urlCopied.classList.add('active');
        setTimeout(() => {
          urlCopied.classList.add('desactive');
          setTimeout(() => {
            urlCopied.classList.remove('active', 'desactive');
          }, 1000);
        }, 2000);
        
      }).catch((error) => {
        console.log('Houve um erro ao copiar a URL. Erro: ', error);
      });
    }
  }
}

/********* Dropdown categorias produtos JS *********/
const dropdownCategorias = document.querySelectorAll('[data-dropdown-toggle]');
if(dropdownCategorias) {
  dropdownCategorias.forEach((dropdown) => {
    const toggleNumber = dropdown.getAttribute('data-dropdown-toggle');
    dropdown.addEventListener('click', (e) => showCatedoriaChildren(e, toggleNumber, dropdown));
  })

  function showCatedoriaChildren(event, toggleNumber, dropdown) {
    event.preventDefault();
    const menuDropdown = document.querySelector(`[data-dropdown-response="${toggleNumber}"]`);
    dropdown.classList.toggle('active');
    menuDropdown.classList.toggle('active');
  }
}

/********* Tooltip das cores de cada produto JS *********/
const productColors = document.querySelectorAll('[data-product-color]');
if(productColors) {

  productColors.forEach((productColor) => {
    const colorNumber = productColor.getAttribute('data-product-color');
    productColor.addEventListener('mouseover', () => handleMouseOverColor(colorNumber));
    productColor.addEventListener('mouseleave', () => handleMouseLeaveColor(colorNumber));
  });

  function handleMouseOverColor(colorNumber) {
    const tooltipColor = document.querySelector(`[data-color-tooltip="${colorNumber}"]`);
    const tooltipNumber = tooltipColor.getAttribute('data-color-tooltip');

    if(tooltipNumber === colorNumber) {
      tooltipColor.classList.add('active');
    }
  }

  function handleMouseLeaveColor(colorNumber) {
    const tooltipColor = document.querySelector(`[data-color-tooltip="${colorNumber}"]`);
    const tooltipNumber = tooltipColor.getAttribute('data-color-tooltip');

    if(tooltipNumber === colorNumber) {
      tooltipColor.classList.remove('active');
    }
  }
}

/********* Calcula os metros quadrados da calculadora JS *********/
const calcAltura = document.querySelector('#altura');
const calcLargura = document.querySelector('#largura');
if(calcAltura && calcLargura) {
  calcAltura.addEventListener('keyup', calcMetrosQuadrados);
  calcLargura.addEventListener('keyup', calcMetrosQuadrados);
  
  function calcMetrosQuadrados() {
    const altura = calcAltura.value;
    console.log(altura);
    const largura = calcLargura.value;
    console.log(largura);
    const metrosQuadrados = document.querySelector('#metrosQuadrados');
    metrosQuadrados.value = altura * largura;
  }
}


/********* Slick Sliders JS *********/
$('.container-sliders').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
});


$('.container-products-center').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.container-products-start').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.blog-body').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $('.arrow-prev-blog'),
  nextArrow: $('.arrow-next-blog'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});