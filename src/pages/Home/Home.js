import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
//import Footer from '../../components/Footer/Footer'
import './home.styles.css'


const Home = () => {
    return (
        <>
            <Menu />
            <Header />
            <main>
                <section className='card-introducao' id="povos-indigenas"> 
                    <h1><strong>Artistas e seus territórios</strong></h1>
                    
                    <div class="container-texto"> 
                        <div class="container-texto__paragrafos">
                            <p>Loreispsum</p>
                            <p>Loreispsum </p>
                            <p>Loreispsum</p>
                            <p>Loreispsum</p>
                        </div>
                        
                    </div>
                    
                </section>
            </main>

            
            Loreispsum
        </>
    )

}

export default Home