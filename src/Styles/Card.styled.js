import styled from 'styled-components'

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    max-width: 1000px;
    width: 1000px;
    height: 300px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    border: 3px solid grey;

 

    flex-direction: ${({ layout }) => layout || 'row'};

    img {
        
        // height: 300px;
        border-radius: 5px;
        width: 200px;
        height: 400px;
        object-fit: cover;

        
    // }

    & > div {
        flex: 50%;
    
        // width: 50%;
        border: 3px solid grey;

    }

    // @media (max-width: ${({ theme }) => theme.mobile}) {
    //     flex-direction: column;
    // }
`
