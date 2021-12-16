/*import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useState, useEffect } from 'react'


const Obras = () => {

    const [obrasArtes, setobrasArtes] = useState([])
    const [busca, setBusca] = useState('')                           
    const [filtro, setFiltro] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/CelinaMarinho/imagens-arte-indigena/db")
            .then(response => response.json())
            .then(data => setobrasArtes(data))
    }, [])

    useEffect(()=> {
        setFiltro(                                                    
            obrasArtes.filter(obra =>  {
                return obra.type.includes(busca)
            })
        )
    }, [obrasArtes, busca])  


    return (
        <>
            <Menu />
            <Header />
            <section>
                <h1>Produtos</h1>
                <div className="obras-arte">
                    <input 
                    placeholder="Insira o tipo da obra" 
                    onChange={e => {setBusca(e.target.value)}} 
                    />

                    {filtro.map(item =>        
                        <div key={item.id}>
                            <ul>
                                <li>
                                    <h2>{item.name}</h2>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                
            </section>
            <Footer />
            
            
        </>
    )

}

export default Obras*/



