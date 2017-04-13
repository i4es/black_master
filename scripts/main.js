;(function(){
	'use strict';
	var userName = prompt('Кто пришёл?');

	if (userName == 'Админ') {
		var password = prompt('Пароль?', '');

		if (password == 'Черный Властелин') {
			console.log('Добро пожаловать!');

		} else if (password == null) {
			console.log('Вход отменён');

		} else {
			console.log('Пароль неверен');

		}
	} else if (userName == null) {
		console.log('Вход отменён');

	} else {
		console.log('Я вас не знаю');

	}

})();