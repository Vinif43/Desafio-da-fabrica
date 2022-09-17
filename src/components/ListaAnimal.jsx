import Animal from "./Animal.jsx";

const ListaAnimal = (props) => {
    const animal = props.animal;


return(
    <>
        {animal.map((objeto) => {
            return <Animal key={objeto.id} animalGallery={objeto} />
        })}
    </>
)
}

export default ListaAnimal