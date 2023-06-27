const container = document.querySelector('.well');
const pages = document.querySelectorAll('.panelscroll');

let currentPageIndex = 0;
let isScrolling = false;

function scrollToPage(index) {
    if (index < 0 || index >= pages.length || isScrolling) return;

    isScrolling = true;
    container.scrollTo({
        top: pages[index].offsetTop,
        behavior: 'smooth'
    });

    setTimeout(() => {
        isScrolling = false;
    }, 1000);

    // Add active class to the current page
    pages[currentPageIndex].classList.remove('active');
    pages[index].classList.add('active');
    currentPageIndex = index;
}

document.addEventListener('wheel', (event) => {
    const delta = Math.sign(event.deltaY);

    if (delta > 0) {
        scrollToPage(currentPageIndex + 1);
    } else if (delta < 0) {
        scrollToPage(currentPageIndex - 1);
    }
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
