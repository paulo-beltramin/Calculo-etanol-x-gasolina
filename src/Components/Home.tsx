import { useState, type ReactNode } from 'react'
import '../Components/styles.css'
import Logo from '../assets/logo.png'

interface infoProps {
    title: String,
    etanol: ReactNode,
    gasoline: ReactNode
}


const Home = () => {

    const [alcoholInput, setAlcoholInput] = useState(0)
    const [gasolineInput, setGasolineInput] = useState(0)
    const [info, setInfo] = useState<infoProps>()


    const handleCalculation = () => {
        let calculation = (alcoholInput / gasolineInput)

        if (calculation <= 0.7) {
            setInfo({
                title: "Compensa usar etanol",
                etanol: formatPrice(alcoholInput),
                gasoline: formatPrice(gasolineInput)

            })
        } else {
            setInfo({
                title: "Compensa usar Gasolina",
                etanol: formatPrice(alcoholInput),
                gasoline: formatPrice(gasolineInput)

            })
        }

        setAlcoholInput(0)
        setGasolineInput(0)

    }

    const formatPrice = (valor: Number) => {
        const price = valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        })

        return price
    }
    return (
        <>
            <main className='container'>
                <div className='container-image'>
                    <img src={Logo} alt="" />
                    <h1>Qual a melhor opção ?</h1>

                    <div className='container-input'>
                        <label>Álcool (preço por litro):</label>
                        <input type="number"

                            value={alcoholInput} onChange={e => setAlcoholInput(Number(e.target.value))} />

                        <label>Gasolina (preço por litro):</label>
                        <input type="number"
                            value={gasolineInput} onChange={e => setGasolineInput(Number(e.target.value))} />

                        <button onClick={handleCalculation}>Calcular</button>
                    </div>

                    {info && (
                        <div className='container-lista'>
                            <h3>{info?.title}</h3>

                            <strong>{info?.etanol}</strong>
                            <strong>{info?.gasoline}</strong>

                        </div>
                    )}
                </div>
            </main>
        </>
    )
}

export default Home