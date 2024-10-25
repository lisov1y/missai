// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const selectWinnerBtn = document.querySelector('.select-winner-btn');
    const contestantsSection = document.querySelector('.contestants');
    const selectionSection = document.querySelector('.selection');
    const winnerSection = document.querySelector('.winner');

    // Event listener for the "Select Winner" button
    selectWinnerBtn.addEventListener('click', () => {
        // Hide the button and contestants section with animation
        gsap.to(selectWinnerBtn, { duration: 0.5, opacity: 0, onComplete: () => {
            selectWinnerBtn.classList.add('d-none');
        }});
        
        gsap.to(contestantsSection, { duration: 0.5, opacity: 0, onComplete: () => {
            contestantsSection.classList.add('d-none');
        }});

        // Show the selection section with animation
        selectionSection.classList.remove('d-none');
        gsap.fromTo(selectionSection, { opacity: 0 }, { duration: 0.5, opacity: 1 });

        // Set a timeout to hide the selection section after 5 seconds and show the winner section
        setTimeout(() => {
            gsap.to(selectionSection, { duration: 0.5, opacity: 0, onComplete: () => {
                selectionSection.classList.add('d-none');
                // Show winner section with animation
                winnerSection.classList.remove('d-none');
                gsap.fromTo(winnerSection, { opacity: 0 }, { duration: 0.5, opacity: 1 });
            }});
        }, 5000);
    });
});
