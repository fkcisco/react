import { Button } from 'react-bootstrap'
import { Spinner } from 'react-bootstrap'

function Cargando({titulo}) {
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
      Cargando {titulo}
    </Button>
  </>
  )
}
export default Cargando