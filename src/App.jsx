// App.js
import './App.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Product from './Components/Products/Product';

function App() {
  const [lang, setLang] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  function handleChangeLang(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  function handleToggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <>
      <BrowserRouter>
        <header>
          <nav className='nav'>
            <button className='btn' >
          C
            </button>
            <div className='navlivk'>
              <NavLink className='one' to='/'>
                {t('home')}
              </NavLink>
              <NavLink className='one' to='/About'>
                {t('about')}
              </NavLink>
              <NavLink className='one' to='/Products'>
                {t('product')}
              </NavLink>
            </div>
            <div className='info'>
              <span onClick={handleToggleDarkMode}>        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}</span>
              <h3>{t('save')}</h3>
              <li>
                <select onChange={(e) => handleChangeLang(e)} value={lang}>
                  <option value='uz'>uz</option>
                  <option value='ru'>ru</option>
                  <option value='en'>en</option>
                </select>
              </li>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Products' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
