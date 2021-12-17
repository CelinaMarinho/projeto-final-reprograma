import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useState, useEffect } from 'react'


function Obras () {

    const [obrasArtes, setObrasArtes] = useState([])
    const [busca, setBusca] = useState('')                           
    const [filtro, setFiltro] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/CelinaMarinho/imagens-arte-indigena/db")
            .then(response => response.json())
            .then(data => setObrasArtes(data))
    }, [])

   /* useEffect(() => {
        setFiltro(                                                    
            obrasArtes.images.filter(obra =>  {
                return obra.type.includes(busca)
            })
        )
    }, [obrasArtes, busca])*/

    //console.log(obrasArtes)
    console.log(obrasArtes.images)


    return (
        <>
            <Menu />
            <Header />
            <section>
            <h1 className="titulo">
                    <span className="span-destaque">Obras</span>
                </h1>
                <div className="obras-arte">
                    <input 
                    placeholder="Insira o tipo da obra" 
                    onChange={e => {setBusca(e.target.value)}} 
                    />

                    {obrasArtes.images?.map(item =>        
                        <div key={item?.id}>
                            {console.log(item.image)}
                            <ul>
                                <li>
                                    <h2>{item?.title}</h2>
                                    <img 
                                        src={item?.image}

                                        alt={item?.title}
                                    />
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



            
//"https://my-json-server.typicode.com/CelinaMarinho/imagens-arte-indigena/imagem"


