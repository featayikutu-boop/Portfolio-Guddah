document.querySelectorAll('[data-year]').forEach((element) => {
	element.textContent = new Date().getFullYear();
});

if (window.lucide) {
	window.lucide.createIcons();
}
