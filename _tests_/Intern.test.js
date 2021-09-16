const Intern = require("../lib/Intern");

test("Can get school from constructor", () => {
    const testValue = "Cornell";
    const e = new Intern("Tommy", 1, "test@email.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getSchool() returns school", () => {
    const testValue = "Cornell";
    const e = new Intern("Tommy", 1, "test@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

test("getRole() returns 'Intern'", () => {
    const testValue = "Intern";
    const e = new Intern("Tommy", 1, "test@email.com", "Cornell");
    expect(e.getRole()).toBe(testValue);
});