const isValidUsername = require('./valid');

// Test cases
test('valid usernames are identified correctly', () => {
    expect(isValidUsername("john_doe123")).toBe(true);
    expect(isValidUsername("alice-123")).toBe(true);
    expect(isValidUsername("user")).toBe(true);
});

test('invalid usernames are identified correctly', () => {
    expect(isValidUsername("avery_long_username")).toBe(false);
    expect(isValidUsername("luther")).toBe(false);
});
