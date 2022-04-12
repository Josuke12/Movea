const modalWindow = document.querySelector('.modal');
const buttonsPlay = document.querySelectorAll('.button-play');


buttonsPlay.forEach((item) => {
	item.addEventListener('click', () => {
		modalWindow.classList.remove('no-active');
	});
});

modalWindow.addEventListener('click', () => {
	modalWindow.classList.add('no-active');
});