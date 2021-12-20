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
                    <div className='texto-destaque'>
                        <h1 className="titulo"><span className="span-destaque">Que tal ampliar essa experiência?</span></h1>
                        <p><span className="span__contato">Arte é movimento.</span> E para quem não quer parar por aqui, convidamos para o preenchimento do formulário a seguir. A partir das suas respostas, entraremos em contato informando sobre a produção artística e demais assuntos relacionados aos nossos artistas e às suas comunidades. </p>
                        <p>Deixamos também o convite para que vocês conheçam a Apib - Articulação dos povos indígenas do Brasil,<a href='https://linktr.ee/apiboficial' target="_blank"> clicando aqui.</a> Lá vocês podem conhecer as várias ações em curso e ajudar a fortalecer a luta dos <span className='span-contato'>povos originários do Brasil.</span></p>
                    </div>
                    <form className="formulario" action='./' method='POST'>
                        <div className="campo-form">
                            <label for="nome">Nome:</label>
                            <input id="nome"
                                type="text" name="nome"
                                placeholder="Digite o seu nome" required>
                            </input>

                            <label for="indicacoes">Qual o seu pronome?</label>
                            <select>
                                <option value="vazio"></option>
                                <option value="feminino">ela/dela</option>
                                <option value="masculino">ele/dele</option>
                                <option value="neutro">elu/delu</option>
                                <option value="neutro">prefiro não declarar</option>


                            </select>

                            <label for="email">Digite o seu email:</label>
                            <input id="email" type="email"
                                name="email" placeholder="seuemail@dominio.com">
                            </input>

                            <label for="telefone">Digite o seu telefone:</label>
                            <input id="telefone" type="tel"
                                name="telefone" placeholder="(XX) XXXXX-XXXX">
                            </input>

                            <label for="mensagem">Digite a sua mensagem:</label>
                            <textarea id="mensagem" rows="6" name="mensagem"
                                placeholder="Mensagem">
                            </textarea>

                            <label for="indicacoes">Qual indicação você gostaria de receber?</label>
                            <select name="indicacoes-visitantes" id="indicacoes">
                                <option value="cursos">Notícias sobre exposições</option>
                                <option value="livros">Notícias sobre festividades</option>
                                <option value="pefis-para-seguir">Perfis para seguir </option>
                            </select>

                            <button>Enviar</button>

                        </div>
                    </form>

                </section>
            </main>
            <Footer />


        </>
    )

}

export default Contato