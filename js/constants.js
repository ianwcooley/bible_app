const BOOKS = {
    "1": {
        "name": "Genesis",
        "chapters": {}
    },
    "2": {
        "name": "Exodus",
        "chapters": {}
    },
    "3": {
        "name": "Leviticus",
        "chapters": {}
    },
    "4": {
        "name": "Numbers",
        "chapters": {}
    },
    "5": {
        "name": "Deuteronomy",
        "chapters": {}
    },
    "6": {
        "name": "Joshua",
        "chapters": {}
    },
    "7": {
        "name": "Judges",
        "chapters": {}
    },
    "8": {
        "name": "Ruth",
        "chapters": {}
    },
    "9": {
        "name": "1 Samuel",
        "chapters": {}
    },
    "10": {
        "name": "2 Samuel",
        "chapters": {}
    },
    "11": {
        "name": "1 Kings",
        "chapters": {}
    },
    "12": {
        "name": "2 Kings",
        "chapters": {}
    },
    "13": {
        "name": "1 Chronicles",
        "chapters": {}
    },
    "14": {
        "name": "2 Chronicles",
        "chapters": {}
    },
    "15": {
        "name": "Ezra",
        "chapters": {}
    },
    "16": {
        "name": "Nehemiah",
        "chapters": {}
    },
    "17": {
        "name": "Esther",
        "chapters": {}
    },
    "18": {
        "name": "Job",
        "chapters": {}
    },
    "19": {
        "name": "Psalms",
        "chapters": {}
    },
    "20": {
        "name": "Proverbs",
        "chapters": {}
    },
    "21": {
        "name": "Ecclesiastes",
        "chapters": {}
    },
    "22": {
        "name": "Song of Songs",
        "chapters": {}
    },
    "23": {
        "name": "Isaiah",
        "chapters": {}
    },
    "24": {
        "name": "Jeremiah",
        "chapters": {}
    },
    "25": {
        "name": "Lamentations",
        "chapters": {}
    },
    "26": {
        "name": "Ezekiel",
        "chapters": {}
    },
    "27": {
        "name": "Daniel",
        "chapters": {}
    },
    "28": {
        "name": "Hosea",
        "chapters": {}
    },
    "29": {
        "name": "Joel",
        "chapters": {}
    },
    "30": {
        "name": "Amos",
        "chapters": {}
    },
    "31": {
        "name": "Obadiah",
        "chapters": {}
    },
    "32": {
        "name": "Jonah",
        "chapters": {}
    },
    "33": {
        "name": "Micah",
        "chapters": {}
    },
    "34": {
        "name": "Nahum",
        "chapters": {}
    },
    "35": {
        "name": "Habakkuk",
        "chapters": {}
    },
    "36": {
        "name": "Zephaniah",
        "chapters": {}
    },
    "37": {
        "name": "Haggai",
        "chapters": {}
    },
    "38": {
        "name": "Zechariah",
        "chapters": {}
    },
    "39": {
        "name": "Malachi",
        "chapters": {}
    },
    "40": {
        "name": "Matthew",
        "chapters": {}
    },
    "41": {
        "name": "Mark",
        "chapters": {}
    },
    "42": {
        "name": "Luke",
        "chapters": {}
    },
    "43": {
        "name": "John",
        "chapters": {}
    },
    "44": {
        "name": "Acts",
        "chapters": {}
    },
    "45": {
        "name": "Romans",
        "chapters": {}
    },
    "46": {
        "name": "1 Corinthians",
        "chapters": {}
    },
    "47": {
        "name": "2 Corinthians",
        "chapters": {}
    },
    "48": {
        "name": "Galatians",
        "chapters": {}
    },
    "49": {
        "name": "Ephesians",
        "chapters": {}
    },
    "50": {
        "name": "Philippians",
        "chapters": {}
    },
    "51": {
        "name": "Colossians",
        "chapters": {}
    },
    "52": {
        "name": "1 Thessalonians",
        "chapters": {}
    },
    "53": {
        "name": "2 Thessalonians",
        "chapters": {}
    },
    "54": {
        "name": "1 Timothy",
        "chapters": {}
    },
    "55": {
        "name": "2 Timothy",
        "chapters": {}
    },
    "56": {
        "name": "Titus",
        "chapters": {}
    },
    "57": {
        "name": "Philemon",
        "chapters": {}
    },
    "58": {
        "name": "Hebrews",
        "chapters": {}
    },
    "59": {
        "name": "James",
        "chapters": {}
    },
    "60": {
        "name": "1 Peter",
        "chapters": {}
    },
    "61": {
        "name": "2 Peter",
        "chapters": {}
    },
    "62": {
        "name": "1 John",
        "chapters": {}
    },
    "63": {
        "name": "2 John",
        "chapters": {}
    },
    "64": {
        "name": "3 John",
        "chapters": {}
    },
    "65": {
        "name": "Jude",
        "chapters": {}
    },
    "66": {
        "name": "Revelation",
        "chapters": {}
    },
    "67": {
        "name": "1 Esdras",
        "chapters": {}
    },
    "68": {
        "name": "2 Esdras",
        "chapters": {}
    },
    "69": {
        "name": "Tobit",
        "chapters": {}
    },
    "70": {
        "name": "Judith",
        "chapters": {}
    },
    "71": {
        "name": "Esther (Greek)",
        "chapters": {}
    },
    "73": {
        "name": "Wisdom",
        "chapters": {}
    },
    "74": {
        "name": "Sirach",
        "chapters": {}
    },
    "75": {
        "name": "Baruch",
        "chapters": {}
    },
    "76": {
        "name": "Prayer of Azariah",
        "chapters": {}
    },
    "77": {
        "name": "Susanna",
        "chapters": {}
    },
    "78": {
        "name": "Bel and the Dragon",
        "chapters": {}
    },
    "79": {
        "name": "Prayer of Manasses",
        "chapters": {}
    },
    "80": {
        "name": "1 Maccabees",
        "chapters": {}
    },
    "81": {
        "name": "2 Maccabees",
        "chapters": {}
    },
    "82": {
        "name": "III Maccabees",
        "chapters": {}
    },
    "83": {
        "name": "IV Maccabees",
        "chapters": {}
    },
    "1000": {
        "name": "Laodiceans",
    },
    "1001": {
        "name": "Epistle of Jeremiah",
    },
    "1002": {
        "name": "Psalms of Solomon",
    },
    "1003": {
        "name": "Odes",
    }
};

const TRANSLATIONS = {
    "akjv": {
        "translation": "American King James Version",
        "description": "American King James Version",
        "language": "English",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "alb": {
        "translation": "Albanian Bible",
        "description": "Albanian Bible",
        "language": "Albanian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "aleppo": {
        "translation": "Aleppo Codex",
        "description": "Aleppo Codex",
        "language": "Hebrew",
        "encoding": "UTF-8",
        "direction": "RTL"
    },
    "almeida": {
        "translation": "Almeida Atualizada",
        "description": "De 1911 Biblia Sagrada Traduzida em Portuguez Por João Ferreeira D'Almeida",
        "language": "Portuguese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "aov": {
        "translation": "Ou Vertaling",
        "description": "1933/1953 Afrikaans Bybel",
        "language": "Afrikaans",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "arabicsv": {
        "translation": "Smith and Van Dyke",
        "description": "Smith and van Dyck's al-Kitab al-Muqaddas (Arabic Bible)",
        "language": "Arabic",
        "encoding": "UTF-8",
        "direction": "RTL"
    },
    "asv": {
        "translation": "American Standard Version",
        "description": "American Standard Version (1901)",
        "language": "English",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "basicenglish": {
        "translation": "Basic English Bible",
        "description": "1949/1964 Bible in Basic English",
        "language": "English",
        "encoding": "",
        "direction": "LTR"
    },
    "basque": {
        "translation": "(Navarro Labourdin) NT",
        "description": "1571 Navarro-Labourdin Basque NT",
        "language": "Basque",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "bibelselskap": {
        "translation": "Det Norsk Bibelselskap (1930)",
        "description": "Bibelen på Norsk (1930)",
        "language": "Norwegian bokmal",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "bkr": {
        "translation": "Czech BKR",
        "description": "Czech Bible Kralicka",
        "language": "Czech",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "breton": {
        "translation": "Gospels",
        "description": "Breton New Testament (Koad 21)",
        "language": "Breton",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "burcbcm": {
        "translation": "ဤဘာသာပြန်ကျမ်းကိုကက်သလစ်ဆရာတော်များရုံးချုပ်ရှိ  သမမ္မာ ကျမ်းစာတမန်တော်လုပ်ငန်းကော်မစ်ရှင်မှပံ့ပိုးပေးပါသည်။",
        "description": "ဤဘာသာပြန်ကျမ်းကိုကက်သလစ်ဆရာတော်များရုံးချုပ်ရှိ  သမမ္မာ ကျမ်းစာတမန်တော်လုပ်ငန်းကော်မစ်ရှင်မှပံ့ပိုးပေးပါသည်။",
        "language": "Myanmar Burmse",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "calo": {
        "translation": "El Evangelio segun S. Lucas, traducido al Romaní, ó dialecto de los Gitanos de España",
        "description": "El Evangelio segun S. Lucas, traducido al Romaní, ó dialecto de los Gitanos de España",
        "language": "Calo",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "canisius": {
        "translation": "Petrus Canisius Translation",
        "description": "Petrus Canisius Translation",
        "language": "Dutch",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "cep": {
        "translation": "Czech CEP",
        "description": "Czech Ekumenicky Cesky preklad",
        "language": "Czech",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "chamorro": {
        "translation": "(Psalms Gospels Acts)",
        "description": "Chamorro: Y Santa Biblia (1908)",
        "language": "Chamorro",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "che1860": {
        "translation": "Cherokee New Testament (1860) with Sequoyah transliterated forms",
        "description": "Cherokee New Testament (1860) with Sequoyah transliterated forms",
        "language": "Cherokee",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "chiunl": {
        "translation": "聖經 (文理和合)",
        "description": "聖經 (文理和合)",
        "language": "Chinese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "cns": {
        "translation": "NCV Simplified",
        "description": "新译本",
        "language": "Chinese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "cnt": {
        "translation": "NCV Traditional",
        "description": "新譯本",
        "language": "Chinese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "codex": {
        "translation": "OT Westminster Leningrad Codex",
        "description": "Westminster Leningrad Codex",
        "language": "Hebrew",
        "encoding": "UTF-8",
        "direction": "RTL"
    },
    "coptic": {
        "translation": "New Testament",
        "description": "The Coptic New Testament",
        "language": "Coptic",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "cornilescu": {
        "translation": "Cornilescu",
        "description": "Cornilescu Bible in Romanian language",
        "language": "Romanian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "croatia": {
        "translation": "Croatian",
        "description": "Croatian Bible",
        "language": "Croatian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "csielizabeth": {
        "translation": "1757 Church Slavonic Elizabeth Bible",
        "description": "1757 Church Slavonic Elizabeth Bible",
        "language": "Slavonic Elizabeth",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "cus": {
        "translation": "Union Simplified",
        "description": "和合本 (简体字)",
        "language": "Chinese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "cut": {
        "translation": "Union Traditional",
        "description": "和合本 (繁體字)",
        "language": "Chinese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "danish": {
        "translation": "Danish",
        "description": "Danish OT1931 + NT1907 with original orthography",
        "language": "Danish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "danish1819": {
        "translation": "Danish New Testament from 1819 with original orthography",
        "description": "Danish New Testament from 1819 with original orthography",
        "language": "Danish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "danish1871": {
        "translation": "Danish OT1871 + NT1907 with original orthography",
        "description": "Danish OT1871 + NT1907 with original orthography",
        "language": "Danish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "darby": {
        "translation": "Darby",
        "description": "Bible J.N. Darby in French with Strong's numbers",
        "language": "French",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "dari": {
        "translation": "Dari Translation",
        "description": "Dari Translation",
        "language": "Dari",
        "encoding": "UTF-8",
        "direction": "RTL"
    },
    "douayrheims": {
        "translation": "Douay Rheims",
        "description": "Douay-Rheims Bible, Challoner Revision",
        "language": "English",
        "encoding": "",
        "direction": "LTR"
    },
    "easternarmenian": {
        "translation": "Eastern (Genesis Exodus Gospels)",
        "description": "Eastern Armenian Bible",
        "language": "Armenian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "elberfelder": {
        "translation": "Elberfelder (1871)",
        "description": "German Elberfelder (1871) (sogenannt)",
        "language": "German",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "elberfelder1905": {
        "translation": "Elberfelder (1905)",
        "description": "German Darby Unrevidierte Elberfelder (1905)",
        "language": "German",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "esperanto": {
        "translation": "Esperanto",
        "description": "Esperanto Londona Biblio",
        "language": "Esperanto",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "estonian": {
        "translation": "Estonian",
        "description": "Estonian Bible",
        "language": "Estonian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "finnish1776": {
        "translation": "Finnish Bible (1776)",
        "description": "Finnish Biblia (1776)",
        "language": "Finnish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "gaelic": {
        "translation": "Scots Gaelic (Gospel of Mark)",
        "description": "Scottish Gaelic Gospel of Mark",
        "language": "Scottish Gaelic",
        "encoding": "",
        "direction": "LTR"
    },
    "giovanni": {
        "translation": "Giovanni Diodati Bible (1649)",
        "description": "Italian Giovanni Diodati Bibbia 1649",
        "language": "Italian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "gothic": {
        "translation": "Gothic (Nehemiah NT Portions)",
        "description": "Bishop Wulfila Gothic Bible",
        "language": "Gothic",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "japbungo": {
        "translation": "明治元訳「舊約聖書」(1953年版) 大正改訳「新約聖書",
        "description": "明治元訳「舊約聖書」(1953年版) 大正改訳「新約聖書",
        "language": "Japanese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "japdenmo": {
        "translation": "Japanese Denmo 電網聖書",
        "description": "Japanese Denmo 電網聖書",
        "language": "Japanese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "japkougo": {
        "translation": "Japanese Kougo-yaku 口語訳「聖書」(1954/1955年版)",
        "description": "Japanese Kougo-yaku 口語訳「聖書」(1954/1955年版)",
        "language": "Japanese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "japraguet": {
        "translation": "Japanese Raguet-yaku ラゲ訳「我主イエズスキリストの新約聖書」(1910年版)",
        "description": "Japanese Raguet-yaku ラゲ訳「我主イエズスキリストの新約聖書」(1910年版)",
        "language": "Japanese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "judson": {
        "translation": "Judson (1835)",
        "description": "1835 Judson Burmese Bible",
        "language": "Myanmar Burmse",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "karoli": {
        "translation": "Hungarian Karoli",
        "description": "Revideált Károli Biblia 1908",
        "language": "Hungarian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "kjv": {
        "translation": "King James Version",
        "description": "King James Version (1769) with Strongs Numbers and Morphology  and CatchWords",
        "language": "English",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "kjva": {
        "translation": "King James Version (1769) with Strongs Numbers and Morphology and CatchWords, including Apocrypha (without glosses)",
        "description": "King James Version (1769) with Strongs Numbers and Morphology and CatchWords, including Apocrypha (without glosses)",
        "language": "English",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "klv": {
        "translation": "Klingon Language Version of the World English Bible",
        "description": "Klingon Language Version of the World English Bible",
        "language": "",
        "encoding": "",
        "direction": "LTR"
    },
    "korean": {
        "translation": "Korean",
        "description": "개역성경",
        "language": "Korean",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "koreankjv": {
        "translation": "Hangul King James Version",
        "description": "Hangul King James Version",
        "language": "Korean",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "latvian": {
        "translation": "New Testament",
        "description": "Latvian New Testament",
        "language": "Latvian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "lithuanian": {
        "translation": "Lithuanian",
        "description": "Lithuanian Bible",
        "language": "Lithuanian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "livre": {
        "translation": "Bíblia Livre",
        "description": "Bíblia Livre",
        "language": "Portuguese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "livretr": {
        "translation": "Bíblia Livre - Textus Receptus",
        "description": "Bíblia Livre - Textus Receptus",
        "language": "Portuguese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "ls1910": {
        "translation": "Louis Segond (1910)",
        "description": "Bible Louis Segond (1910)",
        "language": "French",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "luther1545": {
        "translation": "Luther (1545)",
        "description": "German Luther Übersetzung von 1545 (moderne Rechtschreibung)",
        "language": "German",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "lxx": {
        "translation": "OT LXX Accented",
        "description": "Septuagint, Morphologically Tagged Rahlfs'",
        "language": "Greek",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "mal1910": {
        "translation": "Sathyavedapusthakam (Malayalam Bible) published in 1910",
        "description": "Sathyavedapusthakam (Malayalam Bible) published in 1910",
        "language": "",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "manxgaelic": {
        "translation": "Manx Gaelic (Esther Jonah 4 Gospels)",
        "description": "Manx Gaelic Scripture Portions",
        "language": "Manx Gaelic",
        "encoding": "",
        "direction": "LTR"
    },
    "maori": {
        "translation": "Maori",
        "description": "Maori Bible",
        "language": "Maori",
        "encoding": "",
        "direction": "LTR"
    },
    "martin": {
        "translation": "Martin (1744)",
        "description": "French Bible Martin (1744)",
        "language": "French",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "mg1865": {
        "translation": "Baiboly Malagasy (1865)",
        "description": "Baiboly Malagasy (1865)",
        "language": "Malagasy",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "moderngreek": {
        "translation": "Greek Modern",
        "description": "Neophytos Vamvas's translation of the Holy Bible into modern Greek (1850)",
        "language": "Greek Modern",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "modernhebrew": {
        "translation": "Hebrew Modern",
        "description": "Modern Hebrew Bible",
        "language": "Hebrew",
        "encoding": "UTF-8",
        "direction": "RTL"
    },
    "monkjv": {
        "translation": "Mongolian King James Version",
        "description": "Mongolian King James Version",
        "language": "Mongolian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "ndebele": {
        "translation": "Ndebele Bible",
        "description": "Ndebele Bible",
        "language": "Ndebele",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "norsmb": {
        "translation": "Studentmållagsbibelen frå 1921",
        "description": "Studentmållagsbibelen frå 1921",
        "language": "Norwegian nynorsk",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "peshitta": {
        "translation": "Peshitta NT",
        "description": "Syriac Peshitta",
        "language": "Syriac",
        "encoding": "UTF-8",
        "direction": "RTL"
    },
    "pohnold": {
        "translation": "Old Public Domain Pohnpeian Bible",
        "description": "Old Public Domain Pohnpeian Bible",
        "language": "Pohnpeian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "pohnpeian": {
        "translation": "Bible in Pohnpeian language",
        "description": "Bible in Pohnpeian language",
        "language": "Pohnpeian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "polgdanska": {
        "translation": "Polish Biblia Gdanska (1881)",
        "description": "Polish Biblia Gdanska (1881)",
        "language": "Polish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "polugdanska": {
        "translation": "Updated Gdańsk Bible",
        "description": "Updated Gdańsk Bible",
        "language": "Polish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "potawatomi": {
        "translation": "Potawatomi (Matthew Acts) (Lykins 1844)",
        "description": "1833 Potawatomi Matthew and Acts",
        "language": "Potawatomi",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "pyharaamattu1933": {
        "translation": "Pyha Raamattu (1933 1938)",
        "description": "Finnish Pyhä Raamattu (1933/1938)",
        "language": "Finnish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "pyharaamattu1992": {
        "translation": "Pyha Raamattu (1992)",
        "description": "Finnish Pyhä Raamattu (1992)",
        "language": "Finnish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "riveduta": {
        "translation": "Riveduta Bible (1927)",
        "description": "Italian Riveduta Bibbia (1927)",
        "language": "Italian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "rv1858": {
        "translation": "Reina Valera NT (1858)",
        "description": "La Santa Biblia Reina-Valera (1909)",
        "language": "Spanish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "sahidic": {
        "translation": "Sahidic NT",
        "description": "Sahidic Coptic New Testament, ed. by G. W. Horner",
        "language": "Coptic",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "schlachter": {
        "translation": "Schlachter (1951)",
        "description": "Schlachter Bibel (1951)",
        "language": "German",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "shona": {
        "translation": "Shona Bible",
        "description": "Shona Bible",
        "language": "Shona",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "srkdekavski": {
        "translation": "Serbian Bible Daničić-Karadžić Ekavski",
        "description": "Serbian Bible Daničić-Karadžić Ekavski",
        "language": "Serbian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "srkdijekav": {
        "translation": "Serbian Bible Daničić-Karadžić Ijekavski",
        "description": "Serbian Bible Daničić-Karadžić Ijekavski",
        "language": "Serbian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "sse": {
        "translation": "Sagradas Escrituras (1569)",
        "description": "La Santa Biblia Reina-Valera (1865) con arreglos ortográficos",
        "language": "Spanish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "statenvertaling": {
        "translation": "Dutch Staten Vertaling",
        "description": "Dutch Statenvertaling Bijbel",
        "language": "Dutch",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "statenvertalinga": {
        "translation": "De ganse Heilige Schrift bevattende al de kanonieke boeken van het Oude en Nieuwe Testament, met de apocriefe (deuterocanonieke) boeken",
        "description": "De ganse Heilige Schrift bevattende al de kanonieke boeken van het Oude en Nieuwe Testament, met de apocriefe (deuterocanonieke) boeken",
        "language": "Dutch",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "swahili": {
        "translation": "Swahili",
        "description": "Swahili New Testament",
        "language": "Swahili",
        "encoding": "",
        "direction": "LTR"
    },
    "swedish": {
        "translation": "Swedish (1917)",
        "description": "Swedish Bible (1917)",
        "language": "Swedish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "swekarlxii": {
        "translation": "Svenska Karl XII:s Bibel (1703)",
        "description": "Svenska Karl XII:s Bibel (1703)",
        "language": "Swedish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "swekarlxii1873": {
        "translation": "Svenska Karl XII:s Bibel (1873)",
        "description": "Svenska Karl XII:s Bibel (1873)",
        "language": "Swedish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "synodal": {
        "translation": "Synodal Translation (1876)",
        "description": "Синодального Перевода Библии",
        "language": "Russian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "tagalog": {
        "translation": "Ang Dating Biblia (1905)",
        "description": "Philippine Bible Society (1905)",
        "language": "Tagalog",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "tausug": {
        "translation": "Tausug Kitab Injil",
        "description": "Tausug Kitab Injil",
        "language": "Tausug",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "textusreceptus": {
        "translation": "NT Textus Receptus (1550 1894) Parsed",
        "description": "Textus Receptus (1550/1894)",
        "language": "Greek",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "thai": {
        "translation": "Thai from kjv",
        "description": "Thai King James Version",
        "language": "Thai",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "tischendorf": {
        "translation": "NT Tischendorf 8th Ed",
        "description": "Tischendorf's 8th edition GNT",
        "language": "Greek",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "tpikjpb": {
        "translation": "King Jems Pisin Baibel",
        "description": "King Jems Pisin Baibel",
        "language": "",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "turhadi": {
        "translation": "Turkish Easy-to-Read Translation (HADI)",
        "description": "Turkish Easy-to-Read Translation (HADI)",
        "language": "Turkish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "turkish": {
        "translation": "Turkish",
        "description": "Kutsal Kitap (New Turkish Bible)",
        "language": "Turkish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "tyndale": {
        "translation": "William Tyndale Bible (1525/1530)",
        "description": "William Tyndale Bible (1525/1530)",
        "language": "English",
        "encoding": "",
        "direction": "LTR"
    },
    "ukranian": {
        "translation": "NT (P Kulish 1871)",
        "description": "Новий Завіт. Переклад П. Куліша (1871)",
        "language": "Ukrainian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "ukrogienko": {
        "translation": "Українська Біблія. Переклад Івана Огієнка.",
        "description": "Українська Біблія. Переклад Івана Огієнка.",
        "language": "Ukrainian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "uma": {
        "translation": "Uma NT",
        "description": "Uma New Testament",
        "language": "Uma",
        "encoding": "",
        "direction": "LTR"
    },
    "valera": {
        "translation": "Reina Valera (1909)",
        "description": "Reina-Valera 1909 con números de Strong",
        "language": "Spanish",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "vietnamese": {
        "translation": "Vietnamese (1934)",
        "description": "Kinh Thánh Tiếng Việt (1934)",
        "language": "Vietnamese",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "vulgate": {
        "translation": "Vulgata Clementina",
        "description": "Clementine Vulgate",
        "language": "Latin",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "wb": {
        "translation": "Webster's Bible",
        "description": "Webster Bible",
        "language": "English",
        "encoding": "",
        "direction": "LTR"
    },
    "web": {
        "translation": "World English Bible",
        "description": "World English Bible",
        "language": "English",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "westcotthort": {
        "translation": "NT Westcott Hort UBS4 variants Parsed",
        "description": "Westcott and Hort with NA27/UBS4 variants",
        "language": "Greek",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "westernarmenian": {
        "translation": "Western NT",
        "description": "1853 Western Armenian NT",
        "language": "Armenian",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "weymouth": {
        "translation": "Weymouth NT",
        "description": "Weymouth NT (1912)",
        "language": "English",
        "encoding": "",
        "direction": "LTR"
    },
    "wycliffe": {
        "translation": "John Wycliffe Bible (c.1395)",
        "description": "John Wycliffe Bible (c.1395)",
        "language": "English",
        "encoding": "UTF-8",
        "direction": "LTR"
    },
    "ylt": {
        "translation": "Young's Literal Translation",
        "description": "Young's Literal Translation (1898)",
        "language": "English",
        "encoding": "",
        "direction": "LTR"
    },
    "zhuromsky": {
        "translation": "Victor Zhuromsky NT",
        "description": "Russian New Testament with Strong's Numbers under edition of Victor R. Zhuromsky.",
        "language": "Russian",
        "encoding": "UTF-8",
        "direction": "LTR"
    }
};