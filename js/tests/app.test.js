const { filterCat } = require("../logic/app");

describe('filterCat Function', () => {
	test('should return => mobile', () => {
		const actual = filterCat("mobile",
		[
			{
				id: 1,
				category: 'mobile',
				price: '520'
			},
			{
				id: 2,
				category: 'car',
				price:'20000'
			}]);
		const expected = [{
			id: 1,
			category: 'mobile',
			price: '520'
		}];
		expect(actual).toEqual(expected);
	});
});
