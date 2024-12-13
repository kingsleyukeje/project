// Decision Making (if-else and switch)
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

function getTicketPrice(age) {
    if (age <= 12) {
        return 'The ticket price is $10';
    } else if (age >= 13 && age <= 17) {
        return 'The ticket price is $15';
    } else if (age >= 18) {
        return 'The ticket price is $20';
    } else {
        return 'Invalid age entered';
    }
}

function weatherClothingAdviser(temperature, raining) {
    if (temperature > 25 && !raining) {
        return 'It is warm and dry. Wear light clothing.';
    } else if (temperature > 25 && raining) {
        return 'It is warm but raining. Wear light clothing with a raincoat.';
    } else if (temperature <= 25 && !raining) {
        return 'It is cool and dry. Wear a sweater or light jacket.';
    } else {
        return 'It is cool and raining. Wear a raincoat and warm clothing.';
    }
}

// Recursion
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lower case
    function checkPalindrome(s, start, end) {
        if (start >= end) return true;
        if (s[start] !== s[end]) return false;
        return checkPalindrome(s, start + 1, end - 1);
    }
    return checkPalindrome(str, 0, str.length - 1);
}

function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

// Testing the functions
console.log(isLeapYear(2024)); // "2024 is a leap year."
console.log(getTicketPrice(25)); // "The ticket price is $20"
console.log(weatherClothingAdviser(15, true)); // "It is cool and raining. Wear a raincoat and warm clothing."
console.log(fibonacci(6)); // 8
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(power(2, 3)); // 8
