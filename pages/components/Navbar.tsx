import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const Header = styled.header`
background-color: red;
width: 100%;
position: fixed;
padding: 10px 20px;;
max-height: 60px;
display: flex;
z-index: 1;
top: 0;
justify-content: space-between;

input {
    border: none;
    font-size: 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 5px 10px;
    min-width: 400px;
}

button {
    border: none;
    color: #414141;
    background-color: #CBCBCB;
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
        </Header>
    )
}