import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './home.styles.css'
import ImageL from '../../assets/vetor_folhas.jpeg'


const Home = () => {
    return (
        <>
            <Menu />
            <Header />
            <main>
                

                <section className='card-introducao' id="povos-indigenas">

                    <p className="p__manifesto">A gente não quer só comida.<br></br>
                    A gente quer comida, diversão e arte.<br></br>
                    Demarcação.<br></br> Saúde.<br></br> Segurança.<br></br>
                    A gente quer respeito aos povos indígenas!</p>
                    
                    <div className="img__manifesto" >
                        <img className='folha'  src={ImageL} alt="ícone de três folhas pequenas juntas"/>
                    </div>
                    
                    <h1 className="titulo">
                        <span className="span-destaque">Sejam bem-vindes!</span>
                    </h1>

                        <div class="container-texto-paragrafos">
                            <p><span className='span__home'>Gonengo Tiana!</span> Essa saudação, que significa seja bem-vindo, em língua Xukuru, 
                            reflete o meu desejo a todas as pessoas que visitam esse site. Este projeto é parte integrante das atividades da 
                            turma 13 de front-end da Reprograma,<span>do projeto Todas em Tech.</span></p>
                            <p> A escolha dessa temática surgiu como forma de homenagear e valorizar a produção de artistas de origem 
                            indígena. Os indígenas, os povos originários desse país, infelizmente, ainda são sub-representados 
                            em várias esferas da vida política e social. Esses povos têm e sempre tiveram voz, assim como todos 
                            os outros que são minorizados no Brasil. A arte é uma destas formas de expressão e, através dela, 
                            podemos conhecer um pouco sobre a identidade de cada artista, assim como traços do seu povo e da sua 
                            ancestralidade em suas obras.
                            </p>

                            <p>Este espaço surgiu como forma de reverenciar e ajudar a divulgar as diversas manifestações artísticas produzidas por artistas indígenas do estado de Pernambuco. Artistas estes que estão em estágio inicial e/ou ainda não têm as redes de divulgação do seu trabalho estruturadas, bem como apresentar informações como a localização e os costumes dos povos aos quais estes artistas pertencem.</p>
                        </div>

                    <div class="container-texto">
                            <div className='card-povos'>

                                <div className='povos'>
                                    <h2 className='h2__povos'>Atikum</h2>
                                    {/* <p>O povo Pankararu é um grupo indígena brasileiro que habita as proximidades do médio rio São Francisco,  
                                    nos limites dos municípios de Tacaratu e Petrolândia, ambos no estado de Pernambuco, e o Norte da Serra 
                                    do Ramalho, no município de Bom Jesus da Lapa, no estado da Bahia (fonte: Wikipedia)
                                    </p>*/}
                                </div>

                                <div className='povos'>
                                    <h2 className='h2__povos' id="etnias">Fulni-ô</h2>
                                </div>

                                <div className='povos'>
                                    <h2 className='h2__povos'>Kambiwá</h2>
                                </div>

                                <div className='povos'>
                                    <h2 className='h2__povos'>Kapinawá</h2>
                                </div>

                                <div className='povos'>
                                    <h2 className='h2__povos' id="etnia1">Pankará</h2>       
                                </div>                     
                                
                                <div className='povos'>
                                    <h2 className='h2__povos'>Pankararu</h2>
                                    {/* <p>O povo Pankararu é um grupo indígena brasileiro que habita as proximidades do médio rio São Francisco,  
                                    nos limites dos municípios de Tacaratu e Petrolândia, ambos no estado de Pernambuco, e o Norte da Serra 
                                    do Ramalho, no município de Bom Jesus da Lapa, no estado da Bahia (fonte: Wikipedia)
                                    </p>*/}
                                </div>

                                <div className='povos'>
                                    <h2 className='h2__povos'>Pipipã</h2>
                                </div>

                                <div className='povos'>
                                    <h2 className='h2__povos' id="etnia2">Truká</h2>
                                </div>

                                <div className='povos'>
                                    <h2 className='h2__povos'>Tuxá</h2>
                                </div>

                                <div className='povos'>
                                    <h2 className='h2__povos' id="etnia3">Xukuru</h2>
                                    {/* <p>Os Xukurus são um grupo indígena brasileiro, uma ramificação dos Tarairiús que habita a Serra do Ororubá,  
                                    no município brasileiro de Pesqueira (Poção), estado de Pernambuco. Habitam a Terra Indígena Xukuru. 
                                    Autodenominam-se Xukuru do Ororubá para distinguir-se do povo Xukuru-Cariri de Alagoas.</p>*/}
                                    
                                </div>
                            
                            </div>
                    </div>
                </section>
            </main>
            <Header />
            <Footer />
        </>
    )

}

export default Home