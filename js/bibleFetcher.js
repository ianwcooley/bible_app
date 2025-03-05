
// bibleFetcher.js

async function fetchBooksForTranslation(translation) {
    const url = `https://api.getbible.net/v2/${translation}/books.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch books for ${translation}: ${response.status}`);
        }
        return await response.json(); // Assume response is an array of books
    } catch (error) {
        console.error(`Error fetching books for ${translation}:`, error.message);
        return {}; // Return empty object if books cannot be fetched
    }
}

async function fetchChaptersForBook(translation, book) {
    const url = `https://api.getbible.net/v2/${translation}/${book}/chapters.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch chapters for ${book} (${translation}): ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching chapters for ${book} (${translation}):`, error.message);
        return {}; // Return empty object if chapters cannot be fetched
    }
}

async function fetchVersesForChapter(translation, book, chapter) {
    const url = `https://api.getbible.net/v2/${translation}/${book}/${chapter}.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch verses for ${book} ${chapter} (${translation}): ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching verses for ${book} ${chapter} (${translation}):`, error.message);
        return {}; // Return empty object if verses cannot be fetched
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processAllTranslations(translations) {
    for (const translation in translations) {
        console.log(`Processing translation: ${translation}`);

        const books = await fetchBooksForTranslation(translation);
        // if (books.length === 0) {
        //     console.warn(`No books found for ${translation}`);
        //     continue;
        // }

        for (const book in books) {
              // Wait 500ms between books
            console.log(`  Processing book: ${book}`);
            const start = Date.now();
            const chapters = await fetchChaptersForBook(translation, book);
            // if (chapters.length === 0) {
            //     console.warn(`No chapters found for ${book} (${translation})`);
            //     continue;
            // }

            for (const chapter in chapters) {
                // console.log(`    Processing chapter: ${chapter}`);
                // await sleep(10);
                const verses = await fetchVersesForChapter(translation, book, chapter);
                // console.log(`      Fetched verses for ${book} ${chapter}`);
            }
            const duration = Date.now() - start;
            if (duration > 5000) {
                console.log("Server backup: waiting 10 seconds");
                await sleep(10000);
            }
        }
    }
}


// Example usage:
const translations = ['kjv', 'lxx', 'coptic'];
processAllTranslations(TRANSLATIONS)
    .then(() => console.log('All translations processed'))
    .catch(err => console.error('Unexpected error:', err.message));

