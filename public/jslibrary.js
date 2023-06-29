const container = document.querySelector('.well');
const pages = document.querySelectorAll('.panelscroll');

let currentPageIndex = 0;
let isScrolling = false;

function scrollToPage(index) {
    if (index < 0 || index >= pages.length || isScrolling) return;

    isScrolling = true;
    /* container.scrollTo({
         top: pages[index].offsetTop,
         behavior: 'smooth'
     });*/

    setTimeout(() => {
        isScrolling = false;
    }, 100);

    // Add active class to the current page
    pages[currentPageIndex].classList.remove('active');
    pages[index].classList.add('active');
    currentPageIndex = index;
}

function handleScroll(delta) {
    if (delta > 0) {
        scrollToPage(currentPageIndex + 1);
    } else if (delta < 0) {
        scrollToPage(currentPageIndex - 1);
    }
}

function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    event.preventDefault();
    const touchEndY = event.touches[0].clientY;
    const deltaY = touchEndY - touchStartY;

    handleScroll(Math.sign(deltaY));
}

document.addEventListener('wheel', (event) => {
    const delta = Math.sign(event.deltaY);
    handleScroll(delta);
});

container.addEventListener('scroll', () => {
    const currentPage = Math.round(container.scrollTop / window.innerHeight);

    if (currentPage !== currentPageIndex) {
        // Remove active class from the previous page
        pages[currentPageIndex].classList.remove('active');

        // Add active class to the current page
        pages[currentPage].classList.add('active');
        currentPageIndex = currentPage;
    }
});

let touchStartY = 0;

container.addEventListener('touchstart', handleTouchStart);
container.addEventListener('touchmove', handleTouchMove);
