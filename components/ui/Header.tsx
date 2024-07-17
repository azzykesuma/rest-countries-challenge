'use client'
import React, { useState } from 'react'
import { Switch } from './switch'
import sunIcon from  '@/asset/contrast.png'
import moonIcon from  '@/asset/crescent-moon.png'
import Image from 'next/image'
import { useTheme } from 'next-themes'
const Header = () => {
    const [checked, setChecked] = useState(false)
    const { setTheme } = useTheme()
    const handleChange = () => {
        setChecked(!checked)
        setTheme(checked ? 'dark' : 'light')
    }
  return (
    <header className='flex justify-between bg-mainBcg p-4 shadow-lg'>
        <h1 className='text-primary font-bold'>Where in the world?</h1>
        <div className='flex gap-2 items-center'>
            <Image width={20}  alt='moon icon' src={moonIcon} />
            <Switch id="toggleMode" checked={checked} onCheckedChange={handleChange}/>
            <Image width={20}  alt='sun icon' src={sunIcon} />
        </div>
    </header>
  ) 
}

export default Header
