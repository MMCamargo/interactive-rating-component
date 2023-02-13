const ratePage = document.getElementById('ratePage');
const rate1 = document.getElementById('rate1');
const rate2 = document.getElementById('rate2');
const rate3 = document.getElementById('rate3');
const rate4 = document.getElementById('rate4');
const rate5 = document.getElementById('rate5');
const submitBtn = document.getElementById('submitBtn');

const rates = [rate1, rate2, rate3, rate4, rate5];

rates.forEach((rate) => {
	rate.addEventListener('click', (e) => selectOption(e));
});

submitBtn.addEventListener('click', () => submitRate());

function selectOption(e) {
	resetOptions();

	e.target.className = 'card__rate-option--selected';
}

function resetOptions() {
	rates.forEach((rate) => {
		rate.className = 'card__rate-option';
	});
}

function submitRate() {
	ratePage.style.display = 'none';
}
