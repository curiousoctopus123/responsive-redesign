let mobileNavVisible = false;

function toggleMobileNav() {
  const mobileNavElement = document.getElementById("mobile-nav");
  if (mobileNavVisible) {
    mobileNavElement.style.display = 'none';
  } else {
    mobileNavElement.style.display = 'flex';
  }
  mobileNavVisible = !mobileNavVisible;
}

function scrollToSelection() {
  document.getElementById("our-selection").scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })
}