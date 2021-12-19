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
            obrasArtes.filter((obra) =>  {
                return obra.type.includes(busca)
            })
        );
    }, [obrasArtes, busca])*/

    //console.log(obrasArtes)
    console.log(obrasArtes.indigena)


    return (
        <>
            <Menu />
            <Header />
            <main>
                <section className='card-introducao'>
                <h1 className="titulo">
                        <span className="span-destaque">Obras</span>
                    </h1>
                    <p className='p__obras'>Aqui vocês vão encontrar as obras dos nossos diversos artistas.<br>
                    </br> As obras estão categorizadas em esculturas, pinturas e ilustrações.</p>
                    <div className='container__esculturas'>
                        {/*
                        placeholder="Insira o tipo da obra" 
                        onChange={e => {setBusca(e.target.value)}} 
                        */}

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
            </main>
            <Footer />
            
            
        </>
    )

}

export default Obras