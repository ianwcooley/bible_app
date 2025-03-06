// verseAvailabilityGenerator.js

// This assumes you have a TRANSLATIONS object and a BOOKS object (from constants.js).
// TRANSLATIONS_ARRAY is an ordered list (important for bitmask encoding).

const TRANSLATIONS_ARRAY = [];
for (translation in TRANSLATIONS)
    TRANSLATIONS_ARRAY.push(translation);

// Function to call the Bible API and check if a specific verse exists in a given translation.
async function checkVerseExists(translation, bookNumber, chapterNumber, verseNumber) {
    const url = `https://api.getbible.net/v2/${translation}.json`;
    
    try {
        const response = await fetch(url, {
            method: 'GET'
        });
        const data = await response.json();
        for (book of data.books) {
            if (book.nr === parseInt(bookNumber)) {
                for (chapter of book.chapters) {
                    if (chapter.chapter === parseInt(chapterNumber)) {
                        for (verse of chapter.verses) {
                            if (verse.verse === parseInt(verseNumber)) {
                                return true; // Verse found.
                            }
                        }
                    }
                }
            }
        }
        return false; // Verse not found.
    } catch (error) {
        console.error(`API call failed for ${translation}`, error.message);
        return false;  // Treat network errors as missing verse.
    }
}

checkVerseExists('lxx', "93", "1", "1").then(exists => {
    console.log('Verse exists:', exists);
});

// // Main function to build the verseAvailability object.
// async function buildVerseAvailability() {
//     const verseAvailability = {};

//     for (const bookNumber in BOOKS) {
//         const chapters = BOOKS[bookNumber].chapters;

//         for (const chapterNumber in chapters) {
//             const verses = chapters[chapterNumber].verses;

//             for (const verseNumber in verses) {
//                 let bitmask = 0;

//                 for (let i = 0; i < TRANSLATIONS_ARRAY.length; i++) {
//                     const translation = TRANSLATIONS_ARRAY[i];

//                     const exists = await checkVerseExists(translation, bookNumber, chapterNumber, verseNumber);
//                     if (exists) {
//                         bitmask |= (1 << i);  // Set the bit for this translation.
//                     }
//                 }

//                 const key = `${bookNumber}-${chapterNumber}-${verseNumber}`;
//                 verseAvailability[key] = bitmask;
//             }
//         }
//     }

//     // Output the final object (you can write this to a file in Node.js).
//     console.log(JSON.stringify(verseAvailability, null, 2));
// }

// // Run the script
// buildVerseAvailability().then(() => {
//     console.log('Verse availability generated successfully.');
// }).catch(err => {
//     console.error('Unexpected error:', err.message);
// });
