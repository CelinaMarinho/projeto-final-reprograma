import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './contato.styles.css'


const Contato = () => {
    return (
        <>
            <Menu />
            <Header />
            <main>
                <section className='card-introducao'>
                    <h1 className="titulo"><span className="span-destaque">Que tal ampliar essa experiência?</span></h1>
                    <p>Arte é movimento. E para quem não quer parar por aqui, convidamos para o preenchimento do formulário a seguir. A partir das suas respostas, entraremos em contato informando sobre a produção artística e demais assuntos relacionados aos nossos artistas e às suas comunidades. </p>
                    <p>Deixamos também o convite para que vocês conheçam a <a href='https://linktr.ee/apiboficial' target="_blank">Apib - Articulação dos povos indígenas do Brasil.</a> Lá vocês podem conhecer as várias ações em curso e ajudar a fortalecer a luta dos <span className='span-contato'>povos originários do Brasil.</span></p>
                        <form>
                            <div className="campo-form">
                                <label for="nome">Nome completo:</label>
                                <input id="nome" 
                                    type="text" name="nome" 
                                    placeholder="Digite o seu nome completo" required>
                                </input>

                                <label for="email">Digite o seu email:</label>
                                <input id="email" type="email" 
                                    name="email" placeholder="seuemail@dominio.com">
                                </input>

                                <label for="telefone">Digite o seu telefone:</label>
                                <input id="telefone" type="tel" 
                                    name="telefone" placeholder="(XX) XXXXX-XXXX">
                                </input>

                                <label for="mensagem">Digite a sua mensagem:</label>
                                <textarea id="mensagem" name="mensagem" 
                                    placeholder="Digite a sua mensagem">
                                </textarea>

                                <label for="indicacoes">Qual indicação você gostaria de receber?</label>
                                <select name="indicacoes-visitantes" id="indicacoes">
                                    <option value="cursos">Notícias sobre exposições</option>
                                    <option value="livros">Notícias sobre festividades</option>
                                    <option value="pefis-para-seguir">Perfis para seguir </option>
                                </select>    

                            </div>
                        </form>
                    
                </section>
            </main>
            <Footer />
            
            
        </>
    )

}

export default Contato