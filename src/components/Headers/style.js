import styled from 'styled-components'

export const NavbarContainer = styled.div`
  width: 100vw;
  margin: 0px;
`

export const NavBar = styled.nav`
  background-color: #12731f;
  padding-top: 5px;
  padding-bottom: 5px;
  box-sizing: border-box;
  margin: 0px;
`
export const ContentContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`

export const Container = styled.div`
  color: #ffffff;
  margin-left: 35px;
  margin-right: 35px;
  display: flex;
  justify-content: space-between;
`

export const NavHeadingOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  @media screen and (min-width: 1200px) {
    width: 30%;
  }
`
export const NavCartUsernameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  @media screen and (min-width: 1200px) {
    width: 15%;
  }
`

export const Heading = styled.h2`
  font-weight: 600;
  font-size: 20px;
  padding: 0px;
  margin: 0px;
`

export const NavBarOptionsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0px;
  list-style: none;
  width: 70%;
`

export const NavBarOptions = styled.li`
  color: #f5f7f5;
`
export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SpanElement = styled.span`
  border-radius: 100%;
  background-color: #36c249;
`
export const IconsContainer = styled.div`
  position: relative;
  top: 10px;
  left: -2px;
`
export const Greetings = styled.p`
  color: #f5f7f5;
`

export const SelectElement = styled.select`
  color: #f5f7f5;
  background-color: transparent;
  border: none;
  font-size: 20px;
`
export const Options = styled.option``

export const OrderHeaderContainer = styled.div`
  color: #0f131a;
  margin-top: 0px;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: 0 2px 10px -4px #0f131a;
`
export const OrderAndId = styled.p`
  color: #555659;
  margin: 0px;
`
export const SpanElements = styled.span`
  text-decoration: underline;
`

export const OrderAndButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonsContainer = styled.div``

export const BackButton = styled.button`
  color: #12731f;
  border: 2px solid #12731f;
  padding: 10px;
  border-radius: 25%;
  background-color: transparent;
`

export const ApproveBtn = styled.button`
  background-color: #12731f;
  color: #ffffff;
  padding: 10px;
  border-radius: 25px;
  border: none;
  margin-left: 12px;
`
