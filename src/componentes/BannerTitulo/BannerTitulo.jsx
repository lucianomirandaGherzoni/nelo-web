import './BannerTitulo.css'

const BannerTitulo = (props) => {
    return (
        <div className="titulo-banner">
            <h2>{props.titulo}</h2>
            <h4>{props.subtitulo}</h4>
        </div>
    )
}

export default BannerTitulo