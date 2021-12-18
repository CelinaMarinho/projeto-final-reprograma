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
                        <span className="span-destaque">Gonego Tiana!</span>
                    </h1>
                    <p className='p__home'>Sejam bem-vindos, em língua Xukuru</p>
                        
                        <div class="container-texto"> 
                            <div class="container-texto-paragrafos">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid ad, recusandae laborum sapiente ut inventore nihil dolore vel necessitatibus deserunt fugiat, numquam possimus. Quis, odio. Consequatur unde earum officiis</p>
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