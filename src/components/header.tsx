import * as React from 'react';
import { Counter } from './Counter';
import { TemperatureII } from './Temperature';
import { SelectedCity } from './SelectedCity';

export const Header: React.FC = () => {
  return (
    <header className="App-header">
      <SelectedCity/>
      <Counter/>
      <TemperatureII/>
    </header>
  );
};

export default Header;