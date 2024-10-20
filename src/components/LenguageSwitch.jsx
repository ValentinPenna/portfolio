import React, { useState, useEffect } from 'react'

function LanguageSwitch() {
    const [lang, setLang] = useState(false)
    useEffect(() => {
        if (lang) {
            if (!document.href.split('/').includes('en')){
                document.href = `/en/`;
                console.log(lang + "english")
            }
        } else {
            if (!document.href.split('/').includes('es')){
                document.href = `/es/`;
                console.log(lang + "español")
            }
        }
    }, [lang])
  return (
    <>
    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
    <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" checked={lang} onChange={() => setLang(!lang)}/>
    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
    </div>
    <label for="toggle" class="text-xs text-gray-700">Toggle me.</label>

    </>
  )
}

export default LanguageSwitch