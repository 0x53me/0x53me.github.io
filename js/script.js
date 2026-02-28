document.addEventListener('DOMContentLoaded', () => {
    const countTarget = document.getElementById('count-target');
    let currentNum = 0;
    const targetNum = 53;
    
    let delay = 250; 

    function updateCount() {
        currentNum++;
        countTarget.innerText = currentNum;

        if (currentNum < targetNum) {
            delay *= 0.95; 
            setTimeout(updateCount, Math.max(delay, 10));
        } else {
            setTimeout(() => {
                showLinks();
            }, 500);
        }
    }

    updateCount();

    function showLinks() {
        const links = document.querySelectorAll('.fade-in');
        links.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('show');
            }, index * 500); 
        });
    }
});