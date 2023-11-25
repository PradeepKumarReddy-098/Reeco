import styled from 'styled-components'

export const ProductDetailsItem = styled.li`
  color: #a4a8a3;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px -4px #0f131a;
`
export const ProductImageNameContainer = styled.div`
  width: 28%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`
export const ProductImage = styled.img`
  width: 50px;
  height: 40px;
`

export const ProductName = styled.p`
  color: #4f5052;
`

export const ProductDetail = styled.p`
  color: 4f5052;
  width: 10%;
  padding: 5px;
  margin: 0px;
`

export const ProductStatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 32%;
  margin: 0px;
`
export const ProductStatus = styled.p`
  color: #ffffff;
  border-radius: 25px;
  text-align: center;
  padding: 8px;
  width: 40%;
  background-color: ${props => props.bgColor};
`
export const ProductStatusButtons = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  color: #8d8e8f;
  box-sizing: border-box;
`
export const ProductCorrectBtn = styled.button`
  background-color: transparent;
  padding: 10px;
  border: none;
  font-size: 20px;
  margin-left: 5px;
  color: ${props => (props.color ? '#269e3c' : '#8d8e8f')};
`

export const ProductWrongBtn = styled.button`
  background-color: transparent;
  padding: 10px;
  border: none;
  font-size: 20px;
  margin-left: 5px;
  color: ${props => (props.color ? props.bgColor : '#8d8e8f')};
`

export const EditBtn = styled.button`
  background-color: transparent;
  color: #8d8e8f;
  padding: 10px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  margin-left: 5px;
`
export const PopUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ClosePopup = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  align-self: flex-end;
`
export const Paragraph = styled.p`
  color: #000;
`
export const YesNoContainer = styled.div`
  align-self: flex-end;
  width: 30%;
`
export const YesBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #000;
`

export const NoBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #000;
`
export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const PopUpBrand = styled.p`
  margin: 0px;
  padding: 0px;
  color: #bdbcb9;
`
export const PopUpImageAndProductChangeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const PopUpImage = styled.img`
  width: 150px;
  height: 100px;
`
export const PopupProductDetails = styled.div`
  margin-left: 10px;
  width: 60%;
`
export const PopUpProductChangeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const ContainerEl = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.p`
  color: #000;
`
export const Span = styled.span`
  color: #bdbcb9;
`
export const Input = styled.input`
  color: #bdbcb9;
  width: 70px;
  text-align: center;
`
export const PopUpBtns = styled.button`
  background-color: #4cc423;
  color: #fff;
  border: none;
  border-radius: 100%;
`
export const ChooseReasonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const ReasonOptions = styled.button`
  border: 1px solid #bdbcb9;
  color: #bdbcb9;
  padding: 10px;
  border-radius: 10px;
  background-color: transparent;
`
export const CancelBtn = styled.button`
  border: 1px solid #1da834;
  color: #1da834;
  border-radius: 10px;
  padding: 10px;
  background-color: transparent;
  margin: 5px;
`
export const SaveBtn = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #1da834;
  color: #fff;
  padding: 10px;
  margin: 5px;
`
