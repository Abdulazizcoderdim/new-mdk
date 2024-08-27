'use client'

import languageState from '@/atoms/languageAtom'
import DesignOrderForm from '@/components/contact/DesignOrderForm'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

// Translation dictionary
const translations = {
  en: {
    titleone: '1. Name of the service (avatar, theme, promo, clip):',
    titletwo: '2. Description',
    titlethre: '3. Preferred edits',
    titlefour: '4. Number of works',
    titlefive: '5. Preferred colors',
    titlesix: `6. Your links to logos (attach via imgur)`,
  },
  ru: {
    titleone: '1. Наименование услуги (аватарка, тема, промо, клип):',
    titletwo: '2. Описание',
    titlethre: '3. Предпочтительные правки',
    titlefour: '4. Количество работ',
    titlefive: '5. Преймущественные цвета',
    titlesix: `6. Ваши ссылки на логотипы ( прикладывать через imgur)`,
  },
}

const ContactPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  const [selectedLanguage] = useRecoilState(languageState)
  const t = translations[selectedLanguage] || translations.en // Fallback to English if language is not found

  return (
    <div>
      <div className="bg-[#222222]">
        <div
          data-aos="fade-down"
          className="container py-24 flex max-lg:flex-col max-lg:space-y-10 justify-between"
        >
          <DesignOrderForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
