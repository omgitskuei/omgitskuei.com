const unorderedZhuyinMap: Record<string, string> = {
  // --- 1. Initials (聲母) ---
  "b": "ㄅ", "p": "ㄆ", "m": "ㄇ", "f": "ㄈ",
  "d": "ㄉ", "t": "ㄊ", "n": "ㄋ", "l": "ㄌ",
  "g": "ㄍ", "k": "ㄎ", "h": "ㄏ",
  "j": "ㄐ", "q": "ㄑ", "x": "ㄒ",
  "zh": "ㄓ", "ch": "ㄔ", "sh": "ㄕ", "r": "ㄖ",
  "z": "ㄗ", "c": "ㄘ", "s": "ㄙ",

  // --- 2. Standalone Syllables (整體認讀音節) ---
  // These prevent "zhi" from turning into "ㄓㄧ"
  "zhi": "ㄓ", "chi": "ㄔ", "shi": "ㄕ", "ri": "ㄖ",
  "zi": "ㄗ", "ci": "ㄘ", "si": "ㄙ",

  // --- 3. Simple & Compound Finals (韻母) ---
  "a": "ㄚ", "o": "ㄛ", "e": "ㄜ", "ie": "ㄝ",
  "ai": "ㄞ", "ei": "ㄟ", "ao": "ㄠ", "ou": "ㄡ",
  "an": "ㄢ", "en": "ㄣ", "ang": "ㄤ", "eng": "ㄥ", "er": "ㄦ",

  // --- 4. Medials / Vowels (介母) ---
  "i": "ㄧ", "yi": "ㄧ", "y": "ㄧ",
  "u": "ㄨ", "wu": "ㄨ", "w": "ㄨ",
  "v": "ㄩ", "yu": "ㄩ", "ü": "ㄩ",

  // --- 5. Context-Dependent Pinyin Blends (Crucial Fixes) ---
  // Special 'ong' sounds
  "iong": "ㄩㄥ", 
  "ong": "ㄨㄥ",

  // Hidden vowels (e.g., dui -> ㄉㄨㄟ, liu -> ㄌㄧㄡ, dun -> ㄉㄨㄣ)
  "ui": "ㄨㄟ",
  "iu": "ㄧㄡ",
  "un": "ㄨㄣ",

  // The "U" vs "Ü" rule after j, q, x, y
  "ju": "ㄐㄩ", "qu": "ㄑㄩ", "xu": "ㄒㄩ",
  "juan": "ㄐㄩㄢ", "quan": "ㄑㄩㄢ", "xuan": "ㄒㄩㄢ",
  "jun": "ㄑㄩㄣ", "qun": "ㄑㄩㄣ", "xun": "ㄒㄩㄣ",
  "jue": "ㄐㄩㄝ", "que": "ㄑㄩㄝ", "xue": "ㄒㄩㄝ",

  // --- 6. Tones (聲調) ---
  "1": "ˉ",  // First tone (space / blank)
  "2": "ˊ",  // Second tone
  "3": "ˇ",  // Third tone
  "4": "ˋ",  // Fourth tone
  "5": "˙",  // Neutral tone
  "0": "˙"   // Alternate neutral tone
};

export const zhuyinMap = Object.keys(unorderedZhuyinMap).sort((a, b) => b.length - a.length);