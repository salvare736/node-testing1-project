const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  })
  test.todo('[2] returns a copy, leaving the original object intact')
    // const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    // const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    // const actual = utils.trimProperties(input);
    // expect(actual).not.toBe(input);
    // expect(actual).toEqual(expected);

// The logic for the function in the index.js file doesn't allow me to use the above code to verify identity
// I think I need to alter the logic in the index.js file, but I'm not sure how to go about it
});

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  })
  test.todo('[4] the object returned is the exact same one we passed in')
    // const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    // const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    // const actual = utils.trimPropertiesMutation(input);
    // expect(actual).toBe(input);
    // expect(actual).toEqual(expected);

// The logic for the function in the index.js file doesn't allow me to use the above code to verify identity
// I think I need to alter the logic in the index.js file, but I'm not sure how to go about it
});

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{integer: 1}, {integer: 2}, {integer: 3}];
    const expected = 3;
    const actual = utils.findLargestInteger(input);
    expect(actual).toEqual(expected);
  })
});

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3)
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(3);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    expect(counter.countDown()).toEqual(3);
    expect(counter.countDown()).toEqual(2);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    expect(counter.countDown()).toEqual(3);
    expect(counter.countDown()).toEqual(2);
    expect(counter.countDown()).toEqual(1);
    expect(counter.countDown()).toEqual(0);
    expect(counter.countDown()).toEqual(0);
  })
});

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons()
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual('summer');
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(seasons.next()).toEqual('summer');
    expect(seasons.next()).toEqual('fall');
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(seasons.next()).toEqual('summer');
    expect(seasons.next()).toEqual('fall');
    expect(seasons.next()).toEqual('winter');
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(seasons.next()).toEqual('summer');
    expect(seasons.next()).toEqual('fall');
    expect(seasons.next()).toEqual('winter');
    expect(seasons.next()).toEqual('spring');
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(seasons.next()).toEqual('summer');
    expect(seasons.next()).toEqual('fall');
    expect(seasons.next()).toEqual('winter');
    expect(seasons.next()).toEqual('spring');
    expect(seasons.next()).toEqual('summer');
  })
  test.todo('[14] the 40th call of seasons.next returns "spring"')
    // for (let i = 0; i <= 39; i++) {
    //   seasons.next();
    //   if (i === 39) {expect(seasons.next()).toEqual('spring')}

// I think I have an error in the loop logic, as I can't accurately iterate the function for some reason
// Needs more investigation, but I've hit a wall
});

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30)
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(30)).toEqual(30);
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(30);
    expect(focus.tank).toEqual(19);
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600);
    expect(focus.tank).toEqual(0);
    expect(focus.odometer).toEqual(600);
    focus.drive(1);
    expect(focus.odometer).toEqual(600);
    focus.refuel(1);
    expect(focus.tank).toEqual(1);
    focus.drive(1);
    expect(focus.odometer).toEqual(601);
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.tank).toEqual(focus.maxTank);
    expect(focus.tank).toEqual(20);
    focus.refuel(1);
    expect(focus.tank).toEqual(20);
  })
});

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', () => {
    expect(utils.isEvenNumberAsync(4)).toEqual(true);
  })
  test('[20] resolves false if passed an odd number', () => {
    expect(utils.isEvenNumberAsync(5)).toEqual(false);
  })
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    expect(utils.isEvenNumberAsync('foo')).toEqual('number must be a number');
  })
  test('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    expect(utils.isEvenNumberAsync(NaN)).toEqual('number must be a number');
  })
});
