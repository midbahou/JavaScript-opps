
//*TODO: Count down to 0 from a given number.
// let x = parseInt(prompt("enter a nnumber for the count down"))
let x = 10;

while (x >= 0) {
    console.log(`x is ${x}`);
    x--
}

//*TODO: Log integers in multiples of 3 as long as they are less than 35.
let i = 0;

while (i <= 35) {
    console.log(i);
    i += 3;
}


//* Print integers between 0 and 20 with the following conditions:

    // All numbers divisible by 2 should be multiplied by 3 before they are output.
    // All other integers should not be output.

let y = 0;

while (y <= 20) {
    if (y % 2 === 0) {
        // y *= 3;
        console.log(y * 3);
    } 
    y++
}



// ========= Nested for Loop ====
let str = "ABC";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);

    for (let j = 0; j < str.length; j++) {
        console.log(str[i] + str[j]);
    }
}



// ========= Prime Numbers ============
for (let x = 2; x <= 20; x++) {
    let isPrime = true;
  
    for (let j = 2; j < x; j++) {
      if (x % j === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      console.log(x);
    }
  }


  
  for (let i = 1; i <= 20; i++) {

    let isPrime = true; //flag

    // 1 & 3 as odd
    if (i === 1 || i == 3) {
        console.log(`${i} is Odd`);
        continue

        // log odd numbers
    } else if (i % 2 !== 0) {
        console.log(`${i} is Odd`);
    }
    
    // Treat 2 as an even number
    if (i === 2) {
        console.log(`${i} is Even`);
        continue

        // log even numbers
    } else if (i % 2 === 0) {
        console.log(`${i} is Even`);
    }

    // checks for prime numbers
    for (let j = 2; j < i; j++) {
        
        // if i is divisible by j
        if (i % j === 0) {
            isPrime = false
            // console.log(`${i} is Not Prime`);
            break;
        }
    }

    if (isPrime) {
        console.log(`${i} is Prime`);
    }
}


console.log(`==================== Bonus Logical Question ===============`);

// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

// Write a loop that outputs how many quarters Romeo received.

let change = 10 - 4;
let quarters = 0;

while (change >= 0.25) {
    console.log(`This is the change ${change}`);
    console.log(`This is the quarters ${quarters}`);
    
    change -= 0.25;
    quarters++;
}

console.log(`The number total of quarters received from $10 bill is ${quarters} quarters.`);


console.log("======= Do While Loop =======");

// DO While Loop

let z = 10;

do {
    z--;
    console.log(z);
} while(z > 60);


let num;

do {
    console.log("Hello to my number game!");
    
    num = parseInt(prompt("Enter a number greater than 10 and les than 20"));
    
} while (num <= 10 || num >= 20);

console.log(`Your number ${num} is true, because it's greater than 10 and les than 20`);


// =========================== Labeled Statements ===========================
console.log("=========================== Labeled Statements ===========================");

let a = 1;
let b = 1;

myLoop: while (true) {
	console.log(`Outer loop ${a}.`);
	a++;

	while (true) {
		console.log(`Inner loop ${b}.`);
		b++;

		if (a == 5 && b % 5 == 0) {
			break myLoop;
		} else if (b % 5 == 0) {
			break;
		}
	}
}

let r = 1;
let f = 1;

myLoop: while (true) {
	console.log(`Outer loop ${r}.`);
	r++;

	while (true) {
		console.log(`Inner loop ${f}.`);
		f++;

		if (r == 5 && f % 5 == 0) {
			break myLoop;
		} else if (f % 5 == 0) {
			continue myLoop;
		}
	}
}