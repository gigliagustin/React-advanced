import React from 'react';
import { Button } from '../Button';

const Header = () => {
  return (
    <section>
      <h1>I&apos;m a Header</h1>
      <label htmlFor='Hi'>Holu
        <input type="text" id='Hi' />
      </label>
      <Button />
    </section>
  );
};

export default Header;
