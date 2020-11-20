import styled from "styled-components"

export const Wrapper = styled.section`
  width: 100vw;
  height: 100%;
  background-color: #1c042e;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Img = styled.img`
  width: 40em;
  margin: 0 5vw;
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: auto;
`

export const Tag = styled.div`
  color: #fbe067;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-transform: uppercase;
  width: 50%;
`

export const Name = styled.div`
  font-family: Roboto;
  padding: 0.5em 0;
  font-style: 700;
  font-weight: bold;
  font-size: 32px;
  color: #eee;
  width: 50%;
`

export const Description = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  width: 50%;

  color: #c4c4c4;
`

export const Price = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  padding: 0.5em 0;
  width: 50%;

  color: #eeeeee;
`
