import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


const Contato = () => {
    return (
        <>
            <Menu />
            <Header />
            <section>
                <h1>Contato</h1>
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
                            <option value="artigos">Artigos</option>
                            <option value="cursos">Cursos</option>
                            <option value="livros">Livros</option>
                            <option value="pefis-para-seguir">Perfis para seguir </option>
                        </select>    

                    </div>
                </form>
                
            </section>
            <Footer />
            
            
        </>
    )

}

export default Contato