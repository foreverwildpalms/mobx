import styled from "styled-components";

export const FormWrap = styled.div `
  background: #e1ebf5;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  padding: 20px;
`

export const Title = styled.h2 `
  margin: 0 0 20px 0;
  color: #212529
`

export const Input = styled.input `
  display: block;
  width: calc(100% - 25px);
  padding: 7px 10px;
  font-size: 16px;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
`

export const Button = styled.button `
  margin-top: 10px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  padding: 6px 12px;
  min-height: 40px;
  background: #3f73ab;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 300;
`

export const TasksWrap = styled.div `
    margin-top: 50px;
`

export const TasksUl = styled.ul `
    padding: 0;
`

export const TasksLi = styled.li `
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 4px 0;
  
  input {
    margin-right: 6px;
  }
`