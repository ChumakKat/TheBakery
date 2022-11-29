/* ПОИСК ПО КАРТОЧКАМ ТОВАРОВ*/
$(function() {
	let sBtn = $("#s-btn");
	let sBox = $(".search__box");
	let sTitle = $(".search__title");

	sBtn.on("click", function(ev) {
        ev.preventDefault();

		sBox.toggleClass("active");
		sTitle.toggleClass("active");
	});
});

document.querySelector('#elastic').oninput = function() {
	let val = this.value.trim();
	let elasticItems = document.querySelectorAll('.range__item');
	let subtitleItems = document.querySelectorAll('.range__subtitle');

	if(val != ''){
		subtitleItems.forEach(function(sub) {
			sub.classList.add('hide');
		});
		
		elasticItems.forEach(function(elem){
			if(elem.innerText.search(RegExp(val,"gi")) == -1) {
				elem.classList.add('hide');
			} else {
				elem.classList.remove('hide');
			}
		});
	} else {

		subtitleItems.forEach(function(sub) {
			sub.classList.remove('hide');
		});

		elasticItems.forEach(function(elem){
			elem.classList.remove('hide');
		});
	}
}