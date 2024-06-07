import estilos from './Lateral.module.css';
import { Link } from 'react-router-dom';
import imagemPerfil from '../Imagem/perfil.jpg'; // Substitua pelo caminho correto da sua imagem

export function Lateral() {
    return (
        <aside className={estilos.conteiner}>
            <header>
                <div className={estilos.imagemPerfilContainer}>
                    <img className={estilos.imagemPerfil} src={imagemPerfil} alt="Imagem de Perfil" />
                </div>
            </header>
            <section>
                <Link
                    className={estilos.botao}
                    to='/inicial'>
                    Lista Sensores
                </Link>

                <Link

                    className={estilos.botao}
                    to='/inicial/cadsensor'
                >Cadastrar Sensor
                </Link>
                <Link
                    className={estilos.botao}
                    to='/inicial/localizacao'
                >Mapa
                </Link>
                <Link
                    className={estilos.botao}
                    to='/inicial/cadastro'
                >Cadastro
                </Link>
                <Link
                    className={estilos.botao}
                    to='/inicial/filtro'
                >Filtro
                </Link>
            </section>
        </aside>
    )
}
