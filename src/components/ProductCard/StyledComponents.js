import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #331f41;
  width: 265px;
  height: 273px;
  border: 3px solid #969393;
  order: ${(props) => props.flexOrder};
  flex: 1 0 21%;
  margin: 0 2%;
`

export const DataWrapper = styled.div`
  display: flex;
  padding: 10px;
`

export const TextWrapper = styled.div`
  font-family: Montserrat, sans-serif;
  margin-right: 20px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

export const H3 = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #eeeeee;
  text-transform: uppercase;
`

export const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #c4c4c4;
`
