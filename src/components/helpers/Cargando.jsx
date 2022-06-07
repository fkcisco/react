import {Button, Spinner} from 'react-bootstrap'

function cargando() {
  return(

    <>

  <Button variant="primary my-5 p-5" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Cargando Catalogo...
  </Button>

  </>
  )
}

export default cargando