const KANA_DATA = [
    // Basic Vowels (Goin)
    { id: 'h_a', kana: 'あ', romaji: ['a'], displayRomaji: 'a', type: 'hiragana', category: 'Basic (Seion)', group: 'Vowels' },
    { id: 'h_i', kana: 'い', romaji: ['i'], displayRomaji: 'i', type: 'hiragana', category: 'Basic (Seion)', group: 'Vowels' },
    { id: 'h_u', kana: 'う', romaji: ['u'], displayRomaji: 'u', type: 'hiragana', category: 'Basic (Seion)', group: 'Vowels' },
    { id: 'h_e', kana: 'え', romaji: ['e'], displayRomaji: 'e', type: 'hiragana', category: 'Basic (Seion)', group: 'Vowels' },
    { id: 'h_o', kana: 'お', romaji: ['o'], displayRomaji: 'o', type: 'hiragana', category: 'Basic (Seion)', group: 'Vowels' },
    { id: 'k_a', kana: 'ア', romaji: ['a'], displayRomaji: 'a', type: 'katakana', category: 'Basic (Seion)', group: 'Vowels' },
    { id: 'k_i', kana: 'イ', romaji: ['i'], displayRomaji: 'i', type: 'katakana', category: 'Basic (Seion)', group: 'Vowels' },
    { id: 'k_u', kana: 'ウ', romaji: ['u'], displayRomaji: 'u', type: 'katakana', category: 'Basic (Seion)', group: 'Vowels' },
    { id: 'k_e', kana: 'エ', romaji: ['e'], displayRomaji: 'e', type: 'katakana', category: 'Basic (Seion)', group: 'Vowels' },
    { id: 'k_o', kana: 'オ', romaji: ['o'], displayRomaji: 'o', type: 'katakana', category: 'Basic (Seion)', group: 'Vowels' },

    // K-Group
    { id: 'h_ka', kana: 'か', romaji: ['ka'], displayRomaji: 'ka', type: 'hiragana', category: 'Basic (Seion)', group: 'K-Group' },
    { id: 'h_ki', kana: 'き', romaji: ['ki'], displayRomaji: 'ki', type: 'hiragana', category: 'Basic (Seion)', group: 'K-Group' },
    { id: 'h_ku', kana: 'く', romaji: ['ku'], displayRomaji: 'ku', type: 'hiragana', category: 'Basic (Seion)', group: 'K-Group' },
    { id: 'h_ke', kana: 'け', romaji: ['ke'], displayRomaji: 'ke', type: 'hiragana', category: 'Basic (Seion)', group: 'K-Group' },
    { id: 'h_ko', kana: 'こ', romaji: ['ko'], displayRomaji: 'ko', type: 'hiragana', category: 'Basic (Seion)', group: 'K-Group' },
    { id: 'k_ka', kana: 'カ', romaji: ['ka'], displayRomaji: 'ka', type: 'katakana', category: 'Basic (Seion)', group: 'K-Group' },
    { id: 'k_ki', kana: 'キ', romaji: ['ki'], displayRomaji: 'ki', type: 'katakana', category: 'Basic (Seion)', group: 'K-Group' },
    { id: 'k_ku', kana: 'ク', romaji: ['ku'], displayRomaji: 'ku', type: 'katakana', category: 'Basic (Seion)', group: 'K-Group' },
    { id: 'k_ke', kana: 'ケ', romaji: ['ke'], displayRomaji: 'ke', type: 'katakana', category: 'Basic (Seion)', group: 'K-Group' },
    { id: 'k_ko', kana: 'コ', romaji: ['ko'], displayRomaji: 'ko', type: 'katakana', category: 'Basic (Seion)', group: 'K-Group' },

    // S-Group
    { id: 'h_sa', kana: 'さ', romaji: ['sa'], displayRomaji: 'sa', type: 'hiragana', category: 'Basic (Seion)', group: 'S-Group' },
    { id: 'h_shi', kana: 'し', romaji: ['shi', 'si'], displayRomaji: 'shi', type: 'hiragana', category: 'Basic (Seion)', group: 'S-Group' },
    { id: 'h_su', kana: 'す', romaji: ['su'], displayRomaji: 'su', type: 'hiragana', category: 'Basic (Seion)', group: 'S-Group' },
    { id: 'h_se', kana: 'せ', romaji: ['se'], displayRomaji: 'se', type: 'hiragana', category: 'Basic (Seion)', group: 'S-Group' },
    { id: 'h_so', kana: 'そ', romaji: ['so'], displayRomaji: 'so', type: 'hiragana', category: 'Basic (Seion)', group: 'S-Group' },
    { id: 'k_sa', kana: 'サ', romaji: ['sa'], displayRomaji: 'sa', type: 'katakana', category: 'Basic (Seion)', group: 'S-Group' },
    { id: 'k_shi', kana: 'シ', romaji: ['shi', 'si'], displayRomaji: 'shi', type: 'katakana', category: 'Basic (Seion)', group: 'S-Group' },
    { id: 'k_su', kana: 'ス', romaji: ['su'], displayRomaji: 'su', type: 'katakana', category: 'Basic (Seion)', group: 'S-Group' },
    { id: 'k_se', kana: 'セ', romaji: ['se'], displayRomaji: 'se', type: 'katakana', category: 'Basic (Seion)', group: 'S-Group' },
    { id: 'k_so', kana: 'ソ', romaji: ['so'], displayRomaji: 'so', type: 'katakana', category: 'Basic (Seion)', group: 'S-Group' },

    // T-Group
    { id: 'h_ta', kana: 'た', romaji: ['ta'], displayRomaji: 'ta', type: 'hiragana', category: 'Basic (Seion)', group: 'T-Group' },
    { id: 'h_chi', kana: 'ち', romaji: ['chi', 'ti'], displayRomaji: 'chi', type: 'hiragana', category: 'Basic (Seion)', group: 'T-Group' },
    { id: 'h_tsu', kana: 'つ', romaji: ['tsu', 'tu'], displayRomaji: 'tsu', type: 'hiragana', category: 'Basic (Seion)', group: 'T-Group' },
    { id: 'h_te', kana: 'て', romaji: ['te'], displayRomaji: 'te', type: 'hiragana', category: 'Basic (Seion)', group: 'T-Group' },
    { id: 'h_to', kana: 'と', romaji: ['to'], displayRomaji: 'to', type: 'hiragana', category: 'Basic (Seion)', group: 'T-Group' },
    { id: 'k_ta', kana: 'タ', romaji: ['ta'], displayRomaji: 'ta', type: 'katakana', category: 'Basic (Seion)', group: 'T-Group' },
    { id: 'k_chi', kana: 'チ', romaji: ['chi', 'ti'], displayRomaji: 'chi', type: 'katakana', category: 'Basic (Seion)', group: 'T-Group' },
    { id: 'k_tsu', kana: 'ツ', romaji: ['tsu', 'tu'], displayRomaji: 'tsu', type: 'katakana', category: 'Basic (Seion)', group: 'T-Group' },
    { id: 'k_te', kana: 'テ', romaji: ['te'], displayRomaji: 'te', type: 'katakana', category: 'Basic (Seion)', group: 'T-Group' },
    { id: 'k_to', kana: 'ト', romaji: ['to'], displayRomaji: 'to', type: 'katakana', category: 'Basic (Seion)', group: 'T-Group' },

    // N-Group
    { id: 'h_na', kana: 'な', romaji: ['na'], displayRomaji: 'na', type: 'hiragana', category: 'Basic (Seion)', group: 'N-Group' },
    { id: 'h_ni', kana: 'に', romaji: ['ni'], displayRomaji: 'ni', type: 'hiragana', category: 'Basic (Seion)', group: 'N-Group' },
    { id: 'h_nu', kana: 'ぬ', romaji: ['nu'], displayRomaji: 'nu', type: 'hiragana', category: 'Basic (Seion)', group: 'N-Group' },
    { id: 'h_ne', kana: 'ね', romaji: ['ne'], displayRomaji: 'ne', type: 'hiragana', category: 'Basic (Seion)', group: 'N-Group' },
    { id: 'h_no', kana: 'の', romaji: ['no'], displayRomaji: 'no', type: 'hiragana', category: 'Basic (Seion)', group: 'N-Group' },
    { id: 'k_na', kana: 'ナ', romaji: ['na'], displayRomaji: 'na', type: 'katakana', category: 'Basic (Seion)', group: 'N-Group' },
    { id: 'k_ni', kana: 'ニ', romaji: ['ni'], displayRomaji: 'ni', type: 'katakana', category: 'Basic (Seion)', group: 'N-Group' },
    { id: 'k_nu', kana: 'ヌ', romaji: ['nu'], displayRomaji: 'nu', type: 'katakana', category: 'Basic (Seion)', group: 'N-Group' },
    { id: 'k_ne', kana: 'ネ', romaji: ['ne'], displayRomaji: 'ne', type: 'katakana', category: 'Basic (Seion)', group: 'N-Group' },
    { id: 'k_no', kana: 'ノ', romaji: ['no'], displayRomaji: 'no', type: 'katakana', category: 'Basic (Seion)', group: 'N-Group' },

    // H-Group
    { id: 'h_ha', kana: 'は', romaji: ['ha'], displayRomaji: 'ha', type: 'hiragana', category: 'Basic (Seion)', group: 'H-Group' },
    { id: 'h_hi', kana: 'ひ', romaji: ['hi'], displayRomaji: 'hi', type: 'hiragana', category: 'Basic (Seion)', group: 'H-Group' },
    { id: 'h_fu', kana: 'ふ', romaji: ['fu', 'hu'], displayRomaji: 'fu', type: 'hiragana', category: 'Basic (Seion)', group: 'H-Group' },
    { id: 'h_he', kana: 'へ', romaji: ['he'], displayRomaji: 'he', type: 'hiragana', category: 'Basic (Seion)', group: 'H-Group' },
    { id: 'h_ho', kana: 'ほ', romaji: ['ho'], displayRomaji: 'ho', type: 'hiragana', category: 'Basic (Seion)', group: 'H-Group' },
    { id: 'k_ha', kana: 'ハ', romaji: ['ha'], displayRomaji: 'ha', type: 'katakana', category: 'Basic (Seion)', group: 'H-Group' },
    { id: 'k_hi', kana: 'ヒ', romaji: ['hi'], displayRomaji: 'hi', type: 'katakana', category: 'Basic (Seion)', group: 'H-Group' },
    { id: 'k_fu', kana: 'フ', romaji: ['fu', 'hu'], displayRomaji: 'fu', type: 'katakana', category: 'Basic (Seion)', group: 'H-Group' },
    { id: 'k_he', kana: 'ヘ', romaji: ['he'], displayRomaji: 'he', type: 'katakana', category: 'Basic (Seion)', group: 'H-Group' },
    { id: 'k_ho', kana: 'ホ', romaji: ['ho'], displayRomaji: 'ho', type: 'katakana', category: 'Basic (Seion)', group: 'H-Group' },

    // M-Group
    { id: 'h_ma', kana: 'ま', romaji: ['ma'], displayRomaji: 'ma', type: 'hiragana', category: 'Basic (Seion)', group: 'M-Group' },
    { id: 'h_mi', kana: 'み', romaji: ['mi'], displayRomaji: 'mi', type: 'hiragana', category: 'Basic (Seion)', group: 'M-Group' },
    { id: 'h_mu', kana: 'む', romaji: ['mu'], displayRomaji: 'mu', type: 'hiragana', category: 'Basic (Seion)', group: 'M-Group' },
    { id: 'h_me', kana: 'め', romaji: ['me'], displayRomaji: 'me', type: 'hiragana', category: 'Basic (Seion)', group: 'M-Group' },
    { id: 'h_mo', kana: 'も', romaji: ['mo'], displayRomaji: 'mo', type: 'hiragana', category: 'Basic (Seion)', group: 'M-Group' },
    { id: 'k_ma', kana: 'マ', romaji: ['ma'], displayRomaji: 'ma', type: 'katakana', category: 'Basic (Seion)', group: 'M-Group' },
    { id: 'k_mi', kana: 'ミ', romaji: ['mi'], displayRomaji: 'mi', type: 'katakana', category: 'Basic (Seion)', group: 'M-Group' },
    { id: 'k_mu', kana: 'ム', romaji: ['mu'], displayRomaji: 'mu', type: 'katakana', category: 'Basic (Seion)', group: 'M-Group' },
    { id: 'k_me', kana: 'メ', romaji: ['me'], displayRomaji: 'me', type: 'katakana', category: 'Basic (Seion)', group: 'M-Group' },
    { id: 'k_mo', kana: 'モ', romaji: ['mo'], displayRomaji: 'mo', type: 'katakana', category: 'Basic (Seion)', group: 'M-Group' },

    // Y-Group
    { id: 'h_ya', kana: 'や', romaji: ['ya'], displayRomaji: 'ya', type: 'hiragana', category: 'Basic (Seion)', group: 'Y-Group' },
    { id: 'h_yu', kana: 'ゆ', romaji: ['yu'], displayRomaji: 'yu', type: 'hiragana', category: 'Basic (Seion)', group: 'Y-Group' },
    { id: 'h_yo', kana: 'よ', romaji: ['yo'], displayRomaji: 'yo', type: 'hiragana', category: 'Basic (Seion)', group: 'Y-Group' },
    { id: 'k_ya', kana: 'ヤ', romaji: ['ya'], displayRomaji: 'ya', type: 'katakana', category: 'Basic (Seion)', group: 'Y-Group' },
    { id: 'k_yu', kana: 'ユ', romaji: ['yu'], displayRomaji: 'yu', type: 'katakana', category: 'Basic (Seion)', group: 'Y-Group' },
    { id: 'k_yo', kana: 'ヨ', romaji: ['yo'], displayRomaji: 'yo', type: 'katakana', category: 'Basic (Seion)', group: 'Y-Group' },

    // R-Group
    { id: 'h_ra', kana: 'ら', romaji: ['ra'], displayRomaji: 'ra', type: 'hiragana', category: 'Basic (Seion)', group: 'R-Group' },
    { id: 'h_ri', kana: 'り', romaji: ['ri'], displayRomaji: 'ri', type: 'hiragana', category: 'Basic (Seion)', group: 'R-Group' },
    { id: 'h_ru', kana: 'る', romaji: ['ru'], displayRomaji: 'ru', type: 'hiragana', category: 'Basic (Seion)', group: 'R-Group' },
    { id: 'h_re', kana: 'れ', romaji: ['re'], displayRomaji: 're', type: 'hiragana', category: 'Basic (Seion)', group: 'R-Group' },
    { id: 'h_ro', kana: 'ろ', romaji: ['ro'], displayRomaji: 'ro', type: 'hiragana', category: 'Basic (Seion)', group: 'R-Group' },
    { id: 'k_ra', kana: 'ラ', romaji: ['ra'], displayRomaji: 'ra', type: 'katakana', category: 'Basic (Seion)', group: 'R-Group' },
    { id: 'k_ri', kana: 'リ', romaji: ['ri'], displayRomaji: 'ri', type: 'katakana', category: 'Basic (Seion)', group: 'R-Group' },
    { id: 'k_ru', kana: 'ル', romaji: ['ru'], displayRomaji: 'ru', type: 'katakana', category: 'Basic (Seion)', group: 'R-Group' },
    { id: 'k_re', kana: 'レ', romaji: ['re'], displayRomaji: 're', type: 'katakana', category: 'Basic (Seion)', group: 'R-Group' },
    { id: 'k_ro', kana: 'ロ', romaji: ['ro'], displayRomaji: 'ro', type: 'katakana', category: 'Basic (Seion)', group: 'R-Group' },

    // W & N Group
    { id: 'h_wa', kana: 'わ', romaji: ['wa'], displayRomaji: 'wa', type: 'hiragana', category: 'Basic (Seion)', group: 'W/N Group' },
    { id: 'h_wo', kana: 'を', romaji: ['wo', 'o'], displayRomaji: 'wo', type: 'hiragana', category: 'Basic (Seion)', group: 'W/N Group' },
    { id: 'h_n', kana: 'ん', romaji: ['n', 'nn'], displayRomaji: 'n', type: 'hiragana', category: 'Basic (Seion)', group: 'W/N Group' },
    { id: 'k_wa', kana: 'ワ', romaji: ['wa'], displayRomaji: 'wa', type: 'katakana', category: 'Basic (Seion)', group: 'W/N Group' },
    { id: 'k_wo', kana: 'ヲ', romaji: ['wo', 'o'], displayRomaji: 'wo', type: 'katakana', category: 'Basic (Seion)', group: 'W/N Group' },
    { id: 'k_n', kana: 'ン', romaji: ['n', 'nn'], displayRomaji: 'n', type: 'katakana', category: 'Basic (Seion)', group: 'W/N Group' },

    // Dakuon (Voiced)
    { id: 'h_ga', kana: 'が', romaji: ['ga'], displayRomaji: 'ga', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'G-Group' },
    { id: 'h_gi', kana: 'ぎ', romaji: ['gi'], displayRomaji: 'gi', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'G-Group' },
    { id: 'h_gu', kana: 'ぐ', romaji: ['gu'], displayRomaji: 'gu', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'G-Group' },
    { id: 'h_ge', kana: 'げ', romaji: ['ge'], displayRomaji: 'ge', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'G-Group' },
    { id: 'h_go', kana: 'ご', romaji: ['go'], displayRomaji: 'go', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'G-Group' },
    { id: 'k_ga', kana: 'ガ', romaji: ['ga'], displayRomaji: 'ga', type: 'katakana', category: 'Dakuon (Voiced)', group: 'G-Group' },
    { id: 'k_gi', kana: 'ギ', romaji: ['gi'], displayRomaji: 'gi', type: 'katakana', category: 'Dakuon (Voiced)', group: 'G-Group' },
    { id: 'k_gu', kana: 'グ', romaji: ['gu'], displayRomaji: 'gu', type: 'katakana', category: 'Dakuon (Voiced)', group: 'G-Group' },
    { id: 'k_ge', kana: 'ゲ', romaji: ['ge'], displayRomaji: 'ge', type: 'katakana', category: 'Dakuon (Voiced)', group: 'G-Group' },
    { id: 'k_go', kana: 'ゴ', romaji: ['go'], displayRomaji: 'go', type: 'katakana', category: 'Dakuon (Voiced)', group: 'G-Group' },

    { id: 'h_za', kana: 'ざ', romaji: ['za'], displayRomaji: 'za', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'Z-Group' },
    { id: 'h_ji', kana: 'じ', romaji: ['ji', 'zi'], displayRomaji: 'ji', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'Z-Group' },
    { id: 'h_zu', kana: 'ず', romaji: ['zu'], displayRomaji: 'zu', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'Z-Group' },
    { id: 'h_ze', kana: 'ぜ', romaji: ['ze'], displayRomaji: 'ze', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'Z-Group' },
    { id: 'h_zo', kana: 'ぞ', romaji: ['zo'], displayRomaji: 'zo', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'Z-Group' },
    { id: 'k_za', kana: 'ザ', romaji: ['za'], displayRomaji: 'za', type: 'katakana', category: 'Dakuon (Voiced)', group: 'Z-Group' },
    { id: 'k_ji', kana: 'ジ', romaji: ['ji', 'zi'], displayRomaji: 'ji', type: 'katakana', category: 'Dakuon (Voiced)', group: 'Z-Group' },
    { id: 'k_zu', kana: 'ズ', romaji: ['zu'], displayRomaji: 'zu', type: 'katakana', category: 'Dakuon (Voiced)', group: 'Z-Group' },
    { id: 'k_ze', kana: 'ゼ', romaji: ['ze'], displayRomaji: 'ze', type: 'katakana', category: 'Dakuon (Voiced)', group: 'Z-Group' },
    { id: 'k_zo', kana: 'ゾ', romaji: ['zo'], displayRomaji: 'zo', type: 'katakana', category: 'Dakuon (Voiced)', group: 'Z-Group' },

    { id: 'h_da', kana: 'だ', romaji: ['da'], displayRomaji: 'da', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'D-Group' },
    { id: 'h_de', kana: 'で', romaji: ['de'], displayRomaji: 'de', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'D-Group' },
    { id: 'h_do', kana: 'ど', romaji: ['do'], displayRomaji: 'do', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'D-Group' },
    { id: 'k_da', kana: 'ダ', romaji: ['da'], displayRomaji: 'da', type: 'katakana', category: 'Dakuon (Voiced)', group: 'D-Group' },
    { id: 'k_de', kana: 'デ', romaji: ['de'], displayRomaji: 'de', type: 'katakana', category: 'Dakuon (Voiced)', group: 'D-Group' },
    { id: 'k_do', kana: 'ド', romaji: ['do'], displayRomaji: 'do', type: 'katakana', category: 'Dakuon (Voiced)', group: 'D-Group' },

    { id: 'h_ba', kana: 'ば', romaji: ['ba'], displayRomaji: 'ba', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'B-Group' },
    { id: 'h_bi', kana: 'び', romaji: ['bi'], displayRomaji: 'bi', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'B-Group' },
    { id: 'h_bu', kana: 'ぶ', romaji: ['bu'], displayRomaji: 'bu', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'B-Group' },
    { id: 'h_be', kana: 'べ', romaji: ['be'], displayRomaji: 'be', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'B-Group' },
    { id: 'h_bo', kana: 'ぼ', romaji: ['bo'], displayRomaji: 'bo', type: 'hiragana', category: 'Dakuon (Voiced)', group: 'B-Group' },
    { id: 'k_ba', kana: 'バ', romaji: ['ba'], displayRomaji: 'ba', type: 'katakana', category: 'Dakuon (Voiced)', group: 'B-Group' },
    { id: 'k_bi', kana: 'ビ', romaji: ['bi'], displayRomaji: 'bi', type: 'katakana', category: 'Dakuon (Voiced)', group: 'B-Group' },
    { id: 'k_bu', kana: 'ブ', romaji: ['bu'], displayRomaji: 'bu', type: 'katakana', category: 'Dakuon (Voiced)', group: 'B-Group' },
    { id: 'k_be', kana: 'ベ', romaji: ['be'], displayRomaji: 'be', type: 'katakana', category: 'Dakuon (Voiced)', group: 'B-Group' },
    { id: 'k_bo', kana: 'ボ', romaji: ['bo'], displayRomaji: 'bo', type: 'katakana', category: 'Dakuon (Voiced)', group: 'B-Group' },

    // Handakuon (P-Group)
    { id: 'h_pa', kana: 'ぱ', romaji: ['pa'], displayRomaji: 'pa', type: 'hiragana', category: 'Handakuon (Half-voiced)', group: 'P-Group' },
    { id: 'h_pi', kana: 'ぴ', romaji: ['pi'], displayRomaji: 'pi', type: 'hiragana', category: 'Handakuon (Half-voiced)', group: 'P-Group' },
    { id: 'h_pu', kana: 'ぷ', romaji: ['pu'], displayRomaji: 'pu', type: 'hiragana', category: 'Handakuon (Half-voiced)', group: 'P-Group' },
    { id: 'h_pe', kana: 'ぺ', romaji: ['pe'], displayRomaji: 'pe', type: 'hiragana', category: 'Handakuon (Half-voiced)', group: 'P-Group' },
    { id: 'h_po', kana: 'ぽ', romaji: ['po'], displayRomaji: 'po', type: 'hiragana', category: 'Handakuon (Half-voiced)', group: 'P-Group' },
    { id: 'k_pa', kana: 'パ', romaji: ['pa'], displayRomaji: 'pa', type: 'katakana', category: 'Handakuon (Half-voiced)', group: 'P-Group' },
    { id: 'k_pi', kana: 'ピ', romaji: ['pi'], displayRomaji: 'pi', type: 'katakana', category: 'Handakuon (Half-voiced)', group: 'P-Group' },
    { id: 'k_pu', kana: 'プ', romaji: ['pu'], displayRomaji: 'pu', type: 'katakana', category: 'Handakuon (Half-voiced)', group: 'P-Group' },
    { id: 'k_pe', kana: 'ペ', romaji: ['pe'], displayRomaji: 'pe', type: 'katakana', category: 'Handakuon (Half-voiced)', group: 'P-Group' },
    { id: 'k_po', kana: 'ポ', romaji: ['po'], displayRomaji: 'po', type: 'katakana', category: 'Handakuon (Half-voiced)', group: 'P-Group' },

    // Combination (Yoon)
    { id: 'h_kya', kana: 'きゃ', romaji: ['kya'], displayRomaji: 'kya', type: 'hiragana', category: 'Combination (Yōon)', group: 'KY-Group' },
    { id: 'h_kyu', kana: 'きゅ', romaji: ['kyu'], displayRomaji: 'kyu', type: 'hiragana', category: 'Combination (Yōon)', group: 'KY-Group' },
    { id: 'h_kyo', kana: 'きょ', romaji: ['kyo'], displayRomaji: 'kyo', type: 'hiragana', category: 'Combination (Yōon)', group: 'KY-Group' },
    { id: 'k_kya', kana: 'キャ', romaji: ['kya'], displayRomaji: 'kya', type: 'katakana', category: 'Combination (Yōon)', group: 'KY-Group' },
    { id: 'k_kyu', kana: 'キュ', romaji: ['kyu'], displayRomaji: 'kyu', type: 'katakana', category: 'Combination (Yōon)', group: 'KY-Group' },
    { id: 'k_kyo', kana: 'キョ', romaji: ['kyo'], displayRomaji: 'kyo', type: 'katakana', category: 'Combination (Yōon)', group: 'KY-Group' },

    { id: 'h_sha', kana: 'しゃ', romaji: ['sha', 'sya'], displayRomaji: 'sha', type: 'hiragana', category: 'Combination (Yōon)', group: 'SH-Group' },
    { id: 'h_shu', kana: 'しゅ', romaji: ['shu', 'syu'], displayRomaji: 'shu', type: 'hiragana', category: 'Combination (Yōon)', group: 'SH-Group' },
    { id: 'h_sho', kana: 'しょ', romaji: ['sho', 'syo'], displayRomaji: 'sho', type: 'hiragana', category: 'Combination (Yōon)', group: 'SH-Group' },
    { id: 'k_sha', kana: 'シャ', romaji: ['sha', 'sya'], displayRomaji: 'sha', type: 'katakana', category: 'Combination (Yōon)', group: 'SH-Group' },
    { id: 'k_shu', kana: 'シュ', romaji: ['shu', 'syu'], displayRomaji: 'shu', type: 'katakana', category: 'Combination (Yōon)', group: 'SH-Group' },
    { id: 'k_sho', kana: 'ショ', romaji: ['sho', 'syo'], displayRomaji: 'sho', type: 'katakana', category: 'Combination (Yōon)', group: 'SH-Group' },

    { id: 'h_cha', kana: 'ちゃ', romaji: ['cha', 'tya'], displayRomaji: 'cha', type: 'hiragana', category: 'Combination (Yōon)', group: 'CH-Group' },
    { id: 'h_chu', kana: 'ちゅ', romaji: ['chu', 'tyu'], displayRomaji: 'chu', type: 'hiragana', category: 'Combination (Yōon)', group: 'CH-Group' },
    { id: 'h_cho', kana: 'ちょ', romaji: ['cho', 'tyo'], displayRomaji: 'cho', type: 'hiragana', category: 'Combination (Yōon)', group: 'CH-Group' },
    { id: 'k_cha', kana: 'チャ', romaji: ['cha', 'tya'], displayRomaji: 'cha', type: 'katakana', category: 'Combination (Yōon)', group: 'CH-Group' },
    { id: 'k_chu', kana: 'チュ', romaji: ['chu', 'tyu'], displayRomaji: 'chu', type: 'katakana', category: 'Combination (Yōon)', group: 'CH-Group' },
    { id: 'k_cho', kana: 'チョ', romaji: ['cho', 'tyo'], displayRomaji: 'cho', type: 'katakana', category: 'Combination (Yōon)', group: 'CH-Group' },

    { id: 'h_nya', kana: 'にゃ', romaji: ['nya'], displayRomaji: 'nya', type: 'hiragana', category: 'Combination (Yōon)', group: 'NY-Group' },
    { id: 'h_nyu', kana: 'にゅ', romaji: ['nyu'], displayRomaji: 'nyu', type: 'hiragana', category: 'Combination (Yōon)', group: 'NY-Group' },
    { id: 'h_nyo', kana: 'にょ', romaji: ['nyo'], displayRomaji: 'nyo', type: 'hiragana', category: 'Combination (Yōon)', group: 'NY-Group' },
    { id: 'k_nya', kana: 'ニャ', romaji: ['nya'], displayRomaji: 'nya', type: 'katakana', category: 'Combination (Yōon)', group: 'NY-Group' },
    { id: 'k_nyu', kana: 'ニュ', romaji: ['nyu'], displayRomaji: 'nyu', type: 'katakana', category: 'Combination (Yōon)', group: 'NY-Group' },
    { id: 'k_nyo', kana: 'ニョ', romaji: ['nyo'], displayRomaji: 'nyo', type: 'katakana', category: 'Combination (Yōon)', group: 'NY-Group' },

    { id: 'h_hya', kana: 'ひゃ', romaji: ['hya'], displayRomaji: 'hya', type: 'hiragana', category: 'Combination (Yōon)', group: 'HY-Group' },
    { id: 'h_hyu', kana: 'ひゅ', romaji: ['hyu'], displayRomaji: 'hyu', type: 'hiragana', category: 'Combination (Yōon)', group: 'HY-Group' },
    { id: 'h_hyo', kana: 'ひょ', romaji: ['hyo'], displayRomaji: 'hyo', type: 'hiragana', category: 'Combination (Yōon)', group: 'HY-Group' },
    { id: 'k_hya', kana: 'ヒャ', romaji: ['hya'], displayRomaji: 'hya', type: 'katakana', category: 'Combination (Yōon)', group: 'HY-Group' },
    { id: 'k_hyu', kana: 'ヒュ', romaji: ['hyu'], displayRomaji: 'hyu', type: 'katakana', category: 'Combination (Yōon)', group: 'HY-Group' },
    { id: 'k_hyo', kana: 'ヒョ', romaji: ['hyo'], displayRomaji: 'hyo', type: 'katakana', category: 'Combination (Yōon)', group: 'HY-Group' },

    { id: 'h_mya', kana: 'みゃ', romaji: ['mya'], displayRomaji: 'mya', type: 'hiragana', category: 'Combination (Yōon)', group: 'MY-Group' },
    { id: 'h_myu', kana: 'みゅ', romaji: ['myu'], displayRomaji: 'myu', type: 'hiragana', category: 'Combination (Yōon)', group: 'MY-Group' },
    { id: 'h_myo', kana: 'みょ', romaji: ['myo'], displayRomaji: 'myo', type: 'hiragana', category: 'Combination (Yōon)', group: 'MY-Group' },
    { id: 'k_mya', kana: 'ミャ', romaji: ['mya'], displayRomaji: 'mya', type: 'katakana', category: 'Combination (Yōon)', group: 'MY-Group' },
    { id: 'k_myu', kana: 'ミュ', romaji: ['myu'], displayRomaji: 'myu', type: 'katakana', category: 'Combination (Yōon)', group: 'MY-Group' },
    { id: 'k_myo', kana: 'ミョ', romaji: ['myo'], displayRomaji: 'myo', type: 'katakana', category: 'Combination (Yōon)', group: 'MY-Group' },

    { id: 'h_rya', kana: 'りゃ', romaji: ['rya'], displayRomaji: 'rya', type: 'hiragana', category: 'Combination (Yōon)', group: 'RY-Group' },
    { id: 'h_ryu', kana: 'りゅ', romaji: ['ryu'], displayRomaji: 'ryu', type: 'hiragana', category: 'Combination (Yōon)', group: 'RY-Group' },
    { id: 'h_ryo', kana: 'りょ', romaji: ['ryo'], displayRomaji: 'ryo', type: 'hiragana', category: 'Combination (Yōon)', group: 'RY-Group' },
    { id: 'k_rya', kana: 'リャ', romaji: ['rya'], displayRomaji: 'rya', type: 'katakana', category: 'Combination (Yōon)', group: 'RY-Group' },
    { id: 'k_ryu', kana: 'リュ', romaji: ['ryu'], displayRomaji: 'ryu', type: 'katakana', category: 'Combination (Yōon)', group: 'RY-Group' },
    { id: 'k_ryo', kana: 'リョ', romaji: ['ryo'], displayRomaji: 'ryo', type: 'katakana', category: 'Combination (Yōon)', group: 'RY-Group' },

    { id: 'h_gya', kana: 'ぎゃ', romaji: ['gya'], displayRomaji: 'gya', type: 'hiragana', category: 'Combination (Yōon)', group: 'GY-Group' },
    { id: 'h_gyu', kana: 'ぎゅ', romaji: ['gyu'], displayRomaji: 'gyu', type: 'hiragana', category: 'Combination (Yōon)', group: 'GY-Group' },
    { id: 'h_gyo', kana: 'ぎょ', romaji: ['gyo'], displayRomaji: 'gyo', type: 'hiragana', category: 'Combination (Yōon)', group: 'GY-Group' },
    { id: 'k_gya', kana: 'ギャ', romaji: ['gya'], displayRomaji: 'gya', type: 'katakana', category: 'Combination (Yōon)', group: 'GY-Group' },
    { id: 'k_gyu', kana: 'ギュ', romaji: ['gyu'], displayRomaji: 'gyu', type: 'katakana', category: 'Combination (Yōon)', group: 'GY-Group' },
    { id: 'k_gyo', kana: 'ギョ', romaji: ['gyo'], displayRomaji: 'gyo', type: 'katakana', category: 'Combination (Yōon)', group: 'GY-Group' },

    { id: 'h_ja', kana: 'じゃ', romaji: ['ja', 'zya', 'jya'], displayRomaji: 'ja', type: 'hiragana', category: 'Combination (Yōon)', group: 'J-Group' },
    { id: 'h_ju', kana: 'じゅ', romaji: ['ju', 'zyu', 'jyu'], displayRomaji: 'ju', type: 'hiragana', category: 'Combination (Yōon)', group: 'J-Group' },
    { id: 'h_jo', kana: 'じょ', romaji: ['jo', 'zyo', 'jyo'], displayRomaji: 'jo', type: 'hiragana', category: 'Combination (Yōon)', group: 'J-Group' },
    { id: 'k_ja', kana: 'ジャ', romaji: ['ja', 'zya', 'jya'], displayRomaji: 'ja', type: 'katakana', category: 'Combination (Yōon)', group: 'J-Group' },
    { id: 'k_ju', kana: 'ジュ', romaji: ['ju', 'zyu', 'jyu'], displayRomaji: 'ju', type: 'katakana', category: 'Combination (Yōon)', group: 'J-Group' },
    { id: 'k_jo', kana: 'ジョ', romaji: ['jo', 'zyo', 'jyo'], displayRomaji: 'jo', type: 'katakana', category: 'Combination (Yōon)', group: 'J-Group' },

    { id: 'h_bya', kana: 'びゃ', romaji: ['bya'], displayRomaji: 'bya', type: 'hiragana', category: 'Combination (Yōon)', group: 'BY-Group' },
    { id: 'h_byu', kana: 'びゅ', romaji: ['byu'], displayRomaji: 'byu', type: 'hiragana', category: 'Combination (Yōon)', group: 'BY-Group' },
    { id: 'h_byo', kana: 'びょ', romaji: ['byo'], displayRomaji: 'byo', type: 'hiragana', category: 'Combination (Yōon)', group: 'BY-Group' },
    { id: 'k_bya', kana: 'ビャ', romaji: ['bya'], displayRomaji: 'bya', type: 'katakana', category: 'Combination (Yōon)', group: 'BY-Group' },
    { id: 'k_byu', kana: 'ビュ', romaji: ['byu'], displayRomaji: 'byu', type: 'katakana', category: 'Combination (Yōon)', group: 'BY-Group' },
    { id: 'k_byo', kana: 'ビョ', romaji: ['byo'], displayRomaji: 'byo', type: 'katakana', category: 'Combination (Yōon)', group: 'BY-Group' },

    { id: 'h_pya', kana: 'ぴゃ', romaji: ['pya'], displayRomaji: 'pya', type: 'hiragana', category: 'Combination (Yōon)', group: 'PY-Group' },
    { id: 'h_pyu', kana: 'ぴゅ', romaji: ['pyu'], displayRomaji: 'pyu', type: 'hiragana', category: 'Combination (Yōon)', group: 'PY-Group' },
    { id: 'h_pyo', kana: 'ぴょ', romaji: ['pyo'], displayRomaji: 'pyo', type: 'hiragana', category: 'Combination (Yōon)', group: 'PY-Group' },
    { id: 'k_pya', kana: 'ピャ', romaji: ['pya'], displayRomaji: 'pya', type: 'katakana', category: 'Combination (Yōon)', group: 'PY-Group' },
    { id: 'k_pyu', kana: 'ピュ', romaji: ['pyu'], displayRomaji: 'pyu', type: 'katakana', category: 'Combination (Yōon)', group: 'PY-Group' },
    { id: 'k_pyo', kana: 'ピョ', romaji: ['pyo'], displayRomaji: 'pyo', type: 'katakana', category: 'Combination (Yōon)', group: 'PY-Group' }
];

// State variables
let selectedIds = new Set(KANA_DATA.filter(k => k.type === 'hiragana' && k.category === 'Basic (Seion)').map(k => k.id));
let activeQuizItems = [];
let currentIndex = 0;
let userAnswers = {}; // id -> { userVal, isCorrect }
let isQuizFinished = false;
let activeTab = 'hiragana';
let isInstantDeathMode = false;

// Auto-starting Timer logic
const QUIZ_DURATION = 300; // 5 minutes in seconds
let timerSeconds = QUIZ_DURATION;
let timerInterval = null;
let isTimerRunning = false;
let hasTimerStartedForQuiz = false;

// Audio Context
let audioCtx = null;
function playTone(freq, type, duration) {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch(e) {}
}
function playCorrectSound() {
    playTone(523.25, 'sine', 0.15);
    setTimeout(() => playTone(659.25, 'sine', 0.2), 100);
}

function playQuizClearSound() {
    const notes = [523.25, 659.25, 783.99, 932.33, 1046.5];

    notes.forEach((freq, index) => {
        setTimeout(() => playTone(freq, 'sine', 0.20), index * 150);
    });
}
function playWrongSound() {
    playTone(180, 'sawtooth', 0.3);
}

// DOM elements
const quizCardSection = document.getElementById('quizCardSection');
const tableContainer = document.getElementById('tableContainer');
const activeCountLabel = document.getElementById('activeCountLabel');

const instantDeathToggle = document.getElementById('instantDeathToggle');
const settingsModal = document.getElementById('settingsModal');
const settingsBtn = document.getElementById('settingsBtn');
const closeSettingsCross = document.getElementById('closeSettingsCross');
const cancelSettingsBtn = document.getElementById('cancelSettingsBtn');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const settingsGridContainer = document.getElementById('settingsGridContainer');
const selectedCountText = document.getElementById('selectedCountText');

const tabHiragana = document.getElementById('tabHiragana');
const tabKatakana = document.getElementById('tabKatakana');
const tabBadgeHiragana = document.getElementById('tabBadgeHiragana');
const tabBadgeKatakana = document.getElementById('tabBadgeKatakana');

const filterHiraganaOnly = document.getElementById('filterHiraganaOnly');
const filterKatakanaOnly = document.getElementById('filterKatakanaOnly');
const filterBoth = document.getElementById('filterBoth');
const selectAllBtn = document.getElementById('selectAllBtn');
const deselectAllBtn = document.getElementById('deselectAllBtn');

const themeToggleBtn = document.getElementById('themeToggleBtn');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && isQuizFinished) {
        event.preventDefault();
        initQuiz();
    }
});

// Instant Death Toggle Listener
instantDeathToggle.addEventListener('change', (e) => {
    isInstantDeathMode = e.target.checked;
    initQuiz();
});

// Theme Toggle
themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    sunIcon.classList.toggle('hidden', !isDark);
    moonIcon.classList.toggle('hidden', isDark);
});

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function initQuiz() {
    const filtered = KANA_DATA.filter(k => selectedIds.has(k.id));
    activeQuizItems = filtered.length === 0 ? [] : shuffleArray(filtered);

    currentIndex = 0;
    userAnswers = {};
    isQuizFinished = false;

    stopTimer();
    hasTimerStartedForQuiz = false;
    timerSeconds = QUIZ_DURATION;

    renderMainCard();
    renderPracticeTable();
    activeCountLabel.textContent = `${activeQuizItems.length} Symbols Active`;
}

function setTimerBadge(text, colorClasses) {
    const timerStatusBadge = document.getElementById('timerStatusBadge');
    if (!timerStatusBadge) return;
    timerStatusBadge.textContent = text;
    timerStatusBadge.className = `text-[10px] font-semibold px-1.5 py-0.5 rounded ${colorClasses}`;
}

function getScriptLabel(type) {
    return type === 'hiragana' ? 'hiragana' : 'katakana';
}

function getCategoryDetails() {
    if (!activeQuizItems.length) return [];
    return [...new Set(activeQuizItems.map(item => `${getScriptLabel(item.type)} • ${item.category}`))];
}

// Formats the compact summary label shown in the quiz header.
function formatCategory(type, category) {
    const activeScripts = [...new Set(activeQuizItems.map(item => getScriptLabel(item.type)))];
    const currentScript = getScriptLabel(type);

    if (activeScripts.length === 0) {
        return currentScript;
    }

    if (activeScripts.length === 1) {
        return activeScripts[0];
    }

    return 'hiragana • katakana';
}

// Render Main Practice Card
function renderMainCard() {
    if (activeQuizItems.length === 0) {
        quizCardSection.innerHTML = `
            <div class="text-center py-8 space-y-4">
                <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto text-slate-400">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-slate-700 dark:text-slate-200">No Kana Selected</h3>
                <p class="text-sm text-slate-500 max-w-md mx-auto">Please open settings to select the Hiragana or Katakana characters you would like to practice.</p>
                <button onclick="openSettingsModal()" type="button" class="px-5 py-2.5 bg-sakura-500 hover:bg-sakura-600 text-white font-semibold rounded-xl transition shadow-md shadow-sakura-500/20">
                    Open Settings
                </button>
            </div>
        `;
        return;
    }

    if (isQuizFinished) {
        renderCompletionCard();
        return;
    }

    const item = activeQuizItems[currentIndex];
    const answerState = userAnswers[item.id];
    const isAnswered = !!answerState;
    const scoreValue = Object.values(userAnswers).filter(a => a.isCorrect).length;
    const categoryDetails = getCategoryDetails();
    const categoryTitle = categoryDetails.length ? categoryDetails.join('\n') : formatCategory(item.type, item.category);

    quizCardSection.innerHTML = `
        <div class="w-full max-w-md flex flex-col items-center space-y-6">
            <div class="flex items-center justify-between w-full text-xs text-slate-400 font-medium">
                <div class="flex items-center space-x-3">
                    <span>ITEM ${currentIndex + 1} OF ${activeQuizItems.length}</span>
                    <!-- Timer moved inside main content card beside Item counter -->
                    <div class="flex items-center space-x-1.5 bg-slate-100 dark:bg-slate-700/60 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-600">
                        <svg id="timerClockIcon" class="w-3.5 h-3.5 text-sakura-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span id="timerDisplay" class="font-mono text-xs font-bold text-slate-700 dark:text-slate-200">05:00</span>
                        <span id="timerStatusBadge" class="text-[9px] font-semibold px-1 py-0.2 rounded bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300">Ready</span>
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 font-semibold">
                        Score ${scoreValue}
                    </span>
                    <span title="${categoryTitle}" class="px-2 py-0.5 rounded ${item.type === 'hiragana' ? 'bg-sakura-100 text-sakura-700 dark:bg-sakura-900/50 dark:text-sakura-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300'} font-semibold border border-slate-200/60 dark:border-slate-600/60 cursor-help">
                        ${formatCategory(item.type, item.category)}
                    </span>
                </div>
            </div>

            <!-- Kana Symbol Display Card -->
            <button id="symbolClickBtn" type="button" title="Click for Next Symbol" class="group relative flex items-center justify-center p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-700 hover:border-sakura-300 dark:hover:border-sakura-600 transition bg-slate-50/50 dark:bg-slate-800/50 w-full max-w-[280px] h-[160px] cursor-pointer shadow-inner overflow-hidden">
                <span class="kana-font text-7xl font-bold tracking-normal leading-none inline-flex flex-nowrap items-center justify-center whitespace-nowrap group-hover:scale-105 transition-transform duration-200 select-none ${item.type === 'hiragana' ? 'text-sakura-600 dark:text-sakura-400' : 'text-rose-600 dark:text-rose-400'}">
                    ${item.kana}
                </span>
                <span class="absolute bottom-2 right-3 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition">Click for Next →</span>
            </button>

            <!-- Input Form -->
            <div class="w-full space-y-3">
                <div class="relative">
                    <input id="romajiInput" type="text" autocomplete="off" placeholder="${isInstantDeathMode ? 'Type Romaji and press Enter...' : 'Type Romaji (e.g. ka)...'}" 
                        class="w-full px-5 py-3.5 text-center text-xl font-bold rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:outline-none focus:border-sakura-500 dark:focus:border-sakura-400 transition shadow-sm ${isAnswered ? 'opacity-60' : ''}"
                        ${isAnswered ? 'disabled' : ''} />
                </div>

                <!-- Action Controls -->
                <div class="grid grid-cols-2 gap-3">
                    <button id="previousBtn" type="button" class="py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-sm transition">
                        ← Previous
                    </button>
                    <button id="nextBtn" type="button" class="py-2.5 px-4 rounded-xl bg-slate-800 dark:bg-slate-200 hover:bg-slate-900 dark:hover:bg-white text-white dark:text-slate-900 font-semibold text-sm transition shadow-sm">
                        Next →
                    </button>
                </div>

                <!-- Give Up Button -->
                <button id="giveUpBtn" type="button" class="w-full py-2.5 px-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/60 font-semibold text-sm transition">
                    Give Up & Reveal Answers
                </button>
            </div>
        </div>
    `;

    updateTimerDisplay();
    const input = document.getElementById('romajiInput');
    input.focus();

    if (isAnswered) {
        input.value = answerState.userVal;
    }

    input.addEventListener('input', (e) => {
        const val = e.target.value.trim().toLowerCase();
        
        if (val.length > 0 && !hasTimerStartedForQuiz && !isQuizFinished) {
            hasTimerStartedForQuiz = true;
            startTimer();
        }

        if (!isInstantDeathMode) {
            checkInput(val);
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const val = input.value.trim().toLowerCase();

            if (isInstantDeathMode) {
                if (val.length > 0 && !hasTimerStartedForQuiz && !isQuizFinished) {
                    hasTimerStartedForQuiz = true;
                    startTimer();
                }
                submitInstantDeathAnswer(val);
            } else {
                advanceNext();
            }
        }
    });

    document.getElementById('symbolClickBtn').addEventListener('click', advanceNext);
    document.getElementById('previousBtn').addEventListener('click', goPrevious);
    document.getElementById('nextBtn').addEventListener('click', advanceNext);
    document.getElementById('giveUpBtn').addEventListener('click', autoGiveUp);
}

function submitInstantDeathAnswer(val) {
    if (isQuizFinished || !val) return;
    const item = activeQuizItems[currentIndex];

    if (item.romaji.includes(val)) {
        userAnswers[item.id] = { userVal: val, isCorrect: true };
        playCorrectSound();
        renderPracticeTable();

        if (Object.keys(userAnswers).length === activeQuizItems.length) {
            finishQuiz();
        } else {
            advanceNext();
        }
    } else {
        userAnswers[item.id] = { userVal: val, isCorrect: false };
        playWrongSound();
        triggerInstantDeathLoss();
    }
}

function triggerInstantDeathLoss() {
    isQuizFinished = true;
    stopTimer();
    setTimerBadge('Defeated', 'bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300');

    activeQuizItems.forEach(item => {
        if (!userAnswers[item.id]) {
            userAnswers[item.id] = { userVal: '', isCorrect: false };
        }
    });

    renderMainCard();
    renderPracticeTable();
}

function renderCompletionCard() {
    const correctCount = Object.values(userAnswers).filter(a => a.isCorrect).length;
    const totalCount = activeQuizItems.length;
    const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    const timeSpent = QUIZ_DURATION - timerSeconds;
    const mins = Math.floor(timeSpent / 60);
    const secs = timeSpent % 60;

    const isDeathLoss = isInstantDeathMode && Object.values(userAnswers).some(a => !a.isCorrect);

    quizCardSection.innerHTML = `
        <div class="w-full max-w-md flex flex-col items-center text-center space-y-5 py-4">
            <div class="w-16 h-16 rounded-2xl ${isDeathLoss ? 'bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400' : 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400'} flex items-center justify-center text-3xl font-bold shadow-sm">
                ${isDeathLoss ? '💀' : '🎉'}
            </div>

            <div>
                <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-100">${isDeathLoss ? 'Instant Death Mode - Game Over!' : 'Practice Completed!'}</h2>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Check your reference table below for full answers.</p>
            </div>

            <div class="grid grid-cols-3 gap-3 w-full my-2">
                <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600">
                    <div class="text-[10px] text-slate-400 font-semibold uppercase">Score</div>
                    <div class="text-lg font-bold text-slate-700 dark:text-slate-200">${correctCount} / ${totalCount}</div>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600">
                    <div class="text-[10px] text-slate-400 font-semibold uppercase">Accuracy</div>
                    <div class="text-lg font-bold text-emerald-600 dark:text-emerald-400">${accuracy}%</div>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600">
                    <div class="text-[10px] text-slate-400 font-semibold uppercase">Time</div>
                    <div class="text-lg font-bold text-slate-700 dark:text-slate-200">${mins}m ${secs}s</div>
                </div>
            </div>

            <button id="restartQuizBtn" type="button" class="w-full py-3 px-6 rounded-xl bg-sakura-500 hover:bg-sakura-600 text-white font-bold transition shadow-md shadow-sakura-500/20">
                Restart Quiz 🔄
            </button>
        </div>
    `;

    document.getElementById('restartQuizBtn').addEventListener('click', initQuiz);
}

function checkInput(val) {
    if (isQuizFinished || !val) return;
    const item = activeQuizItems[currentIndex];

    if (item.romaji.includes(val)) {
        userAnswers[item.id] = { userVal: val, isCorrect: true };
        renderPracticeTable();

        if (Object.keys(userAnswers).length === activeQuizItems.length) {
            finishQuiz();
        } else {
            playCorrectSound();
            advanceNext();
        }
    }
}

function goPrevious() {
    if (isQuizFinished || activeQuizItems.length === 0) return;

    currentIndex = currentIndex === 0 ? activeQuizItems.length - 1 : currentIndex - 1;
    renderMainCard();
}

function advanceNext() {
    if (isQuizFinished || activeQuizItems.length === 0) return;

    let next = (currentIndex + 1) % activeQuizItems.length;
    let attempts = 0;
    while (userAnswers[activeQuizItems[next]?.id] && attempts < activeQuizItems.length) {
        next = (next + 1) % activeQuizItems.length;
        attempts++;
    }

    currentIndex = next;
    renderMainCard();
}

function autoGiveUp() {
    autoFinishWithGiveUp();
}

function autoFinishWithGiveUp() {
    isQuizFinished = true;
    stopTimer();
    setTimerBadge('Timed Out', 'bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300');

    activeQuizItems.forEach(item => {
        if (!userAnswers[item.id]) {
            userAnswers[item.id] = { userVal: '', isCorrect: false };
        }
    });

    renderMainCard();
    renderPracticeTable();
}

function finishQuiz() {
    isQuizFinished = true;
    stopTimer();
    setTimerBadge('Finished', 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300');

    activeQuizItems.forEach(item => {
        if (!userAnswers[item.id]) {
            userAnswers[item.id] = { userVal: '', isCorrect: false };
        }
    });

    playQuizClearSound();
    renderMainCard();
    renderPracticeTable();
}

// Render Table (Max 3 Columns Enforced)
function renderPracticeTable() {
    if (activeQuizItems.length === 0) {
        tableContainer.innerHTML = `<p class="text-center text-slate-400 py-8 text-sm">No items selected.</p>`;
        return;
    }

    const maxColumns = 3;
    const totalItems = activeQuizItems.length;
    const numColumns = Math.min(maxColumns, Math.ceil(totalItems / 15));
    const itemsPerCol = Math.ceil(totalItems / numColumns);

    let columnsHTML = '';

    for (let c = 0; c < numColumns; c++) {
        const colItems = activeQuizItems.slice(c * itemsPerCol, (c + 1) * itemsPerCol);

        let rowsHTML = colItems.map((item, idx) => {
            const globalIdx = c * itemsPerCol + idx;
            const ans = userAnswers[item.id];
            const isCurrent = globalIdx === currentIndex && !isQuizFinished;

            let statusClass = 'border-slate-100 dark:border-slate-700/60 hover:bg-slate-50 dark:hover:bg-slate-700/40';
            if (isCurrent) {
                statusClass = 'border-sakura-300 dark:border-sakura-600 bg-sakura-50/60 dark:bg-sakura-900/20 ring-1 ring-sakura-400';
            }
            if (ans) {
                if (ans.isCorrect) {
                    statusClass = 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200';
                } else {
                    statusClass = 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800/60 text-rose-900 dark:text-rose-200';
                }
            }

            return `
                <tr onclick="jumpToItem(${globalIdx})" class="cursor-pointer transition-colors border-b last:border-b-0 ${statusClass}">
                    <td class="py-2 px-3 text-center text-xs font-semibold text-slate-400 w-8">${globalIdx + 1}</td>
                    <td class="py-2 px-3 text-center kana-font text-2xl font-bold ${item.type === 'hiragana' ? 'text-sakura-600 dark:text-sakura-400' : 'text-rose-600 dark:text-rose-400'}">
                        ${item.kana}
                    </td>
                    <td class="py-2 px-3 text-sm font-mono font-medium text-slate-600 dark:text-slate-300">
                        ${isQuizFinished || (ans && ans.isCorrect) ? `<span class="font-bold text-emerald-600 dark:text-emerald-400">${item.displayRomaji}</span>` : '???'}
                    </td>
                    <td class="py-2 px-3 text-right">
                        ${ans ? (ans.isCorrect ? 
                            '<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">✓</span>' : 
                            '<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300">✕</span>') : 
                            '<span class="text-[10px] text-slate-300">—</span>'}
                    </td>
                </tr>
            `;
        }).join('');

        columnsHTML += `
            <div class="flex-1 min-w-[220px]">
                <table class="w-full text-left border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                    <thead>
                        <tr class="bg-slate-100 dark:bg-slate-700/50 text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                            <th class="py-2 px-3 text-center">#</th>
                            <th class="py-2 px-3 text-center">Symbol</th>
                            <th class="py-2 px-3">Romaji</th>
                            <th class="py-2 px-3 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHTML}
                    </tbody>
                </table>
            </div>
        `;
    }

    tableContainer.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${columnsHTML}</div>`;
}

window.jumpToItem = function(index) {
    if (isQuizFinished) return;
    currentIndex = index;
    renderMainCard();
};

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) timerDisplay.textContent = timeStr;
}

function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    
    setTimerBadge('Active', 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300');
    const timerClockIcon = document.getElementById('timerClockIcon');
    if (timerClockIcon) timerClockIcon.classList.add('animate-pulse');

    timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
            timerSeconds--;
            updateTimerDisplay();
        } else {
            stopTimer();
            autoGiveUp();
        }
    }, 1000);
}

function stopTimer() {
    isTimerRunning = false;
    const timerClockIcon = document.getElementById('timerClockIcon');
    if (timerClockIcon) timerClockIcon.classList.remove('animate-pulse');
    clearInterval(timerInterval);
}

// Settings Modal Controls
function openSettingsModal() {
    renderSettingsGrid();
    updateSettingsCount();
    settingsModal.classList.remove('hidden');
    setTimeout(() => {
        settingsModal.classList.remove('opacity-0');
        settingsModal.children[0].classList.remove('scale-95');
    }, 10);
}

function closeSettingsModal() {
    settingsModal.classList.add('opacity-0');
    settingsModal.children[0].classList.add('scale-95');
    setTimeout(() => settingsModal.classList.add('hidden'), 200);
}

settingsBtn.addEventListener('click', openSettingsModal);
closeSettingsCross.addEventListener('click', closeSettingsModal);
cancelSettingsBtn.addEventListener('click', closeSettingsModal);

tabHiragana.addEventListener('click', () => {
    activeTab = 'hiragana';
    updateTabStyles();
    renderSettingsGrid();
});

tabKatakana.addEventListener('click', () => {
    activeTab = 'katakana';
    updateTabStyles();
    renderSettingsGrid();
});

function updateTabStyles() {
    if (activeTab === 'hiragana') {
        tabHiragana.className = "px-4 py-2 text-sm font-bold rounded-t-xl border-b-2 transition flex items-center space-x-2 border-sakura-500 bg-white dark:bg-slate-800 text-sakura-600 dark:text-sakura-400 shadow-sm";
        tabKatakana.className = "px-4 py-2 text-sm font-bold rounded-t-xl border-b-2 transition flex items-center space-x-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200";
    } else {
        tabKatakana.className = "px-4 py-2 text-sm font-bold rounded-t-xl border-b-2 transition flex items-center space-x-2 border-rose-500 bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 shadow-sm";
        tabHiragana.className = "px-4 py-2 text-sm font-bold rounded-t-xl border-b-2 transition flex items-center space-x-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200";
    }
}

saveSettingsBtn.addEventListener('click', () => {
    closeSettingsModal();
    initQuiz();
});

filterHiraganaOnly.addEventListener('click', () => {
    selectedIds.clear();
    KANA_DATA.filter(k => k.type === 'hiragana').forEach(k => selectedIds.add(k.id));
    renderSettingsGrid();
    updateSettingsCount();
});

filterKatakanaOnly.addEventListener('click', () => {
    selectedIds.clear();
    KANA_DATA.filter(k => k.type === 'katakana').forEach(k => selectedIds.add(k.id));
    renderSettingsGrid();
    updateSettingsCount();
});

filterBoth.addEventListener('click', () => {
    KANA_DATA.forEach(k => selectedIds.add(k.id));
    renderSettingsGrid();
    updateSettingsCount();
});

selectAllBtn.addEventListener('click', () => {
    KANA_DATA.filter(k => k.type === activeTab).forEach(k => selectedIds.add(k.id));
    renderSettingsGrid();
    updateSettingsCount();
});

deselectAllBtn.addEventListener('click', () => {
    KANA_DATA.filter(k => k.type === activeTab).forEach(k => selectedIds.delete(k.id));
    renderSettingsGrid();
    updateSettingsCount();
});

function updateSettingsCount() {
    const hCount = KANA_DATA.filter(k => k.type === 'hiragana' && selectedIds.has(k.id)).length;
    const kCount = KANA_DATA.filter(k => k.type === 'katakana' && selectedIds.has(k.id)).length;
    
    tabBadgeHiragana.textContent = hCount;
    tabBadgeKatakana.textContent = kCount;
    selectedCountText.textContent = `${selectedIds.size} symbols total selected`;
}

function renderSettingsGrid() {
    const items = KANA_DATA.filter(k => k.type === activeTab);
    const categories = [...new Set(items.map(k => k.category))];

    let html = '';

    categories.forEach(cat => {
        const catItems = items.filter(k => k.category === cat);
        const groups = [...new Set(catItems.map(k => k.group))];

        html += `
            <div class="space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-1.5">
                    <h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center space-x-2">
                        <span class="w-2 h-2 rounded-full ${activeTab === 'hiragana' ? 'bg-sakura-500' : 'bg-rose-500'}"></span>
                        <span>${cat}</span>
                    </h4>
                    <button onclick="toggleCategoryGroup('${activeTab}', '${cat}')" type="button" class="text-[11px] font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 bg-slate-200/60 dark:bg-slate-700/60 px-2 py-0.5 rounded transition">
                        Toggle Section
                    </button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        `;

        groups.forEach(grp => {
            const groupItems = catItems.filter(k => k.group === grp);
            const allGrpSelected = groupItems.every(k => selectedIds.has(k.id));

            html += `
                <div class="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${grp}</span>
                        <button onclick="toggleSubGroup('${grp}', '${activeTab}')" type="button" class="text-[10px] font-bold text-sakura-600 dark:text-sakura-400 hover:underline">
                            ${allGrpSelected ? 'Deselect' : 'Select'}
                        </button>
                    </div>
                    <div class="grid grid-cols-5 gap-1.5">
            `;

            groupItems.forEach(k => {
                const isSel = selectedIds.has(k.id);
                const selClass = isSel ? 
                    (activeTab === 'hiragana' ? 
                        'bg-sakura-500 text-white border-sakura-500 shadow-sm shadow-sakura-500/30' : 
                        'bg-rose-500 text-white border-rose-500 shadow-sm shadow-rose-500/30') : 
                    'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300';

                html += `
                    <div data-id="${k.id}" onclick="toggleSingleKana('${k.id}')" 
                        class="kana-card cursor-pointer p-1.5 rounded-lg border text-center transition transform active:scale-95 select-none ${selClass}">
                        <div class="kana-font text-xl font-bold leading-none mb-1">${k.kana}</div>
                        <div class="text-[10px] font-mono opacity-80 leading-none">${k.displayRomaji}</div>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    settingsGridContainer.innerHTML = html + `<div id="dragSelectBox" class="hidden"></div>`;
    updateSettingsCount();
}

window.toggleSingleKana = function(id) {
    if (selectedIds.has(id)) selectedIds.delete(id);
    else selectedIds.add(id);
    renderSettingsGrid();
    updateSettingsCount();
};

window.toggleSubGroup = function(grp, type) {
    const items = KANA_DATA.filter(k => k.group === grp && k.type === type);
    const allSel = items.every(k => selectedIds.has(k.id));
    items.forEach(k => {
        if (allSel) selectedIds.delete(k.id);
        else selectedIds.add(k.id);
    });
    renderSettingsGrid();
    updateSettingsCount();
};

window.toggleCategoryGroup = function(type, cat) {
    const items = KANA_DATA.filter(k => k.type === type && k.category === cat);
    const allSel = items.every(k => selectedIds.has(k.id));
    items.forEach(k => {
        if (allSel) selectedIds.delete(k.id);
        else selectedIds.add(k.id);
    });
    renderSettingsGrid();
    updateSettingsCount();
};

// Drag-select support in Settings
let isDragging = false;
let startX = 0, startY = 0;

settingsGridContainer.addEventListener('mousedown', (e) => {
    if (e.target.closest('.kana-card') || e.target.closest('button')) return;
    isDragging = true;
    const rect = settingsGridContainer.getBoundingClientRect();
    startX = e.clientX - rect.left + settingsGridContainer.scrollLeft;
    startY = e.clientY - rect.top + settingsGridContainer.scrollTop;

    const box = document.getElementById('dragSelectBox');
    if (box) {
        box.style.left = `${startX}px`;
        box.style.top = `${startY}px`;
        box.style.width = '0px';
        box.style.height = '0px';
        box.classList.remove('hidden');
    }
});

settingsGridContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const rect = settingsGridContainer.getBoundingClientRect();
    const currentX = e.clientX - rect.left + settingsGridContainer.scrollLeft;
    const currentY = e.clientY - rect.top + settingsGridContainer.scrollTop;

    const width = Math.abs(currentX - startX);
    const height = Math.abs(currentY - startY);
    const left = Math.min(startX, currentX);
    const top = Math.min(startY, currentY);

    const box = document.getElementById('dragSelectBox');
    if (box) {
        box.style.left = `${left}px`;
        box.style.top = `${top}px`;
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
    }
});

window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const box = document.getElementById('dragSelectBox');
    if (!box) return;

    const boxRect = box.getBoundingClientRect();
    box.classList.add('hidden');

    if (boxRect.width > 10 && boxRect.height > 10) {
        const cards = settingsGridContainer.querySelectorAll('.kana-card');
        cards.forEach(card => {
            const cRect = card.getBoundingClientRect();
            const isIntersect = !(cRect.right < boxRect.left || 
                                  cRect.left > boxRect.right || 
                                  cRect.bottom < boxRect.top || 
                                  cRect.top > boxRect.bottom);

            if (isIntersect) {
                const id = card.getAttribute('data-id');
                if (id) selectedIds.add(id);
            }
        });
        renderSettingsGrid();
        updateSettingsCount();
    }
});


// Initialize application
initQuiz();