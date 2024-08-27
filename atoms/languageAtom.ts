import { atom } from 'recoil'

const languageState = atom<'ru' | 'en'>({
	key: 'languageState',
	default: 'ru',
})
export default languageState
