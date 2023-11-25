import {Component} from 'react'
import {FaCheck} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {
  ProductDetailsItem,
  ProductImageNameContainer,
  ProductImage,
  ProductName,
  ProductDetail,
  ProductStatus,
  ProductStatusContainer,
  ProductStatusButtons,
  ProductCorrectBtn,
  ProductWrongBtn,
  EditBtn,
  PopUpContainer,
  ClosePopup,
  Paragraph,
  YesNoContainer,
  YesBtn,
  NoBtn,
  PopupView,
  PopupContent,
  PopUpBrand,
  PopUpImageAndProductChangeContainer,
  PopUpImage,
  PopupProductDetails,
  PopUpProductChangeContainer,
  Title,
  Input,
  ContainerEl,
  PopUpBtns,
  Span,
  ChooseReasonContainer,
  ReasonOptions,
  CancelBtn,
  SaveBtn,
} from './style'

class OrderedItem extends Component {
  state = {
    statusText: '',
    rightMark: false,
    wrongMark: false,
  }

  approvel = () => {
    // this.setState({statusText: 'Approved', rightMark: true})
    this.setState(prevState => ({
      statusText: prevState.statusText !== 'Approved' ? 'Approved' : '',
      rightMark: !prevState.rightMark,
      wrongMark: false,
    }))
  }

  increaseQuantity = () => {}

  onClickYes = () => {
    this.setState({
      statusText: 'Missing-Urgent',
      rightMark: false,
      wrongMark: true,
    })
  }

  onClickNo = () => {
    this.setState({
      statusText: 'Missing',
      rightMark: false,
      wrongMark: true,
    })
  }

  render() {
    const {product} = this.props
    const {statusText, rightMark, wrongMark} = this.state
    let bgColor
    if (rightMark) {
      bgColor = '#0bba11'
    } else if (wrongMark) {
      if (statusText === 'Missing') {
        bgColor = '#d6690f'
      } else if (statusText === 'Missing-Urgent') {
        bgColor = '#d62004'
      } else {
        bgColor = 'transparent'
      }
    }

    return (
      <ProductDetailsItem>
        <ProductImageNameContainer>
          <ProductImage src={product.image} alt="product" />
          <ProductName>{product.productName}</ProductName>
        </ProductImageNameContainer>
        <ProductDetail>{product.brand}</ProductDetail>
        <ProductDetail>{`$ ${product.price} /6*1LB`}</ProductDetail>
        <ProductDetail>{`${product.quantity} x 6*1LB`}</ProductDetail>
        <ProductDetail>{product.price * product.quantity}</ProductDetail>
        <ProductStatusContainer>
          <ProductStatus bgColor={bgColor}>{statusText}</ProductStatus>
          <ProductStatusButtons>
            <ProductCorrectBtn
              type="button"
              onClick={this.approvel}
              color={rightMark}
            >
              <FaCheck />
            </ProductCorrectBtn>
            <PopUpContainer>
              <Popup
                modal
                trigger={
                  <ProductWrongBtn
                    type="button"
                    color={wrongMark}
                    bgColor={bgColor}
                    onClick={this.onClickCrossMark}
                  >
                    <ImCross />
                  </ProductWrongBtn>
                }
              >
                {close => (
                  <PopupView>
                    <ClosePopup type="button" onClick={() => close()}>
                      x
                    </ClosePopup>
                    <PopupContent>
                      <Paragraph>{product.productName}...... urgent?</Paragraph>
                      <YesNoContainer>
                        <NoBtn onClick={this.onClickNo}>
                          <NoBtn type="button" onClick={() => close()}>
                            No
                          </NoBtn>
                        </NoBtn>
                        <YesBtn type="button" onClick={this.onClickYes}>
                          <YesBtn onClick={() => close()}>Yes</YesBtn>
                        </YesBtn>
                      </YesNoContainer>
                    </PopupContent>
                  </PopupView>
                )}
              </Popup>
            </PopUpContainer>

            <PopUpContainer>
              <Popup modal trigger={<EditBtn>Edit</EditBtn>}>
                {close => (
                  <PopupView>
                    <ClosePopup type="button" onClick={() => close()}>
                      x
                    </ClosePopup>
                    <PopupContent>
                      <Paragraph>{product.productName}...</Paragraph>
                      <PopUpBrand>{product.brand}</PopUpBrand>
                      <PopUpImageAndProductChangeContainer>
                        <PopUpImage src={product.image} />
                        <PopupProductDetails>
                          <PopUpProductChangeContainer>
                            <Title>Price($)</Title>
                            <ContainerEl>
                              <Input
                                type="number"
                                placeholder={product.price}
                                onChange={this.ChangePrice}
                              />
                              <Span>/6*1LB</Span>
                            </ContainerEl>
                          </PopUpProductChangeContainer>
                          <PopUpProductChangeContainer>
                            <Title>Quantity</Title>
                            <ContainerEl>
                              <PopUpBtns
                                type="button"
                                onClick={this.decreaseQuantity}
                              >
                                -
                              </PopUpBtns>
                              <Input
                                type="number"
                                placeholder={product.quantity}
                              />
                              <PopUpBtns
                                type="button"
                                onClick={this.increaseQuantity}
                              >
                                +
                              </PopUpBtns>
                              <Span>/6*1LB</Span>
                            </ContainerEl>
                          </PopUpProductChangeContainer>
                          <PopUpProductChangeContainer>
                            <Title>Total</Title>
                            <ContainerEl>
                              <Span>${product.quantity * product.price}</Span>
                            </ContainerEl>
                          </PopUpProductChangeContainer>
                        </PopupProductDetails>
                      </PopUpImageAndProductChangeContainer>
                      <ContainerEl>
                        <Title>Choose Reason</Title>
                        <Span>(optional)</Span>
                      </ContainerEl>
                      <ChooseReasonContainer>
                        <ReasonOptions>Missing Product</ReasonOptions>
                        <ReasonOptions>Price is not same</ReasonOptions>
                        <ReasonOptions>quantity is not same</ReasonOptions>
                        <ReasonOptions>other</ReasonOptions>
                      </ChooseReasonContainer>
                      <YesNoContainer>
                        <CancelBtn onClick={() => close()}>Cancel</CancelBtn>
                        <SaveBtn onClick={() => close()}>Save</SaveBtn>
                      </YesNoContainer>
                    </PopupContent>
                  </PopupView>
                )}
              </Popup>
            </PopUpContainer>
          </ProductStatusButtons>
        </ProductStatusContainer>
      </ProductDetailsItem>
    )
  }
}

export default OrderedItem
