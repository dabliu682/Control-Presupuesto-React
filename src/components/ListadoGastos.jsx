import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, EliminarGasto, filtro, gastosFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'>
       

        {filtro ? (
          <>
           <h2>{gastosFiltrados.length ? 'Gastos' : 'No se encontraron gastos'}</h2>
           {gastosFiltrados.map( gasto => (
            <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                EliminarGasto={EliminarGasto}
            />
        ))}
          </>
        ) : (
          <>
           <h2>{gastos.length ? 'Gastos' : 'No se encontraron gastos'}</h2>
           {gastos.map( gasto => (
            <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                EliminarGasto={EliminarGasto}
            />
        ))}
          </>
        )}

       
    </div>
  )
}

export default ListadoGastos