function analyzeSentence() {
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";
    let prevChar = null;

    let sentence = prompt("Enter a sentence ending with a period:"); // Prompt user for input

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (char === ".") {
            if (prevChar && prevChar !== " ") {
                wordCount++; // Count the last word
            }
            break;
        }

        length++; // Increment character count

        if (vowels.includes(char)) {
            vowelCount++; // Increment vowel count
        }

        if (char === " " && prevChar && prevChar !== " ") {
            wordCount++; // Count a word
        }

        prevChar = char; // Update the previous character
    }

    console.log(`Length of the sentence: ${length}`);
    console.log(`Number of words: ${wordCount}`);
    console.log(`Number of vowels: ${vowelCount}`);
}

// Run the function
analyzeSentence();
