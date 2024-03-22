// need to load after application in the index.html
//test taxes for high income brackets
describe("calculate high tax bracket", function () {
  it("should calculate the high tax bracket", function () {
    // expect(someValue).someMatcher(...)
    //toEqual is a matcher and there are many more of them
    expect(calculateTaxes(50000)).toEqual(12500);
    //expect 50000 * 0.25 to equate to 12500
    expect(calculateTaxes(100000)).toEqual(25000);
    //expect 100000 * 0.25 to equate to 25000
  });
});

describe("Calculate low tax bracket", function () {
  it("should calculate the high tax bracket", function () {
    // expect(someValue).someMatcher(...)
    //toEqual is a matcher and there are many more of them
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(100000)).toEqual(25000);

    //   expect("hello").toEqual("good-bye");
    //failure shows which it(first argument) went wrong + expected hello to equal goodbye ALso shoes red 1 failure
  });
});

it("should calculate the low tax bracket", function () {
  expect(calculateTaxes(10000)).toEqual(1500);
  expect(calculateTaxes(1000)).toEqual(150);
  //   edge case
  expect(calculateTaxes(0)).toEqual(0);
});

describe("Remove Duplicates", function () {
  it("should remove duplicates from an array", function () {
    //   expect(removeDupes([1, 1, 2, 2, 3, 4])).toBe([1, 2, 3, 4]);
    //toBe is same as === which requires the references to be the same vs use of matcher toEqual
    expect(removeDupes([1, 1, 2, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  }); //expect function to not obtain duplicate array

  it("should remove duplicates from a string", function () {
    expect(removeCopyCat("hello")).toBe("helo");
    expect(removeCopyCat("hello")).toBeInstanceOf(String); //expect the actual to be an instance of the expected class
    //   expect(removeCopyCat("hello")).toBeInstanceOf(Number); //expect the actual to be an instance of the expected number which triggered a failure
  }); //expect functionto not obtain duplicate string

  it("should remove value from array", function () {
    expect(remove([1, 2, 3, 4, 5, 6], 6)).not.toContain(6);
  }); //expect the return function to not obtain 6
});

// it("Should reject input if no value input", function () {
//   expect(() => enterNum("Hi").toThrowError());
//   expect(() => enterNum().toThrowError());
//   expect(() => enterNum(true).toThrowError());
// });

//test function
// describe a group of related test in the same namespace
describe("subform() test", () => {
  it("should input val to usernames array", () => {
    nameInput.value = "Jarib";
    subForm();
    // expect(userName.length).toBe(1); //failure but will show in Jasmine js:59:29 the error
    expect(userNames.length).toBe(1);
    expect(userNames).toContain("Jarib");
  });
});
afterEach(function () {
  nameInput.value = "";
  userNames = [];
});
