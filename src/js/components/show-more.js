(function () {
	if (document.querySelector('.high-rating__list')) {
		function e() {
			let e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8,
				s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
				t = e,
				i = s,
				n = Array.from(document.querySelector('.high-rating__list').children),
				a = document.querySelector('.js-show-btn');
			function l(e) {
				n.forEach(function (e) {
					e.classList.remove('is-visible');
				}),
					n.splice(0, e).forEach(function (e) {
						e.classList.add('is-visible');
					}),
					(a.style.display = 'block'),
					n.length || (a.style.display = 'none');
			}
			l(t),
				a.addEventListener('click', function () {
					l(i);
				});
		}
		function s() {
			window.matchMedia('(min-width: 1345px)').matches
				? e()
				: window.matchMedia('(min-width: 992px)').matches
				? e(6, 3)
				: window.matchMedia('(min-width: 320px)').matches && e(6, 2);
		}
		window.addEventListener('DOMContentLoaded', function () {
			s();
		}),
			window.addEventListener('resize', function () {
				s();
			});
	}
})();
