import { Button } from "react-bootstrap"

export const Pagination = ({ increment, decrement, counter }) => {
  return (

    <div className="row text-center mt-4">
      <div className="col">
        <Button
          className='second'
          variant="outline-dark"
          onClick={() => decrement()}>Anterior</Button>
      </div>
      <div className="col fuente">
        <h3 className='bgblack'> {counter} </h3>
      </div>
      
          <div className="col mb-5">
            <Button
              className='second'
              variant="outline-dark"
              onClick={() => increment()}>Próximo</Button>
          </div>
    
    </div>
  )
}