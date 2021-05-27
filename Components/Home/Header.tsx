import styled from 'styled-components'

const Header = () => {
    return(
        <Container>
            <Logo>Carrier</Logo>
            <SearchContainer>
                <Searchbar placeholder='search' />
                <SearchIcon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuODA5IDIxLjY0NmwtNi4yMDUtNi4yMDVjMS4xNjctMS42MDUgMS44NTctMy41NzkgMS44NTctNS43MTEgMC01LjM2NS00LjM2NS05LjczLTkuNzMxLTkuNzMtNS4zNjUgMC05LjczIDQuMzY1LTkuNzMgOS43MyAwIDUuMzY2IDQuMzY1IDkuNzMgOS43MyA5LjczIDIuMDM0IDAgMy45MjMtLjYyNyA1LjQ4Ny0xLjY5OGw2LjIzOCA2LjIzOCAyLjM1NC0yLjM1NHptLTIwLjk1NS0xMS45MTZjMC0zLjc5MiAzLjA4NS02Ljg3NyA2Ljg3Ny02Ljg3N3M2Ljg3NyAzLjA4NSA2Ljg3NyA2Ljg3Ny0zLjA4NSA2Ljg3Ny02Ljg3NyA2Ljg3N2MtMy43OTMgMC02Ljg3Ny0zLjA4NS02Ljg3Ny02Ljg3N3oiLz48L3N2Zz4=" />
            </SearchContainer>
        </Container>
    )
}

export default Header

const Searchbar = styled.input`
    min-height: 40px; 
    width: 300px;
    border: none;
    background-color: #EBF1F0;
    border-radius: 10px;
    padding: 0px 40px 0px 10px;
    font-size: 1rem;
`

const SearchIcon = styled.img`
    height: 20px;
    width: auto;
    position: absolute;
    right: 0%;
    top: 50%;
    transform: translate(-50%, -50%);
`

const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

const Container = styled.div`
    height: 60px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    position: fixed;
    background-color: white;
    width: 100%;
    z-index: 1;
`

const Logo = styled.a`
    font-size: 28px;
    font-weight: 600;
    cursor: pointer;
`