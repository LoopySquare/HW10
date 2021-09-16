const Employee = require("../lib/Employee");

test("Can get name from constructor", () => {
    const name = "Tommy";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("getName() returns name", () => {
    const testValue = "Tommy";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id from constructor", () => {
    const testValue = 1;
    const e = new Employee("Tommy", testValue);
    expect(e.id).toBe(testValue);
});

test("getId() returns id", () => {
    const testValue = 1;
    const e = new Employee("Tommy", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email from constructor", () => {
    const testValue = "test@email.com";
    const e = new Employee("Tommy", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("getEmail() returns email", () => {
    const testValue = "test@email.com";
    const e = new Employee("Tommy", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() returns 'Employee'", () => {
    const testValue = "Employee";
    const e = new Employee("Tommy", 1, "test@email.com");
    expect(e.getRole()).toBe(testValue);
});
