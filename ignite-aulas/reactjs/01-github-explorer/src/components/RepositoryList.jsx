const repositoryName = 'unform2';


export function RepositoryList(){
    return(
        <section className="repository-List">
            <h1>Lista de Repositórios</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>

                    <a href="https://">
                        Acessar Repositório
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="https://">
                        Acessar Repositório
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="https://">
                        Acessar Repositório
                    </a>
                </li>
            </ul>
        </section>
    );
}