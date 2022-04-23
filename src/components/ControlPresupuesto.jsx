import {useEffect, useState} from 'react'

const ControlPresupuesto = ({presupuesto, gastos, setGastos, setPresupuesto, setIsValidPresupuesto}) => {

    const [gastado, setGastado ] = useState(0)
    const [ disponible, setDisponble ] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto-totalGastado
        setDisponble(totalDisponible)
        setGastado(totalGastado)      
    }, [gastos])
    
    

    const formatearCantidad= (cantidad)=>{
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetAPP = ()=>{
        const res = confirm('¿Desea reiniciar presupuesto y gastos?')
        if(res)
        {
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica</p>
        </div>
        <div className='contenido-presupuesto'>
            <button 
                className='reset-app'
                type='button'
                onClick={handleResetAPP}
            >
                Reiniciar app
            </button>
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : '' }`}>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span>{formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto