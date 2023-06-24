// Add this script if you want to toggle the mobile menu
const toggleButton = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});


document.body.addEventListener("mousemove", function(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const elements = document.querySelectorAll(".hover-effect");

  for (let i = 0; i < elements.length; i++) {
      const rect = elements[i].getBoundingClientRect();
      const elemX = rect.left + rect.width / 2;
      const elemY = rect.top + rect.height / 2;

      const deltaX = (elemX - mouseX) / 10;
      const deltaY = (elemY - mouseY) / 10;

      elements[i].style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }
});
