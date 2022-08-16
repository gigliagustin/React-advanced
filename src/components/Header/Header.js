import React from 'react';
import { useThemeContext, useThemeToggleContext } from '../../providers/ThemeProvider';

const Header = () => {
  const setTheme = useThemeToggleContext();
  const theme = useThemeContext();

  console.log(theme);
  return (
    <section>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        {theme === 'light' ? <button className='btn btn-primary' onClick={() => setTheme('dark') }>Set Dark Mode</button> : <button className='btn btn-primary' onClick={() => setTheme('light') }>Set Light Mode</button>}
      </div>
    </nav>
  </section>
  );
};

export default Header;
