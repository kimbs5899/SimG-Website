// document.addEventListener('DOMContentLoaded', function () {
//     // Slide Property
//     const newsCarousel = document.querySelector('.news-carousel');
//     const newsItems = document.querySelectorAll('.news-item');

//     const clientCarousel = document.querySelector('.client-carousel');
//     const clientItems = document.querySelectorAll('.client-logo');

//     const newsPrevButton = document.getElementById('news-prev-button');
//     const newsNextButton = document.getElementById('news-next-button');

//     const clientPrevButton = document.getElementById('client-prev-button');
//     const clientNextButton = document.getElementById('client-next-button');

//     let currentIndex = 0;
//     const visibleNewsItemCount = 4;
//     const visibleClientItemCount = 5;
//     const updateCarousel = () => {
//         const width = window.innerWidth;
//         if (width >= 1400) {
//             visibleNewsItemCount = 4;
//             visibleClientItemCount = 5;
//         } else if (width > 600) {
//             visibleNewsItemCount = 2;
//             visibleClientItemCount = 3;
//         } else {
//             visibleNewsItemCount = 1;
//             visibleClientItemCount = 1;
//         }

//         const newsItemWidth = newsItems[0].offsetWidth + parseInt(getComputedStyle(newsItems[0]).marginRight);
//         const newsCount = newsItems.length;

//         const clientItemWidth = clientItems[0].offsetWidth + parseInt(getComputedStyle(clientItems[0]).marginRight);
//         const clientCount = clientItems.length;

//         newsCarousel.style.width = (newsItemWidth * newsCount) + "px";
//         clientCarousel.style.width = (clientItemWidth * clientCount) + "px";

//         if (currentIndex >= newsCount - visibleNewsItemCount) {
//             currentIndex = Math.max(0, newsCount - visibleNewsItemCount);
//         }

//         if (currentIndex >= clientCount - visibleClientItemCount) {
//             currentIndex = Match.max(0, clientCount - visibleClientItemCount);
//         }

//         newsCarousel.style.transform = "translateX(" + -newsItemWidth * currentIndex + "px)";
//         clientCarousel.style.transform = "translateX(" + -clientItemWidth * currentIndex + "px";
//     };

//     const gotoNewsSlide = (index) => {
//         const newsItemWidth = newsItems[0].offsetWidth + parseInt(getComputedStyle(newsItems[0]).marginRight);
//         newsCarousel.style.transition = "all 400ms";
//         newsCarousel.style.transform = "translateX(" + -newsItemWidth * index + "px)";
//         currentIndex = index;
//     };

//     const gotoClientSlide = (index) => {
//         const clientItemWidth = clientItems[0].offsetWidth + parseInt(getComputedStyle(clientItems[0]).marginRight);
//         clientCarousel.style.transition = "all 400ms";
//         clientCarousel.style.transform = "translateX(" + -clientItemWidth * index + "px)";
//         currentIndex = index;
//     }

//     // Menu Property
//     const menuToggleButton = document.getElementById('menu-toggle-button');
//     const menuCloseButton = document.getElementById('menu-close-button');
//     const menuProductButton = document.getElementById('product-list-button');
//     const menuProductBackButton = document.getElementById('product-back-button')

//     // Product Property
//     const heavyEquipmentButton = document.getElementById('heavy-equipment-button');
//     const heavyEquipmentBackButton = document.getElementById('heavy-equipment-back-button');

//     const safetyTrainingAccidentExperienceButton = document.getElementById('safety-training-accident-experience-button');
//     const safetyTrainingAccidentExperienceBackButton = document.getElementById('safety-training-accident-experience-back-button');

//     const manufacturingButton = document.getElementById('manufacturing-button');
//     const manufacturingBackButton = document.getElementById('manufacturing-back-button');

//     const shipbuildingIndustryButton = document.getElementById('shipbuilding-industry-button');
//     const shipbuildingIndustryBackButton = document.getElementById('shipbuilding-industry-back-button');

//     const cultureTourismButton = document.getElementById('culture-tourism-button');
//     const cultureTourismBackButton = document.getElementById('culture-tourism-back-button');

//     // Default Product Menu
//     menuToggleButton.addEventListener("click", () => {
//         toggleMenu()
//     });

//     menuCloseButton.addEventListener("click", () => {
//         toggleMenu()
//     });

//     menuProductButton.addEventListener("click", () => {
//         tapProductMenu()
//     });

//     menuProductBackButton.addEventListener("click", () => {
//         tapProductBack()
//     });

//     function tapProductBack() {
//         const productMenu = document.querySelector('.product-list-menu')
//         productMenu.classList.remove('active');
//     }

//     function tapProductMenu() {
//         const productMenu = document.querySelector('.product-list-menu')
//         productMenu.classList.add('active');
//     }

//     function tapBackMenu() {
//         const backMenuButton = document.querySelector('.product-list-menu');
//         backMenuButton.classList.toggle('active');
//     }

//     function toggleMenu() {
//         const sideNavMenu = document.querySelector('.side-nav-menu');
//         sideNavMenu.classList.toggle('active');
//     }

//     // Heavy Equipment Menu
//     heavyEquipmentButton.addEventListener("click", () => {
//         tapHeavyEquipmentMenu()
//     });

//     heavyEquipmentBackButton.addEventListener("click", () => {
//         tapHeavyEquipmentBack()
//     });

//     function tapHeavyEquipmentBack() {
//         const product = document.querySelector('.heavy-equipment-menu')
//         product.classList.remove('active');
//     }

//     function tapHeavyEquipmentMenu() {
//         const product = document.querySelector('.heavy-equipment-menu')
//         product.classList.add('active');
//     }

//     // Safety Training Accident Experience Menu
//     safetyTrainingAccidentExperienceButton.addEventListener("click", () => {
//         tapSafetyTrainingAccidentExperienceMenu()
//     });

//     safetyTrainingAccidentExperienceBackButton.addEventListener("click", () => {
//         tapSafetyTrainingAccidentExperienceBack()
//     });

//     function tapSafetyTrainingAccidentExperienceBack() {
//         const product = document.querySelector('.safety-training-accident-experience-menu')
//         product.classList.remove('active');
//     }

//     function tapSafetyTrainingAccidentExperienceMenu() {
//         const product = document.querySelector('.safety-training-accident-experience-menu')
//         product.classList.add('active');
//     }

//     // Manufacturing Menu
//     manufacturingButton.addEventListener("click", () => {
//         tapManufacturingMenu()
//     });

//     manufacturingBackButton.addEventListener("click", () => {
//         tapManufacturingBack()
//     });

//     function tapManufacturingBack() {
//         const product = document.querySelector('.manufacturing-menu')
//         product.classList.remove('active');
//     }

//     function tapManufacturingMenu() {
//         const product = document.querySelector('.manufacturing-menu')
//         product.classList.add('active');
//     }

//     // Shipbuilding Industry Menu
//     shipbuildingIndustryButton.addEventListener("click", () => {
//         tapShipbuildingIndustryMenu()
//     });

//     shipbuildingIndustryBackButton.addEventListener("click", () => {
//         tapShipbuildingIndustryBack()
//     });

//     function tapShipbuildingIndustryBack() {
//         const product = document.querySelector('.shipbuilding-industry-menu')
//         product.classList.remove('active');
//     }

//     function tapShipbuildingIndustryMenu() {
//         const product = document.querySelector('.shipbuilding-industry-menu')
//         product.classList.add('active');
//     }

//     // Culture Tourism Menu
//     cultureTourismButton.addEventListener("click", () => {
//         tapCultureTourismMenu()
//     });

//     cultureTourismBackButton.addEventListener("click", () => {
//         tapCultureTourismBack()
//     });

//     function tapCultureTourismBack() {
//         const product = document.querySelector('.culture-tourism-menu')
//         product.classList.remove('active');
//     }

//     function tapCultureTourismMenu() {
//         const product = document.querySelector('.culture-tourism-menu')
//         product.classList.add('active');
//     }

//     // Slide Functioin
//     newsPrevButton.addEventListener("click", () => {
//         if (currentIndex > 0) {
//             currentIndex--;
//         } else {
//             currentIndex = Math.max(0, newsItems.length - visibleNewsItemCount);
//         }
//         gotoNewsSlide(currentIndex);
//     });

//     newsNextButton.addEventListener("click", () => {
//         if (currentIndex < newsItems.length - visibleNewsItemCount) {
//             currentIndex++;
//         } else {
//             currentIndex = 0;
//         }
//         gotoNewsSlide(currentIndex);
//     });

//     clientPrevButton.addEventListener("click", () => {
//         if (currentIndex > 0) {
//             currentIndex--;
//         } else {
//             currentIndex = Math.max(0, clientItems.length - visibleClientItemCount);
//         }
//         gotoClientSlide(currentIndex);
//     });

//     clientNextButton.addEventListener("click", () => {
//         if (currentIndex < clientItems.length - visibleClientItemCount) {
//             currentIndex++;
//         } else {
//             currentIndex = 0;
//         }
//         gotoClientSlide(currentIndex);
//     });

//     window.addEventListener('resize', updateCarousel);

//     updateCarousel();
// });
document.addEventListener('DOMContentLoaded', function () {
    // Slide Property
    const newsCarousel = document.querySelector('.news-carousel');
    const newsItems = document.querySelectorAll('.news-item');
    const clientCarousel = document.querySelector('.client-carousel');
    const clientItems = document.querySelectorAll('.client-logo');

    const newsPrevButton = document.getElementById('news-prev-button');
    const newsNextButton = document.getElementById('news-next-button');
    const clientPrevButton = document.getElementById('client-prev-button');
    const clientNextButton = document.getElementById('client-next-button');

    let currentIndex = 0;
    let visibleNewsItemCount = 4;
    let visibleClientItemCount = 5;

    const updateCarousel = () => {
        const width = window.innerWidth;
        if (width >= 1400) {
            visibleNewsItemCount = 4;
            visibleClientItemCount = 5;
        } else if (width > 600) {
            visibleNewsItemCount = 2;
            visibleClientItemCount = 3;
        } else {
            visibleNewsItemCount = 1;
            visibleClientItemCount = 1;
        }

        if (newsItems.length > 0) {
            const newsItemWidth = newsItems[0].offsetWidth + parseInt(getComputedStyle(newsItems[0]).marginRight);
            newsCarousel.style.width = (newsItemWidth * newsItems.length) + "px";

            if (currentIndex >= newsItems.length - visibleNewsItemCount) {
                currentIndex = Math.max(0, newsItems.length - visibleNewsItemCount);
            }

            newsCarousel.style.transform = "translateX(" + -newsItemWidth * currentIndex + "px)";
        }

        if (clientItems.length > 0) {
            const clientItemWidth = clientItems[0].offsetWidth + parseInt(getComputedStyle(clientItems[0]).marginRight);
            clientCarousel.style.width = (clientItemWidth * clientItems.length) + "px";

            if (currentIndex >= clientItems.length - visibleClientItemCount) {
                currentIndex = Math.max(0, clientItems.length - visibleClientItemCount);
            }

            clientCarousel.style.transform = "translateX(" + -clientItemWidth * currentIndex + "px)";
        }
    };

    const gotoNewsSlide = (index) => {
        if (newsItems.length > 0) {
            const newsItemWidth = newsItems[0].offsetWidth + parseInt(getComputedStyle(newsItems[0]).marginRight);
            newsCarousel.style.transition = "all 400ms";
            newsCarousel.style.transform = "translateX(" + -newsItemWidth * index + "px)";
            currentIndex = index;
        }
    };

    const gotoClientSlide = (index) => {
        if (clientItems.length > 0) {
            const clientItemWidth = clientItems[0].offsetWidth + parseInt(getComputedStyle(clientItems[0]).marginRight);
            clientCarousel.style.transition = "all 400ms";
            clientCarousel.style.transform = "translateX(" + -clientItemWidth * index + "px)";
            currentIndex = index;
        }
    };

    // Menu Property
    const menuToggleButton = document.getElementById('menu-toggle-button');
    const menuCloseButton = document.getElementById('menu-close-button');
    const menuProductButton = document.getElementById('product-list-button');
    const menuProductBackButton = document.getElementById('product-back-button');

    if (menuToggleButton) menuToggleButton.addEventListener("click", toggleMenu);
    if (menuCloseButton) menuCloseButton.addEventListener("click", toggleMenu);
    if (menuProductButton) menuProductButton.addEventListener("click", tapProductMenu);
    if (menuProductBackButton) menuProductBackButton.addEventListener("click", tapProductBack);

    function tapProductBack() {
        const productMenu = document.querySelector('.product-list-menu');
        if (productMenu) productMenu.classList.remove('active');
    }

    function tapProductMenu() {
        const productMenu = document.querySelector('.product-list-menu');
        if (productMenu) productMenu.classList.add('active');
    }

    function toggleMenu() {
        const sideNavMenu = document.querySelector('.side-nav-menu');
        if (sideNavMenu) sideNavMenu.classList.toggle('active');
    }

    // Heavy Equipment Menu
    const heavyEquipmentButton = document.getElementById('heavy-equipment-button');
    const heavyEquipmentBackButton = document.getElementById('heavy-equipment-back-button');
    if (heavyEquipmentButton) heavyEquipmentButton.addEventListener("click", tapHeavyEquipmentMenu);
    if (heavyEquipmentBackButton) heavyEquipmentBackButton.addEventListener("click", tapHeavyEquipmentBack);

    function tapHeavyEquipmentBack() {
        const product = document.querySelector('.heavy-equipment-menu');
        if (product) product.classList.remove('active');
    }

    function tapHeavyEquipmentMenu() {
        const product = document.querySelector('.heavy-equipment-menu');
        if (product) product.classList.add('active');
    }

    // Safety Training Accident Experience Menu
    const safetyTrainingAccidentExperienceButton = document.getElementById('safety-training-accident-experience-button');
    const safetyTrainingAccidentExperienceBackButton = document.getElementById('safety-training-accident-experience-back-button');
    if (safetyTrainingAccidentExperienceButton) safetyTrainingAccidentExperienceButton.addEventListener("click", tapSafetyTrainingAccidentExperienceMenu);
    if (safetyTrainingAccidentExperienceBackButton) safetyTrainingAccidentExperienceBackButton.addEventListener("click", tapSafetyTrainingAccidentExperienceBack);

    function tapSafetyTrainingAccidentExperienceBack() {
        const product = document.querySelector('.safety-training-accident-experience-menu');
        if (product) product.classList.remove('active');
    }

    function tapSafetyTrainingAccidentExperienceMenu() {
        const product = document.querySelector('.safety-training-accident-experience-menu');
        if (product) product.classList.add('active');
    }

    // Manufacturing Menu
    const manufacturingButton = document.getElementById('manufacturing-button');
    const manufacturingBackButton = document.getElementById('manufacturing-back-button');
    if (manufacturingButton) manufacturingButton.addEventListener("click", tapManufacturingMenu);
    if (manufacturingBackButton) manufacturingBackButton.addEventListener("click", tapManufacturingBack);

    function tapManufacturingBack() {
        const product = document.querySelector('.manufacturing-menu');
        if (product) product.classList.remove('active');
    }

    function tapManufacturingMenu() {
        const product = document.querySelector('.manufacturing-menu');
        if (product) product.classList.add('active');
    }

    // Shipbuilding Industry Menu
    const shipbuildingIndustryButton = document.getElementById('shipbuilding-industry-button');
    const shipbuildingIndustryBackButton = document.getElementById('shipbuilding-industry-back-button');
    if (shipbuildingIndustryButton) shipbuildingIndustryButton.addEventListener("click", tapShipbuildingIndustryMenu);
    if (shipbuildingIndustryBackButton) shipbuildingIndustryBackButton.addEventListener("click", tapShipbuildingIndustryBack);

    function tapShipbuildingIndustryBack() {
        const product = document.querySelector('.shipbuilding-industry-menu');
        if (product) product.classList.remove('active');
    }

    function tapShipbuildingIndustryMenu() {
        const product = document.querySelector('.shipbuilding-industry-menu');
        if (product) product.classList.add('active');
    }

    // Culture Tourism Menu
    const cultureTourismButton = document.getElementById('culture-tourism-button');
    const cultureTourismBackButton = document.getElementById('culture-tourism-back-button');
    if (cultureTourismButton) cultureTourismButton.addEventListener("click", tapCultureTourismMenu);
    if (cultureTourismBackButton) cultureTourismBackButton.addEventListener("click", tapCultureTourismBack);

    function tapCultureTourismBack() {
        const product = document.querySelector('.culture-tourism-menu');
        if (product) product.classList.remove('active');
    }

    function tapCultureTourismMenu() {
        const product = document.querySelector('.culture-tourism-menu');
        if (product) product.classList.add('active');
    }

    // Slide Function
    if (newsPrevButton) newsPrevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = Math.max(0, newsItems.length - visibleNewsItemCount);
        }
        gotoNewsSlide(currentIndex);
    });

    if (newsNextButton) newsNextButton.addEventListener("click", () => {
        if (currentIndex < newsItems.length - visibleNewsItemCount) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        gotoNewsSlide(currentIndex);
    });

    if (clientPrevButton) clientPrevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = Math.max(0, clientItems.length - visibleClientItemCount);
        }
        gotoClientSlide(currentIndex);
    });

    if (clientNextButton) clientNextButton.addEventListener("click", () => {
        if (currentIndex < clientItems.length - visibleClientItemCount) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        gotoClientSlide(currentIndex);
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel();
});