import Menu from '../../components/Menu/Menu'
import './artistas.styles.css'
import Header from '../../components/Header/Header'
//import Image from '../../assets/pankararu.jpg'
import Image2 from '../../assets/leoartesao.jpg'
import Footer from '../../components/Footer/Footer'


const Artistas = () => {
    return (
        <>
            <Menu />
            <Header />
            <main>
                <section className='card-introducao'>
                    <h1 className="titulo"><span className="span-destaque">Artistas</span></h1>
                    <div className="pankararu">
                        <p className="paragrafo-1"><span className="span-destaque">Leonardo Silva (Fykyá Pankararu)</span>, Indígena LGBTQIA+ de 22 anos de idade, pertencente ao povo Pankararu do sertão de Pernambuco, é ativista das causas Indígenas, artista visual, cantador e compositor, em suas obras busca desconstruir visões equivocadas sobre o ser índigena contemporâneo.</p>
                        

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid ad, recusandae laborum sapiente ut inventore nihil dolore vel necessitatibus deserunt fugiat, numquam possimus. Quis, odio. Consequatur unde earum officiis.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid ad, recusandae laborum sapiente ut inventore nihil dolore vel necessitatibus deserunt fugiat, numquam possimus. Quis, odio. Consequatur unde earum officiis.</p>

                        <img className="img__artista" src={Image2} alt="artista Léo"/>

                        
                    </div>

                    <div className="pankararu">
                        <p className="paragrafo-1"><span className="span-destaque">Leonardo Silva (Fykyá Pankararu)</span>, Indígena LGBTQIA+ de 22 anos de idade, pertencente ao povo Pankararu do sertão de Pernambuco, é ativista das causas Indígenas, artista visual, cantador e compositor, em suas obras busca desconstruir visões equivocadas sobre o ser índigena contemporâneo.</p>
                        

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid ad, recusandae laborum sapiente ut inventore nihil dolore vel necessitatibus deserunt fugiat, numquam possimus. Quis, odio. Consequatur unde earum officiis</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid ad, recusandae laborum sapiente ut inventore nihil dolore vel necessitatibus deserunt fugiat, numquam possimus. Quis, odio. Consequatur unde earum officiis.</p>

                        <img className="img__artista" src={Image2} alt="artista Léo"/>


                    </div>
                    

                    
                </section>
            </main>

            <Footer />
            
            
        </>
    )

}

export default Artistas