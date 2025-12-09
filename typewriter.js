document.addEventListener("DOMContentLoaded", () => {

    const sentences = [
        "Hello there, I'm Alex!",
        "Welcome to my website!",
        "Stay a while and browse around!"
    ];

    const typingSpeed = 50;
    const deletingSpeed = 30;
    const pauseTime = 1200;

    let sentenceIndex = 0;
    let charIndex = 0;

    const display = document.getElementById("typedText");

    function typeSentence() {
        const currentSentence = sentences[sentenceIndex];

        if (charIndex < currentSentence.length) {
            display.textContent += currentSentence.charAt(charIndex);
            charIndex++;
            setTimeout(typeSentence, typingSpeed);
        } else {
            // pause at end of sentence
            setTimeout(deleteSentence, pauseTime);
        }
    }

    function deleteSentence() {
        if (charIndex > 0) {
            display.textContent = display.textContent.slice(0, -1);
            charIndex--;
            setTimeout(deleteSentence, deletingSpeed);
        } else {
            // move to the next sentence
            sentenceIndex++;

            if (sentenceIndex < sentences.length) {
                setTimeout(typeSentence, typingSpeed);
            }
        }
    }

    typeSentence();
});
