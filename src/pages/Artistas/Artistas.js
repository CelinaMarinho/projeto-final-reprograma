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
                <h1 id="titulo"><i>Artistas</i></h1>
                <div className="pankararu">
                    <p className="paragrafo-1"><span className="span-destaque">Leonardo Silva (Fykyá Pankararu)</span>, Indígena LGBTQIA+ de 22 anos de idade, pertencente ao povo Pankararu do sertão de Pernambuco, é ativista das causas Indígenas, artista visual, cantador e compositor, em suas obras busca desconstruir visões equivocadas sobre o ser índigena contemporâneo.</p>
                    <img className="teste" src={Image2} alt="artista Léo"/>

                    <p>não tive dúvidas: tentei novamente! Independente do resultado, eu iria seguir tentando, até alcançar o meu objetivo. Hoje, posso dizer que estou vivendo um sonho! As professoras, as monitoras, a facilitadora, todas são incríveis. E minhas colegas de curso, o que dizer dessa potência de mulheres?! Todas essas mulheres estão me fazendo viver um sonho único!</p>

                    

                </div>
                

                
            </section>

            <Footer />
            
            
        </>
    )

}

export default Artistas