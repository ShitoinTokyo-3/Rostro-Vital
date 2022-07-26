import { useState, useReducer, useEffect } from "react"
import s from './CheckList.module.css'
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { BiSquare } from "react-icons/bi";
import { FiCheckSquare } from "react-icons/fi";


const CheckList = () => {
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);


    let DATE = new Date().getDay()
    let week = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ]
    let day = week[DATE]

    let hour = new Date().getHours()

    let time = hour < 18 ? 'Dia' : 'Noche'

    const rutinas = [
        [
            { name: 'Ejercicios de Relajación', id: 1, checked: false },
            { name: 'Humectación', id: 2, checked: false },
            { name: 'Escote', id: 3, checked: false },
            { name: 'Cuello', id: 4, checked: false },
            { name: 'Ovalo Facial',id: 5, checked: false },
            { name: 'Zona Nasolabial', id: 6, checked: false },
            { name: 'Cuello', id: 7, checked: false },
            { name: 'Ovalo Facial', id: 8, checked: false },
            { name: 'Zona Nasolabial', id: 9, checked: false },
            { name: 'Mejillas', id: 10, checked: false },
            { name: 'Contorno de ojos', id: 11, checked: false },
            { name: 'Ceño de la frente', id: 12, checked: false },
            { name: 'Frente', id: 13, checked: false },
            { name: 'Nariz', id: 14, checked: false },
            { name: 'Protector Solar', id: 15, checked: false }
        ], [
            { name: 'Ejercicios de Relajación', id: 1, checked: false },
            { name: 'Humectación', id: 2, checked: false },
            { name: 'Escote', id: 3, checked: false },
            { name: 'Cuello', id: 4, checked: false },
            { name: 'Ovalo Facial',id: 5, checked: false },
            { name: 'Zona Nasolabial', id: 6, checked: false },
            { name: 'Cuello', id: 7, checked: false },
            { name: 'Ovalo Facial', id: 8, checked: false },
            { name: 'Zona Nasolabial', id: 9, checked: false },
            { name: 'Mejillas', id: 10, checked: false },
            { name: 'Contorno de ojos', id: 11, checked: false },
            { name: 'Ceño de la frente', id: 12, checked: false },
            { name: 'Frente', id: 13, checked: false },
            { name: 'Nariz', id: 14, checked: false },
            { name: 'Humectación', id: 15, checked: false }
        ]
    ]

  const [ rutina, setRutina ] = useState(rutinas[time === 'Dia' ? 0 : 1])

    const handleCheck = (id) => {
        setRutina(rutina.map(r => {
            if (r.id === id) {
                r.checked = !r.checked
            }
        }))
        setRutina(rutina)
        forceUpdate()
        localStorage.setItem('rutina', JSON.stringify(rutina))
    }

    useEffect(() => {
        if(localStorage.getItem('time') !== time) {
            console.log('cambio de hora')
            localStorage.removeItem('rutina')
            setRutina(rutinas[hour < 18 ? 0 : 1])
            localStorage.setItem('time', time)
        }
        if(localStorage.getItem('rutina')) {
            console.log('Hay rutina')
            setRutina(JSON.parse(localStorage.getItem('rutina')))
            localStorage.setItem('time', time)
        }else{
            console.log('No hay rutina')
            localStorage.setItem('time', time)
        } 
    }
    , [])



    return (
        <div className={s.container}>
            <div className={s.title}>
                <h1>{day}</h1>
                {time === 'Dia'? 
                <BsFillSunFill size={'4rem'} color={'#f9d8ff'} />: 
                <BsFillMoonStarsFill size={'4rem'} color={'#f9d8ff'} />}
            </div>

            <div className={s.spanDebajoDia}>
            Trabaja cada zona de 3 a 5 minutos como minimo con yoga y masajes.
            <br/>
            Selecciona la zona que estas trabajando sin dejar ninguna por fuera.
            </div>

            {rutina.map( rut => (
                <div key={rut.id} className={s.label} onClick={(e) => handleCheck(rut.id)} >
                    {rut.checked? 
                    <FiCheckSquare color={'#4f2266'} size={'1.5rem'} style={{marginRight: '2rem', marginBottom:'-5px'}}/>
                    : <BiSquare color={'#4f2266'} size={'1.5rem'} style={{marginRight: '2rem', marginBottom:'-5px'}}/>}
                    <label>
                        <input type='checkbox' onChange={(e) => handleCheck(rut.id)} checked={rut.checked} />
                        {rut.name}
                    </label>
                </div> 
            ))}

        </div>
  )
}

export default CheckList