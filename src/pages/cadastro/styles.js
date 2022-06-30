import styled from 'styled-components';





const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

`
const Title = styled.div`
    font-size: 32px;
    color: white;
    font-family: 'Saira Stencil One', display;
    margin-bottom: 20px;

`

const FormLogin = styled.form`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 13px;

`
const Paragrafo = styled.p`

        font-family: 'Raleway';
        font-weight:700;
        font-size: 15px;
        color: white;
    
`

export { Paragrafo, FormLogin, Title, Content};