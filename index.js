// Function to click the divs
function clickDivs(divs) {
    let index = 0;
    const clickNext = () => {
        if (index < divs.length) {
            divs[index].click();
            index++;
            setTimeout(clickNext, 200); // Click the next div after 200ms
        }
    };
    clickNext();
}

// Find and click initial divs
const initialDivs = document.querySelectorAll('div[aria-label="Unblock"]');
clickDivs(initialDivs);

// Create a MutationObserver to detect changes in the DOM
const observer = new MutationObserver(mutationsList => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const newDivs = document.querySelectorAll('div[aria-label="Unblock"]');
            if (newDivs.length > initialDivs.length) {
                observer.disconnect(); // Stop observing to avoid multiple observers
                setTimeout(() => {
                    clickDivs(newDivs);
                }, 1000); // Wait for 1 second before clicking new divs
            }
        }
    }
});

// Start observing changes in the DOM
observer.observe(document.body, { childList: true, subtree: true });
