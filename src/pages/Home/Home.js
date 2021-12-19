import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './home.styles.css'


const Home = () => {
    return (
        <>
            <Menu />
            <Header />
            <main>
                <section className='card-introducao' id="povos-indigenas"> 
                    <h1 className="titulo">
                        <span className="span-destaque">Sejam bem-vindes!</span>
                    </h1>
                    
                        
                        <div class="container-texto"> 
                            <div class="container-texto-paragrafos">
                                <p><span className='span__home'>Gonengo Tiana!</span> Essa saudação, seja bem-vindo, em língua Xukuru, reflete o meu desejo a todas as pessoas que visitam esse site. Este projeto é parte integrante das atividades da turma 13 de front-end da Reprograma,<span className='span__home'> do projeto Todas em Tech.</span></p>

                                <p> A escolha dessa temática surgiu como forma de homenagear e valorizar a produção de artistas de origem indígena. Os indígenas, os povos originários desse país, infelizmente, ainda são sub-representados em várias esferas da vida política e social. Esses povos têm e sempre tiveram voz, assim como todos os outros que são minorizados no Brasil. A arte é uma destas formas de expressão e, através dela, podemos conhecer um pouco sobre a identidade de cada artista, assim como traços do seu povo e da sua ancestralidade em suas obras.</p>
                                
                                <h2 className='subtitulos'>Pankararu</h2>
                                <p>O povo Pankararu é um grupo indígena brasileiro que habita as proximidades do médio rio São Francisco, nos limites dos municípios de Tacaratu e Petrolândia, ambos no estado de Pernambuco, e o Norte da Serra do Ramalho, no município de Bom Jesus da Lapa, no estado da Bahia (fonte: Wikipedia).</p>
                                <h2 className='subtitulos'>Xukuru</h2>
                                <p>Os Xukurus são um grupo indígena brasileiro, uma ramificação dos Tarairiús que habita a Serra do Ororubá, no município brasileiro de Pesqueira (Poção), estado de Pernambuco. Habitam a Terra Indígena Xukuru. Autodenominam-se Xukuru do Ororubá para distinguir-se do povo Xukuru-Cariri de Alagoas</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid ad, recusandae laborum sapiente ut inventore nihil dolore vel necessitatibus deserunt fugiat, numquam possimus. Quis, odio. Consequatur unde earum officiis</p>
                            </div>
                            
                        </div>
                    
                </section>
            </main>
            <Footer />

            
            
        </>
    )

}

export default Home