const alphabetEn =
  'сСsS' +
  'фФfF' +
  'хХhH' +
  'кКkK' +
  'лЛlL' +
  'мМmM' +
  'нНnN' +
  'оОoO' +
  'пПpP' +
  'рРrR' +
  'сСsS' +
  'тТtT' +
  'уУuU' +
  'ыЫyY'

const replaceEn = [
  ['а', 'a'],
  ['А', 'A'],
  ['б', 'b'],
  ['Б', 'B'],
  ['в', 'v'],
  ['В', 'V'],
  ['г', 'g'],
  ['Г', 'G'],
  ['д', 'd'],
  ['Д', 'D'],
  ['е', 'e'],
  ['Е', 'E'],
  ['з', 'z'],
  ['З', 'Z'],
  ['и', 'i'],
  ['И', 'I'],
  ['к', 'k'],
  ['К', 'K'],
  ['л', 'l'],
  ['Л', 'L'],
  ['м', 'm'],
  ['М', 'M'],
  ['н', 'n'],
  ['Н', 'N'],
  ['о', 'o'],
  ['О', 'O'],
  ['п', 'p'],
  ['П', 'P'],
  ['р', 'r'],
  ['Р', 'R'],
  ['с', 's'],
  ['С', 'S'],
  ['т', 't'],
  ['Т', 'T'],
  ['у', 'u'],
  ['У', 'U'],
  ['ф', 'f'],
  ['Ф', 'F'],
  ['х', 'h'],
  ['Х', 'H'],
  ['Ш', 'Sh'],
  ['ш', 'sh'],
  ['щ', 'shch'],
  ['Щ', 'Shch'],
  ['ж', 'zh'],
  ['Ж', 'Zh'],
  ['щ', 'sh'],
  ['ч', 'ch'],
  ['Ч', 'Ch'],
  ['я', 'ya'],
  ['Я', 'Ya'],
  ['ё', 'yo'],
  ['Ё', 'Yo'],
  ['ь', ''],
  ['Ь', ''],
  ['ы', 'y'],
  ['Ы', 'Y'],
  ['Ц', 'ts'],
  ['ц', 'ts'],
]

export const translate = (ruText: string, notation: 'EN' | 'DE'): string => {
  var result = ''

  for (let i = 0; i < ruText.length; i++) {
    const t = ruText[i]

    if (t === 'ы' && i + 1 < ruText.length) {
      const w = ruText[i + 1]

      if (w === 'и' || w === 'й') {
        result += 'y'
        continue
      }
    }

    for (let j = 0; j < replaceEn.length; j++) {
      const q = replaceEn[j][0]

      if (t === q) {
        result += replaceEn[j][1]
        break
      }
    }
  }

  return result
}
