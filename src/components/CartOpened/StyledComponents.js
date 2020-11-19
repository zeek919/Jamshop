import styled from "styled-components"

export const Wrapper = styled.div`
  width: 280px;
  height: 280px;
  position: absolute !important;
  top: 3em;
  right: 4em;
  background: #220538;
  border: 2px solid #f5f5f5;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const Inner = styled.table`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 80%;
  margin-top: 10px;
  height: 80%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #331f41;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    background-color: #eee;
  }
`

export const Tbody = styled.tbody`
  width: 100%;
`
