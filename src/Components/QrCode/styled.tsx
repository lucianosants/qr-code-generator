import styled from "styled-components";

export const Input = styled.input`
    height: 4.8rem;
    border-radius: 8px 8px 0 0;
    max-width: 30rem;
    width: 100%;
    padding: 1.5rem 1rem;
    outline: none;
    border: 1px solid #b6b6b6;

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    svg {
        margin-bottom: 2rem;
    }

    h4 {
        margin: 2rem auto;
        max-width: 30rem;
        width: 100%;
        text-align: center;
    }
`;

export const Button = styled.a`
    background-color: #c891f6;
    padding: 1.5rem 1rem;
    border-radius: 0px 0px 8px 8px;
    text-align: center;
    text-decoration: none;
    color: #630aab;
    font-size: 1.8rem;
    font-weight: 700;
    max-width: 30rem;
    width: 100%;
    transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
        background-color: #630aab;
        color: #c891f6;
    }
`;