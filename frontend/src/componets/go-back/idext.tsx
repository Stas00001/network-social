import React from 'react'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const GoBack = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
  return (
    <div onClick={handleBack} className='text-default-500 flex items-center gap-2 mb-10 cursor-pointer'>
        <FaRegArrowAltCircleLeft/>
        Назад
    </div>
  )
}

export default GoBack