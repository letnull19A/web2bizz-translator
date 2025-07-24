import { translate } from '.'
import * as data from './dataset.json'

describe('translator library', () => {
  describe.each(data.en)('🇬🇧EN translator ', (dataForm) => {
    it(`${dataForm.origin} -> ${dataForm.translated}`, () => {
      const translated = translate(dataForm.origin, 'EN')

      expect(translated).toStrictEqual(dataForm.translated)
    })
  })
})
