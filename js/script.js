
// script.js

// This assumes constants.js is already loaded, providing the BOOKS object.

document.addEventListener('DOMContentLoaded', () => {
    const bookSelect = document.getElementById('book');
    const chapterSelect = document.getElementById('chapter');
    const verseSelect = document.getElementById('verse');

    // Populate the books dropdown from BOOKS object
    function populateBooks() {
        for (const bookNumber in BOOKS) {
            const bookName = BOOKS[bookNumber].name;
            const option = document.createElement('option');
            option.value = bookNumber;
            option.textContent = bookName;
            bookSelect.appendChild(option);
        }
    }

    // Populate chapters based on selected book
    function populateChapters() {
        chapterSelect.innerHTML = '';  // Clear previous chapters
        verseSelect.innerHTML = '';    // Clear verses too (since chapters changed)

        const selectedBook = bookSelect.value;
        const chapters = BOOKS[selectedBook].chapters;

        for (const chapterNumber in chapters) {
            const option = document.createElement('option');
            option.value = chapterNumber;
            option.textContent = `Chapter ${chapterNumber}`;
            chapterSelect.appendChild(option);
        }

        // Auto-populate verses for the first chapter immediately
        populateVerses();
    }

    // Populate verses based on selected chapter
    function populateVerses() {
        verseSelect.innerHTML = '';  // Clear previous verses

        const selectedBook = bookSelect.value;
        const selectedChapter = chapterSelect.value;
        const verses = BOOKS[selectedBook].chapters[selectedChapter];

        verses.forEach(verseNumber => {
            const option = document.createElement('option');
            option.value = verseNumber;
            option.textContent = `Verse ${verseNumber}`;
            verseSelect.appendChild(option);
        });
    }

    // Set up event listeners
    bookSelect.addEventListener('change', populateChapters);
    chapterSelect.addEventListener('change', populateVerses);

    // Initial population on page load
    populateBooks();
    populateChapters();  // Trigger population of first book's chapters/verses
});

