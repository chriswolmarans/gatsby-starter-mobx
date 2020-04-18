/** @jsx jsx */
import { Styled, jsx, NavLink, Flex } from 'theme-ui';
import * as React from 'react';
import { Link } from 'gatsby';
import { storeContext } from '../../RootLayout';
import { Header } from './header';

export const DefaultLayout = ({ children }) => {
  return (
    <storeContext.Consumer>
      {() => (
        <Styled.root className="App">
          <div
            sx={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            <h1><Link to='/'>Gatsby MobX starter</Link></h1>
            <Header/>
            <ul>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/counterPage/'>counter example</Link>
              </li>
              <li>
                <Link to='/temperature/'>temperature example</Link>
              </li>
              <li>
                <Link to='/a/'>Ah</Link>
              </li>
            </ul>
            {children}
          </div>
        </Styled.root>
      )}
    </storeContext.Consumer>
  );
};
export default DefaultLayout;
