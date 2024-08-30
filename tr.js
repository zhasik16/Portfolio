const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
	menuIcon.classList.toggle('fa-bars');
	navbar.classList.toggle('active');
}

