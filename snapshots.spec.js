const user = {
    name: 'John Doe',
    age: 33,
    job: 'Driver'
};

test('user matches', () => {
   expect(user).toMatchSnapshot()
});
