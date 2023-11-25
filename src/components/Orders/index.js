import {Component} from 'react'
import {IoSearch, IoPrintOutline} from 'react-icons/io5'
import Headers from '../Headers'
import OrderedItem from '../OrderedItems'
import {
  OrderDetailsContainer,
  OrdersContainer,
  OrderDetails,
  OrderDetailsHeading,
  OrderDetailsName,
  Line,
  OrderContainer,
  SearchContainer,
  InputElement,
  SearchAndAddItemsContainers,
  AddItemsBtn,
  Container,
  ProductDetailsHeader,
  ProductHeadings,
  ProductHeadingNames,
  Headings,
  StatusHeading,
} from './style'

const dataStatus = {
  initial: 'Initial',
  success: 'Success',
  failure: 'Failure',
}

class Orders extends Component {
  state = {
    data: {},
    displayStatus: dataStatus.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response =>
        // console.log(response)
        response.json(),
      )
      .then(myJson => {
        this.setState({data: myJson, displayStatus: dataStatus.success})
      })
  }

  ordersDetails = () => (
    <OrderDetailsContainer>
      <OrderDetails>
        <OrderDetailsHeading>Supplier</OrderDetailsHeading>
        <OrderDetailsName>East Cost Fruits & Vegetables</OrderDetailsName>
      </OrderDetails>
      <Line>.</Line>
      <OrderDetails>
        <OrderDetailsHeading>Shipping Date</OrderDetailsHeading>
        <OrderDetailsName>10,Feb</OrderDetailsName>
      </OrderDetails>
      <Line>.</Line>
      <OrderDetails>
        <OrderDetailsHeading>Total</OrderDetailsHeading>
        <OrderDetailsName>$15,000</OrderDetailsName>
      </OrderDetails>
      <Line>.</Line>
      <OrderDetails>
        <OrderDetailsHeading>Category</OrderDetailsHeading>
        <OrderDetailsName>East Cost Fruits & Vegtables</OrderDetailsName>
      </OrderDetails>
      <Line>.</Line>
      <OrderDetails>
        <OrderDetailsHeading>Department</OrderDetailsHeading>
        <OrderDetailsName>300-444-678</OrderDetailsName>
      </OrderDetails>
      <Line>.</Line>
      <OrderDetails>
        <OrderDetailsHeading>Status</OrderDetailsHeading>
        <OrderDetailsName>Waiting For Approval</OrderDetailsName>
      </OrderDetails>
    </OrderDetailsContainer>
  )

  displayOrderView = () => {
    const {data} = this.state
    return (
      <OrderContainer>
        <SearchAndAddItemsContainers>
          <SearchContainer>
            <InputElement type="search" placeholder="Search..." />
            <IoSearch size={20} />
          </SearchContainer>
          <Container>
            <AddItemsBtn>Add item</AddItemsBtn>
            <IoPrintOutline color="#208718" size={30} />
          </Container>
        </SearchAndAddItemsContainers>
        <ProductDetailsHeader>
          <ProductHeadings>
            <Headings>Product Name</Headings>
            <ProductHeadingNames>Brand</ProductHeadingNames>
            <ProductHeadingNames>Price</ProductHeadingNames>
            <ProductHeadingNames>Quantity</ProductHeadingNames>
            <ProductHeadingNames>Total</ProductHeadingNames>
            <StatusHeading>Status</StatusHeading>
          </ProductHeadings>
          {data.myData.map(eachProduct => (
            <OrderedItem key={eachProduct.id} product={eachProduct} />
          ))}
        </ProductDetailsHeader>
      </OrderContainer>
    )
  }

  displayOrder = () => {
    const {displayStatus} = this.state
    if (dataStatus.success === displayStatus) {
      return this.displayOrderView()
    }
    return null
  }

  render() {
    const {data} = this.state
    console.log(data)
    return (
      <OrdersContainer>
        <Headers />
        {this.ordersDetails()}
        {this.displayOrder()}
      </OrdersContainer>
    )
  }
}

export default Orders
