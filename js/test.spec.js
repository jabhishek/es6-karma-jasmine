
describe("test", function() {
	it("should be defined", function() {
		let myClass = new MyClass("xyz");
		expect(myClass.name).toEqual("xyz");

		myClass.name = "zzz";
		expect(myClass.name).toEqual("zzz");
	})
});
