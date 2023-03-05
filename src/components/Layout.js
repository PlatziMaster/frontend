import React from 'react';
import { Global, css } from '@emotion/react';

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
                    html{
                        body {
                            font-family: 'Poppins';
                            font-weight: 500;
                            font-size: 16px;
                            color: #555555;

                            main {
                                padding: 3rem 0;
                            }
                        }
                    }
                `}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
