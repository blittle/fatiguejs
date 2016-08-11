import fixMe from './fatiguer.js';

describe('fatigue', function() {
	beforeEach(function() {
		window.document.body.innerHTML = '<react-crap />';
	});

	it('should fix me', function() {
		fixMe();
		expect(window.document.body.innerHTML).toBe('');
	});

	it('should fix my custom fatigued element', function() {
		const el = { innerHTML: '<ng2-crap />' };

		fixMe(el);
		expect(el.innerHTML).toBe('');
	});
});
