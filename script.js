/**
 * Tab/Page view switching router
 */
function switchPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page-view');
  pages.forEach(page => {
    page.classList.remove('active-page');
  });

  // Display target page
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active-page');
  }

  // Update navigation button active state
  const navButtons = document.querySelectorAll('.nav-link');
  navButtons.forEach(btn => {
    btn.classList.remove('active');
    const label = btn.innerText.toLowerCase();
    if (label.includes(pageId)) {
      btn.classList.add('active');
    }
  });

  // Close mobile nav menu if open
  const navLinks = document.getElementById('nav-links');
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }

  // Scroll smoothly back to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Mobile navigation toggle
 */
document.getElementById('mobile-toggle').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});

/**
 * Set Dynamic Copyright Year
 */
document.getElementById('current-year').textContent = new Date().getFullYear();

/**
 * Mock Form Submission Handling
 * Replace this logic with Formspree, Formkeep, or an AWS Lambda endpoint
 */
function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const name = document.getElementById('fullName').value;

  // Render mock confirmation
  feedback.classList.remove('hidden');
  feedback.innerHTML = `
    <strong>Thank you, ${name}.</strong><br>
    Your deal scoping request has been received. Our lead CPA will review the details and reach out within 4 business hours.
  `;

  form.reset();
}