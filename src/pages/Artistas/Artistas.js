import Menu from '../../components/Menu/Menu'
import './artistas.styles.css'
//import Image from '../../assets/pankararu.jpg'
import Image2 from '../../assets/leoartesao.jpg'
//import Footer from '../../components/Footer/Footer'


const Artistas = () => {
    return (
        <>
            <Menu />
            <section>
                <h1 id="titulo"><i>Artistas</i></h1>
                <div className="pankararu">
                    <p><b><i>Leonardo Silva (Fykyá Pankararu)</i></b>, Indígena LGBTQIA+ de 22 anos de idade, pertencente ao povo Pankararu do sertão de Pernambuco, é ativista das causas Indígenas, artista visual, cantador e compositor, em suas obras busca desconstruir visões equivocadas sobre o ser índigena contemporâneo.</p>
                    <img className="teste" src={Image2} alt="artista Léo"/>

                    

                </div>
                

                
            </section>
            
            
        </>
    )

}

export default Artistas