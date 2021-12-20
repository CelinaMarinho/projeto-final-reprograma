import Menu from '../../components/Menu/Menu'
import './artistas.styles.css'
import Header from '../../components/Header/Header'
//import Image from '../../assets/pankararu.jpg'
import Image2 from '../../assets/perfil_leoartesao.jpg'
import Image4 from '../../assets/perfil_juliana.jpeg'
import Footer from '../../components/Footer/Footer'


const Artistas = () => {
    return (
        <>
            <Menu />
            <Header />
            <main>
                <section className='card-introducao'>
                    <h1 className="titulo"><span className="span-destaque">Artistas</span></h1>
                    

                    <div className="container__artistas">
                        <img className="img__artista" src={Image4} alt="artista Juliana Xukuru"/>

                        <p className="paragrafo-1"><span className="span-destaque">Juliana Alves Xukuru</span>, Artista Visual contemporânea indígena, de etnia pertencente ao povo Xukuru de Cimbres de Pesqueira - Pernambuco. Nasceu em uma das aldeias dos territórios Xukuru de Ororubá em Pesqueira Pernambuco.</p>
                        

                        <p>Formada em Artes Visuais pela Universidade Federal da Paraíba e Mestra em Artes Visuais pela Universidade Federal da Paraíba e Universidade Federal de Pernambuco -UFPB/UFPE.</p>

                        <p>Seu trabalho se desdobra a partir de uma busca por memorias e identidades , partindo de uma poética da “transparência” que problematiza pesos e levezas envolvidos na romantização sobre a figura da mulher, ampliando este estudo para o contexto da mulher indígena a partir de seu próprio corpo e contexto entre/com as outras mulheres de sua etnia.</p>

                        <a className='botao__artista' href='https://www.instagram.com/artistajulianaxukuru/' target="_blank" rel="noreferrer">Conheça a artista</a>  
                    </div>

                    <div className="container__artistas">
                        <img className="img__artista" src={Image2} alt="artista Léo"/>
                        <p className="paragrafo-1"><span className="span-destaque">Leonardo Silva (Fykyá Pankararu)</span>, Indígena LGBTQIA+ de 22 anos de idade, pertencente ao povo Pankararu do sertão de Pernambuco, é ativista das causas Indígenas, artista visual, cantador e compositor, em suas obras busca desconstruir visões equivocadas sobre o ser índigena contemporâneo.</p>
                        

                        <p>A inspiração para a construção de suas obras vem da tradição Pankararu, da sua vivência enquanto indígena Pankararu, como também de aspectos culturais da sociedade que reverberam e movem o interior do artista.</p>                         

                        <a className='botao__artista' href='https://www.instagram.com/fykyapankararu/' target="_blank" rel="noreferrer">Conheça o artista</a>              
                    </div>

                       
                    

                    
                </section>
            </main>
            <Header />
            <Footer />
            
            
        </>
    )

}

export default Artistas