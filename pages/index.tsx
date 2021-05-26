import styled from 'styled-components'
import LargeCard from '../Components/Home/LargeCard'

export default function Home() {
  return (
    <Test>
      <LargeCard />
      Hello
    </Test>
  )
}

const Test = styled.h1`
  font-size: 40px;
`