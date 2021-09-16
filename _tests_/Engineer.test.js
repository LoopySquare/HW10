const Engineer = require("../lib/Engineer");

test("Can get Github username from constructor", () => {
    const testValue = "LoppySquare";
    const e = new Engineer("Tommy", 1, "test@email.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getGithub() returns username", () => {
    const testValue = "LoppySquare";
    const e = new Engineer("Tommy", 1, "test@email.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

test("getRole() returns 'Engineer'", () => {
    const testValue = "Engineer";
    const e = new Engineer("Tommy", 1, "test@email.com", "LoppySquare");
    expect(e.getRole()).toBe(testValue);
});