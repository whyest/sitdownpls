const select = () => {
	const selects = document.querySelectorAll('.select');
	selects.forEach(el => {
		new Choices(el, {
			shouldSort: false,
			position: 'bottom',
			searchEnabled: false,
			allowHTML: false,
		});
	});

	// let ariaLabel = selects.getAttribute('aria-label');
	// selects.closest('.choices').setAttribute('aria-label', ariaLabel);
};

select();
