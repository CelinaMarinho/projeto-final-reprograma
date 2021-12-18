import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './obras.styles.css'

import { useState, useEffect } from 'react'

//import { BsArrowReturnRight } from 'react-icons/bs'



function Obras () {

    const [obrasArtes, setObrasArtes] = useState([])
    const [busca, setBusca] = useState('')                         
    const [filtro, setFiltro] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/CelinaMarinho/imagens-arte-indigena/db")
            .then(response => response.json())
            .then(data => setObrasArtes(data))
    }, [])

    /*useEffect(() => {
        setFiltro(                                                    
            obrasArtes.images.filter(obra =>  {
                return obra.type.includes(busca)
            })
        )
    }, [obrasArtes, busca])*/

    //console.log(obrasArtes)
    console.log(obrasArtes.indigena)


    return (
        <>
            <Menu />
            <Header />
            <section>
            <h1 className="titulo">
                    <span className="span-destaque">Obras</span>
                </h1>
                <div className='container__esculturas'>
                    {/* <input 
                    placeholder="Insira o tipo da obra" 
                    onChange={e => {setBusca(e.target.value)}} 
                    /> */}

                    {obrasArtes.indigena?.map(item =>        
                        <div className="obras-arte" key={item?.id}>
                            {console.log(item.image)}
                            <ul className='esculturas'>
                                <li>
                                    <div className='card__esculturas'>
                                        <h2>{item?.title}</h2>
                                        <img className="esculturas__imagem"
                                            src={item?.image}

                                            alt={item?.title}
                                        />
                                    </div>

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

export default Obras