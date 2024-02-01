import React, { useState } from "react";
import '../styles/toggle.css'

export default function ThemeToggle() {
  const [ isDark, setIsDark ] = useState(false)

  const handleChangeTheme = () => {
    setIsDark(prev => !prev);
    isDark ? document.body.classList.remove('dark_theme') : document.body.classList.add('dark_theme');
  }

  return (
    <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
      <label className="switch">
        <input type="checkbox" onClick={handleChangeTheme}/>
        <span className="slider"/>
      </label>
    </div>
  )
}

