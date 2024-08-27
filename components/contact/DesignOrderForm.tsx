'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'
import './style.css'


interface FormData {
  designType: string
  customDesignType: string
  designText: string
  color: string
  designElements: string
  width: number | null
  height: number | null
  fileSize: string
  additionalInfo: string
  telegramUsername: string
}

interface Errors {
  designType?: string
  designText?: string
  color?: string
  designElements?: string
  size?: string
  additionalInfo?: string
  telegramUsername?: string
}

const DesignOrderForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    designType: '',
    customDesignType: '',
    designText: '',
    color: '',
    designElements: '',
    width: null,
    height: null,
    fileSize: '',
    additionalInfo: '',
    telegramUsername: '',
  })

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [errors, setErrors] = useState<Errors>({})

  const [chatId, setChatId] = useState<string | null>(null)
  const [chatIdError, setChatIdError] = useState<string | null>(null)

  const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
  const CHAT_ID = 1832735702
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`

  // chat id
  async function fetchChatId() {
    try {
      const res = await fetch(url)
      const data = await res.json()

      if (data.ok && data.result.length > 0) {
        const latestUpdate = data.result[data.result.length - 1]
        const chatId = latestUpdate.message?.chat.id

        if (chatId) {
          setChatId(chatId.toString())
        } else {
          setChatIdError('Chat ID not found')
        }
      } else {
        setChatIdError('Xabar topilmadi')
      }
    } catch (error) {
      setChatIdError('Xabar topilmadi')
      console.error('Error fetching chat ID:', error)
    }
  }
  fetchChatId()

  const designTypes = [
    'Аватарка',
    'Форумное оформление темы',
    'Клип под музыку',
    'промо-ролик',
    'Баннер',
    'Логотип',
    'Другое',
  ]

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    if (errors[name as keyof Errors]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name as keyof Errors]: '' }))
    }
  }

  const handleDesignTypeSelect = (type: string) => {
    setFormData((prevState) => ({ ...prevState, designType: type }))
    setIsDropdownOpen(false)
    if (errors.designType) {
      setErrors((prevErrors) => ({ ...prevErrors, designType: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Errors = {}
    if (!formData.designType) newErrors.designType = 'Обязательное поле'
    if (!formData.designText) newErrors.designText = 'Обязательное поле'
    if (!formData.color) newErrors.color = 'Обязательное поле'
    if (!formData.designElements) newErrors.designElements = 'Обязательное поле'
    if (!formData.width || !formData.height)
      newErrors.size = 'Обязательное поле'
    if (!formData.additionalInfo) newErrors.additionalInfo = 'Обязательное поле'
    if (!formData.telegramUsername)
      newErrors.telegramUsername = 'Обязательное поле'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const sendToTelegramBot = async () => {
    const message = `
    🉐НОВЫЙ ЗАКАЗ ДИЗАЙНА🉐:


    ТИП ДИЗАЙНА: ${
      formData.designType === 'Другое'
        ? formData.customDesignType
        : formData.designType
    }
   
    ТЕКСТ: ${formData.designText}
    
    ЦВЕТ: ${formData.color}
    
    ЭЛЕМЕНТЫ ДИЗАЙНА: ${formData.designElements}
    
    РАЗМЕР: ${formData.width}x${formData.height}
    
    РАЗМЕР ФАЙЛА: ${formData.fileSize || 'Не указано'}
    
    ДОП ИНФОРМАЦИЯ: ${formData.additionalInfo}
    
    Telegram: ${formData.telegramUsername}
  `
    


    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to send message to Telegram')
      }

      toast.success('Ваш заказ успешно отправлен!')
    } catch (error) {
      console.error('Error:', error)
      toast.error('Произошла ошибка при отправке сообщения.')
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      sendToTelegramBot()
      setFormData({
        designType: '',
        customDesignType: '',
        designText: '',
        color: '',
        designElements: '',
        width: null,
        height: null,
        fileSize: '',
        additionalInfo: '',
        telegramUsername: '',
      })
    } else {
      toast.error('Пожалуйста, заполните все обязательные поля.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full mx-auto mt-10 p-6 bg-[#191919] rounded-lg shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Форма заказа дизайна</h2>

      <div className="dropdown mb-4 relative">
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full p-2 border rounded text-left bg-[#222222] text-white border-none"
        >
          {formData.designType || 'Выберите тип дизайна'}
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content absolute left-0 right-0 bg-[#222222] text-white border-none border rounded">
            {designTypes.map((type, index) => (
              <a
                key={index}
                href="#"
                onClick={() => handleDesignTypeSelect(type)}
                className="block p-2 hover:bg-gray-100"
              >
                {type}
              </a>
            ))}
          </div>
        )}
        {errors.designType && (
          <p className="text-red-500 text-sm mt-1">{errors.designType}</p>
        )}
      </div>

      {formData.designType === 'Другое' && (
        <input
          type="text"
          name="customDesignType"
          value={formData.customDesignType}
          onChange={handleInputChange}
          placeholder="Укажите свой вариант"
          className="w-full p-2 border rounded mt-2 mb-4 bg-[#222222] text-white border-none"
        />
      )}

      <input
        type="text"
        name="designText"
        value={formData.designText}
        onChange={handleInputChange}
        placeholder="Если вы хотите вставить текст дизайна, введите его"
        className="w-full p-2 border rounded mb-4 bg-[#222222] text-white border-none"
      />
      {errors.designText && (
        <p className="text-red-500 text-sm mt-1">{errors.designText}</p>
      )}

      <input
        type="text"
        name="color"
        value={formData.color}
        onChange={handleInputChange}
        placeholder="Введите предпочтение цвета"
        className="w-full p-2 border rounded mb-4 bg-[#222222] text-white border-none"
      />
      {errors.color && (
        <p className="text-red-500 text-sm mt-1">{errors.color}</p>
      )}

      <input
        type="text"
        name="designElements"
        value={formData.designElements}
        onChange={handleInputChange}
        placeholder="Элементы дизайна (например, машина или персонаж)"
        className="w-full p-2 border rounded mb-4 bg-[#222222] text-white border-none"
      />
      {errors.designElements && (
        <p className="text-red-500 text-sm mt-1">{errors.designElements}</p>
      )}


<div className="flex mb-4">
        <input
          type="text"
          name="width"
          value={formData.width || ''}
          onChange={handleInputChange}
          placeholder="Ширину тома (px , sm , vh)"
          className="w-1/2 p-2 border rounded mr-2 bg-[#222222] text-white border-none"
        />
        <input
          type="text"
          name="height"
          value={formData.height || ''}
          onChange={handleInputChange}
          placeholder="Введите высоту (px , sm , vh)"
          className="w-1/2 p-2 border rounded bg-[#222222] text-white border-none"
        />
      </div>
      {errors.size && (
        <p className="text-red-500 text-sm mt-1 ">{errors.size}</p>
      )}

      <input
        type="text"
        name="fileSize"
        value={formData.fileSize}
        onChange={handleInputChange}
        placeholder="Введите размер файла (МБ, ГБ, ТБ)  (Если это необязательно, вам не нужно его заполнять.)"
        className="w-full p-2 border rounded mb-4 bg-[#222222] text-white border-none"
      />

      <textarea
        name="additionalInfo"
        value={formData.additionalInfo}
        onChange={handleInputChange}
        placeholder="Дополнительная информация или советы"
        className="w-full p-2 border rounded mb-4 bg-[#222222] text-white border-none"
        rows={4}
      />
      {errors.additionalInfo && (
        <p className="text-red-500 text-sm mt-1">{errors.additionalInfo}</p>
      )}

      <input
        type="text"
        name="telegramUsername"
        value={formData.telegramUsername}
        onChange={handleInputChange}
        placeholder="Оставьте свой (username) для связи через Telegram"
        className="w-full p-2 border rounded mb-4 bg-[#222222] text-white border-none"
      />
      {errors.telegramUsername && (
        <p className="text-red-500 text-sm mt-1">{errors.telegramUsername}</p>
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 bg-[#E32879]"
      >
        Отправить заказ
      </button>
    </form>
  )
}

export default DesignOrderForm