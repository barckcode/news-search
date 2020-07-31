import {
  SearcherComponent,
  Form,
  Input,
  Button,
} from './styles'

const Searcher = () => {
  return (
    <SearcherComponent>
      <Form>
        <Input
          type='text'
          placeholder='Tecnología, bitcoin, covid…'
        />

        <Button
          type='submit'
        >
          Buscar
        </Button>
      </Form>
    </SearcherComponent>
  )
}

export default Searcher
