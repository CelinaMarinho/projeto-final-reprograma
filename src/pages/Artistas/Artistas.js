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
            <section>
                <h1 className="titulo"><span className="span-destaque">Artistas</span></h1>
                <div className="pankararu">
                    <p className="paragrafo-1"><span className="span-destaque">Leonardo Silva (Fykyá Pankararu)</span>, Indígena LGBTQIA+ de 22 anos de idade, pertencente ao povo Pankararu do sertão de Pernambuco, é ativista das causas Indígenas, artista visual, cantador e compositor, em suas obras busca desconstruir visões equivocadas sobre o ser índigena contemporâneo.</p>
                    

                    <p>não tive dúvidas: tentei novamente! Independente do resultado, eu iria seguir tentando, até alcançar o meu objetivo. Hoje, posso dizer que estou vivendo um sonho! As professoras, as monitoras, a facilitadora, todas são incríveis. E minhas colegas de curso, o que dizer dessa potência de mulheres?! Todas essas mulheres estão me fazendo viver um sonho único!</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid ad, recusandae laborum sapiente ut inventore nihil dolore vel necessitatibus deserunt fugiat, numquam possimus. Quis, odio. Consequatur unde earum officiis.</p>

                    <img className="img__artista" src={Image2} alt="artista Léo"/>

                    
                </div>

                <div className="pankararu">
                    <p className="paragrafo-1"><span className="span-destaque">Leonardo Silva (Fykyá Pankararu)</span>, Indígena LGBTQIA+ de 22 anos de idade, pertencente ao povo Pankararu do sertão de Pernambuco, é ativista das causas Indígenas, artista visual, cantador e compositor, em suas obras busca desconstruir visões equivocadas sobre o ser índigena contemporâneo.</p>
                    

                    <p>não tive dúvidas: tentei novamente! Independente do resultado, eu iria seguir tentando, até alcançar o meu objetivo. Hoje, posso dizer que estou vivendo um sonho! As professoras, as monitoras, a facilitadora, todas são incríveis. E minhas colegas de curso, o que dizer dessa potência de mulheres?! Todas essas mulheres estão me fazendo viver um sonho único!</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid ad, recusandae laborum sapiente ut inventore nihil dolore vel necessitatibus deserunt fugiat, numquam possimus. Quis, odio. Consequatur unde earum officiis.</p>

                    <img className="img__artista" src={Image2} alt="artista Léo"/>


                </div>
                

                
            </section>

            <Footer />
            
            
        </>
    )

}

export default Artistas