import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;

    // não muda o tamanho do botão
    flex-shrink: 0;

    width: 48;
    height: 48;

    margin-bottom: 8px;

    /* background-color: ${props => props.isHome ? 'var(--pocketseat)' : 'var(--primary)'}; */
    background-color: red;
    color: red;

    cursor: pointer;
    position:relative;
`;