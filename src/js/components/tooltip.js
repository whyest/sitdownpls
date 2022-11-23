import { createPopper } from '@popperjs/core';

const el = document.querySelector('.tooltip__btn');
const tooltip = document.querySelector('.tooltip__txt');

createPopper(el, tooltip, {
	placement: 'top',
	modifiers: [
		{
			name: 'arrow',
			options: {
				padding: 5, // 5px from the edges of the popper
			},
		},
		{
			name: 'offset',
			options: {
				offset: [0, 5],
			},
		},
	],
});
