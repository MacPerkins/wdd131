document.addEventListener('DOMContentLoaded', () => {
    const reviewCountElement = document.getElementById('review-count');
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCountElement.textContent = reviewCount;
});