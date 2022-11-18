import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 1.5rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, sans-serif;
    color: ${props => props.theme.colors.text};
    transition: all 1s ease;
`;
