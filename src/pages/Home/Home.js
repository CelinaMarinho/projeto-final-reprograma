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
                    <h1 className="titulo-home">Artistas e seus territórios</h1>
                    
                    <div class="container-texto"> 
                        <div class="container-texto-paragrafos">
                            <p>não tive dúvidas: tentei novamente! Independente do resultado, eu iria seguir tentando, até alcançar o meu objetivo. Hoje, posso dizer que estou vivendo um sonho! As professoras, as monitoras, a facilitadora, todas são incríveis. E minhas colegas de curso, o que dizer dessa potência de mulheres?! Todas essas mulheres estão me fazendo viver um sonho único!</p>
                            <p>Loreispsum </p>
                            <p>Loreispsum</p>
                            <p>Loreispsum</p>
                        </div>
                        
                    </div>
                    
                </section>
            </main>
            <Footer />

            
            
        </>
    )

}

export default Home