import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const Header = styled.header`
background-color: red;
width: 100%;
padding: 10px 20px;;
max-height: 60px;
display: flex;
justify-content: space-between;

input {
    border: #707070 solid 1px;
    font-size: 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 5px 10px;
    min-width: 400px;
}

button {
    border: none;
    background-color: #CBCBCB;
    font-size: 19px;
    height: 34px;
    width: 35px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
}
`

export default function Navbar() {
    return (
        <Header>
            <div>
            <Link href="/">
                <a>
                    <Image
                    priority
                    src="/favicon.png"
                    height={100}
                    width={100}
                    alt={'logo'}
                    />
                </a>
            </Link>
            </div>
            <div style={{marginTop: '4px'}}>
                <input type="text" name="" id="" placeholder="Pesquisar" />
                <button>E</button>
            </div>
        </Header>
    )
}