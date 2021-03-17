/*
Implement zipWith
zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
Input validation
Assume all input is valid.
*/

function zipWith(fn,a0,a1) {
    let result = [];
    const size = Math.min(a0.length, a1.length);

    for(let i = 0; i < size; i++) {
        result.push(fn(a0[i], a1[i]));
    }
    return result;
  }

  let arr_1 = [10,10,10,10];
  let arr_2 = [0,1,2,3];
  console.log(zipWith(Math.pow, arr_1, arr_2));

  /*
  it("Example tests",()=>{
    assert.deepEqual(zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2,1]), [6,6,6,6,6,6]);
    assert.deepEqual(zipWith(plus, [0,1,2,3,4  ], [6,5,4,3,2,1]), [6,6,6,6,6  ]);
    assert.deepEqual(zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2  ]), [6,6,6,6,6  ]);
  });
  it("Description tests",()=>{
    assert.deepEqual(zipWith( Math.pow, [10,10,10,10], [0,1,2,3] ), [1,10,100,1000]);
    assert.deepEqual(zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] ), [4,7,7,4,7,7]);
    assert.deepEqual(zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] ), [0,2,4,6]);
    assert.deepEqual(zipWith( (a,b) => a+b, [0,1,2,3], [0,1,2,3] ), [0,2,4,6]);
  });

  */