const Animal = (props) => {
    const {image_link, name, latin_name, habitat, diet, geo_range} = props.animalGallery;

    return (
            <article className="card__home card__animal container">
                <img className="imggallery" src= {image_link} />
                <h2><strong>Name:</strong> {name}</h2>
                <div className="card__detail">
                    
                    <p><strong>Latin name:</strong> {latin_name}</p>
                    <p><strong>Habitat:</strong> {habitat}</p>
                    <p><strong>Diet:</strong> {diet}</p>
                    <p><strong>Localization:</strong> {geo_range}</p>
                </div>
            </article>
    )
}

export default Animal;