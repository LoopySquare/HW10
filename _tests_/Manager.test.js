const Manager = require("../lib/Manager");

test("Can get office number from constructor argument", () => {
    const testValue = 204;
    const e = new Manager("Tommy", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getOffice() returns office number", () => {
    const testValue = 204;
    const e = new Manager("Tommy", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

test("getRole() returns 'Manager'", () => {
    const testValue = "Manager";
    const e = new Manager("Tommy", 1, "test@test.com", 204);
    expect(e.getRole()).toBe(testValue);
});