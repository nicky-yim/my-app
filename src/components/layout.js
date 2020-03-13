import React from 'react'
import styled, { createGlobalStyle} from 'styled-components'

import Meta from './meta'
import Header from './header'
import Footer from './footer'
import Cover from './cover'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Condensed', 'Segoe UI', 'Arial';
    }
`

const Body = styled.div`
    background: #ededed;
    font-weight: 300;
`

const Content = styled.div`
    text-align: center;
    width: 50%;
    padding: 20px;
    margin: 10vh auto 0 auto;
    color: white;
    font-size: 26px;

    @media (max-width: 992px) {
        font-size: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
        font-size: 18px;
    }
`

const Layout = (props) => {
    return (
        <Body>
            <GlobalStyle />
            <Meta />
            <Header />
            <Cover />
            <Content>
                {props.children}
            </Content>
            <Footer />
        </Body>
    )
}

export default Layout
