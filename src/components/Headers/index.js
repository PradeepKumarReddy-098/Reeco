import {FiShoppingCart} from 'react-icons/fi'
import {
  ContentContainer,
  NavBar,
  Container,
  Heading,
  NavHeadingOptionsContainer,
  NavBarOptionsList,
  NavBarOptions,
  NavCartUsernameContainer,
  SpanElement,
  IconsContainer,
  Greetings,
  SelectElement,
  Options,
  EmptyContainer,
  OrderHeaderContainer,
  OrderAndId,
  SpanElements,
  OrderAndButtonsContainer,
  BackButton,
  ApproveBtn,
  ButtonsContainer,
} from './style'

const Headers = () => (
  <>
    <NavBar>
      <Container>
        <NavHeadingOptionsContainer>
          <Heading>Reeco</Heading>
          <NavBarOptionsList>
            <NavBarOptions>Store</NavBarOptions>
            <NavBarOptions>Orders</NavBarOptions>
            <NavBarOptions>Analytics</NavBarOptions>
          </NavBarOptionsList>
        </NavHeadingOptionsContainer>
        <NavCartUsernameContainer>
          <EmptyContainer>
            <SpanElement>10</SpanElement>
            <IconsContainer>
              <FiShoppingCart size={25} />
            </IconsContainer>
          </EmptyContainer>
          <EmptyContainer>
            <Greetings>Hello,</Greetings>
            <SelectElement>
              <Options value="James">James</Options>
              <Options value="John">John</Options>
            </SelectElement>
          </EmptyContainer>
        </NavCartUsernameContainer>
      </Container>
    </NavBar>
    <OrderHeaderContainer>
      <ContentContainer>
        <OrderAndId>
          {`order > `}
          <SpanElements>32457ABC</SpanElements>
        </OrderAndId>
        <OrderAndButtonsContainer>
          <Heading>Order 32457ABC</Heading>
          <ButtonsContainer>
            <BackButton>Back</BackButton>
            <ApproveBtn>Approve order</ApproveBtn>
          </ButtonsContainer>
        </OrderAndButtonsContainer>
      </ContentContainer>
    </OrderHeaderContainer>
  </>
)

export default Headers
