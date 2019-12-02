const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



//Task 1 - selectors

let navigationText = document.querySelectorAll('nav a');
let headerText = document.querySelector('h1');
let circleImg = document.getElementById("cta-img");
let btnText = document.querySelector(".cta-text button");

let featuresH4 = document.querySelector(".top-content h4");
let featuresText = document.querySelector(".top-content p");
let aboutH4 = document.querySelector(".text-content:nth-child(2) h4");
let aboutText = document.querySelector(".text-content:nth-child(2) p");

let codeImg = document.getElementById("middle-img");

let servicesH4 = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
let productH4 = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
let visionH4 = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
let servicesText = document.querySelector(".bottom-content .text-content:nth-child(1) p");
let productText = document.querySelector(".bottom-content .text-content:nth-child(2) p");
let visionText = document.querySelector(".bottom-content .text-content:nth-child(3) p");

let contactH4 = document.querySelector(".contact h4");
let address = document.querySelector(".contact p");
let phoneNumber = document.querySelector(".contact p:nth-child(3)");
let email = document.querySelector(".contact p:nth-child(4)");

let footerText = document.querySelector("footer p");

//Task 2 - Update HTML

navigationText[0].innerText = siteContent["nav"]['nav-item-1'];
navigationText[1].innerText = siteContent["nav"]['nav-item-2'];
navigationText[2].innerText = siteContent["nav"]['nav-item-3'];
navigationText[3].innerText = siteContent["nav"]['nav-item-4'];
navigationText[4].innerText = siteContent["nav"]['nav-item-5'];
navigationText[5].innerText = siteContent["nav"]['nav-item-6'];

headerText.innerHTML = siteContent["cta"]["h1"];
circleImg.setAttribute('src', siteContent["cta"]["img-src"]);
codeImg.setAttribute('src', siteContent["main-content"]['middle-img-src'])
btnText.innerText = siteContent["cta"]["button"];

featuresH4.innerText = siteContent["main-content"]["features-h4"];
featuresText.innerText = siteContent["main-content"]["features-content"]
aboutH4.innerText = siteContent["main-content"]["about-h4"];
aboutText.innerText = siteContent["main-content"]["about-content"]
servicesH4.innerText = siteContent["main-content"]["services-h4"];
servicesText.innerText = siteContent["main-content"]["services-content"]
productH4.innerText = siteContent["main-content"]["product-h4"];
productText.innerText = siteContent["main-content"]["product-content"]
visionH4.innerText = siteContent["main-content"]["vision-h4"];
visionText.innerText = siteContent["main-content"]["vision-content"];

contactH4.innerText = siteContent["contact"]["contact-h4"];
address.innerHTML = siteContent["contact"]["address"];
phoneNumber.innerText = siteContent["contact"]["phone"];
email.innerText = siteContent["contact"]["email"];

footerText.innerText = siteContent["footer"]["copyright"];

//Task 3 - Add new content

navigationText.forEach(element => {
  element.style.color = 'green';
})

const parent = document.querySelector('nav');
let firstNav = document.createElement('a');
let lastNav = document.createElement('a');
firstNav.textContent = "Home";
lastNav.textContent = "Info";
parent.prepend(firstNav);
parent.appendChild(lastNav);
firstNav.style.color = 'green';
lastNav.style.color = 'green';

//Stretch - added additional styles to H4's

featuresH4.style.color = 'red';
aboutH4.style.color = 'blue';
servicesH4.style.color = 'green';
productH4.style.color = 'orange';
visionH4.style.color = 'purple';
contactH4.style.color = 'indigo';





