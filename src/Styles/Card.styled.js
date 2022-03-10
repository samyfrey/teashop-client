import styled from 'styled-components'

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px auto;
    padding: 60px; 
    flex-direction: 'column';


    // img { 
    //     width: 20rem;        
    //     height: 20rem;
    //     justify-content: center;
    //     align-items: center;
    // }

    & > div {
        flex: 1;
        justify-content: center;
        align-items: center;

    }

    @media(max-width: 768px) {
        flex-direction: column;
    }
`
