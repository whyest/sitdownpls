import { validateForms } from '../functions/validate-forms';

const rules = [
	{
		ruleSelector: '.form__input--name',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните имя!',
			},
		],
	},
	{
		ruleSelector: '.form__input--phone',
		tel: true,
		telError: 'Введите корректный телефон',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните телефон!',
			},
		],
	},
	{
		ruleSelector: '.form__input--email',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Недопустимый формат',
			},
			{
				rule: 'email',
				value: true,
				errorMessage: 'Недопустимый формат',
			},
		],
	},
];

const afterForm = () => {
	console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.contacts__form', rules, afterForm);
