import styled from '@emotion/styled'

const SearcherComponent = styled.section`
  margin-top: 2rem;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  width: 60%;
  padding: 0.75rem 0 0.75rem 1.5rem;
  font-size: 1rem;
  border: 2px solid #120136;
  border-radius: 5px;
  background-color: #f4f1ff;

  :focus {
    outline: #FCBF1E auto 3px;
    -moz-outline-radius: 5px;
  }
`

const Button = styled.button`
  margin-left: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid #120136;
  border-radius: 5px;
  background-color: #FCBF1E;

  :focus {
    outline: #FCBF1E auto 3px;
    -moz-outline-radius: 5px;
  }

  :hover {

  }
`

export {
  SearcherComponent,
  Form,
  Input,
  Button,
}