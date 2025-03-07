
// script.js

// This assumes constants.js is already loaded, providing the BOOKS and TRANSLATIONS objects.

// These arrays keep track of which translations contain the given book,
// chapter, and verse, respectively:
let translationsWithBook = [];
let translationsWithChapter = [];
let translationsWithVerse = [];

// These functions call the API to see if a given translation contains the given
// book, chapter, or verse, respectively:
async function translationHasBook(translation, bookNumber) {
    const url = `https://api.getbible.net/v2/${translation}/books.json`;
    try {
        console.log(`Getting books for ${translation}`);
        const response = await fetch(url, {
            method: 'GET'
        });
        const books = await response.json();
        if (books.hasOwnProperty(bookNumber)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}
async function translationHasChapter(translation, bookNumber, chapterNumber) {
    const url = `https://api.getbible.net/v2/${translation}/${bookNumber}/chapters.json`;
    try {
        console.log(`Getting chapters for ${translation} book ${bookNumber}`);
        const response = await fetch(url, {
            method: 'GET'
        });
        const chapters = await response.json();
        if (chapters.hasOwnProperty(chapterNumber)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}
async function translationHasVerse(translation, bookNumber, chapterNumber, verseNumber) {
    const url = `https://api.getbible.net/v2/${translation}/${bookNumber}/${chapterNumber}.json`;
    try {
        console.log(`Getting chapters for ${translation} book ${bookNumber}`);
        const response = await fetch(url, {
            method: 'GET'
        });
        const chapter = await response.json();
        const verses = chapter.verses.map(verseObject => verseObject.verse.toString());
        if (verses.includes(verseNumber)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}

// We call this function when we first load the page, or change the selected book.
// It updates the translationsWithBook array to contain only the translations that
// contain the selected book.
async function updateTranslationsWithBook(bookNumber) {
    translationsWithBook = [];

    for (const translation in TRANSLATIONS) {
        if (await translationHasBook(translation, bookNumber)) {
            translationsWithBook.push(translation);
        }
    }
}

// We call this function when we change the selected chapter.
// It updates the translationsWithChapter array to contain only the translations that
// contain the selected chapter.
async function updateTranslationsWithChapter(bookNumber, chapterNumber) {
    translationsWithChapter = [];

    for (const translation of translationsWithBook) {
        if (await translationHasChapter(translation, bookNumber, chapterNumber)) {
            translationsWithChapter.push(translation);
        }
    }
}

// We call this function when we change the selected verse.
// It updates the translationsWithVerse array to contain only the translations that
// contain the selected verse.
async function updateTranslationsWithVerse(bookNumber, chapterNumber, verseNumber) {
    translationsWithVerse = [];

    for (const translation of translationsWithChapter) {
        if (await translationHasVerse(translation, bookNumber, chapterNumber, verseNumber)) {
            translationsWithVerse.push(translation);
        }
    }
}

// Master update functions to tie everything together:
async function handleBookChange(bookNumber, chapterNumber, verseNumber) {
    // console.log('updating translations with book');
    await updateTranslationsWithBook(bookNumber);
    await updateTranslationsWithChapter(bookNumber, chapterNumber); // Default to Chapter 1
    await updateTranslationsWithVerse(bookNumber, chapterNumber, verseNumber); // Default to Verse 1
}

async function handleChapterChange(bookNumber, chapterNumber, verseNumber) {
    // console.log('updating translations with chapter');
    await updateTranslationsWithChapter(bookNumber, chapterNumber);
    await updateTranslationsWithVerse(bookNumber, chapterNumber, verseNumber); // Default to Verse 1
}

async function handleVerseChange(bookNumber, chapterNumber, verseNumber) {
    // console.log('updating translations with verse');
    await updateTranslationsWithVerse(bookNumber, chapterNumber, verseNumber);
}



// When the page first loads:
document.addEventListener('DOMContentLoaded', () => {
    const bookSelect = document.getElementById('book');
    const chapterSelect = document.getElementById('chapter');
    const verseSelect = document.getElementById('verse');

    // Disable dropdowns while things are changing so user can't mess things up
    function setDropdownsDisabled(disabled) {
        bookSelect.disabled = disabled;
        chapterSelect.disabled = disabled;
        verseSelect.disabled = disabled;
    }

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
        // verseSelect.innerHTML = '';    // Clear verses too (since chapters changed)

        const selectedBook = bookSelect.value;
        const chapters = BOOKS[selectedBook].chapters;

        for (const chapterNumber in chapters) {
            const option = document.createElement('option');
            option.value = chapterNumber;
            option.textContent = `Chapter ${chapterNumber}`;
            chapterSelect.appendChild(option);
        }

        // Auto-populate verses for the first chapter immediately
        // populateVerses();
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

    populateBooks();
    populateChapters();
    populateVerses();
    // get translations with the book/chapter/verse we start with
    setDropdownsDisabled(true);
    handleBookChange(bookSelect.value, chapterSelect.value, verseSelect.value).then(() => {
        setDropdownsDisabled(false);
    });


    // Set up event listeners
    let suppressEvents = false;

    bookSelect.addEventListener('change', async () => {
        suppressEvents = true;
        setDropdownsDisabled(true);
    
        populateChapters();
        populateVerses();
    
        await handleBookChange(bookSelect.value, chapterSelect.value, verseSelect.value);
    
        setDropdownsDisabled(false);
        suppressEvents = false;
    });
    

    chapterSelect.addEventListener('change', async () => {
        if (suppressEvents) return;
        suppressEvents = true;
        setDropdownsDisabled(true);
    
        populateVerses();
    
        await handleChapterChange(bookSelect.value, chapterSelect.value, verseSelect.value);
    
        setDropdownsDisabled(false);
        suppressEvents = false;
    });
    

    verseSelect.addEventListener('change', async () => {
        if (suppressEvents) return;
        setDropdownsDisabled(true);
    
        await handleVerseChange(bookSelect.value, chapterSelect.value, verseSelect.value);
    
        setDropdownsDisabled(false);
    });
    

    // // Initial population on page load
    // populateBooks();
    // populateChapters();  // Trigger population of first book's chapters/verses
});

