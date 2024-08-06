
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    // const [images, setImages] = useState([])
    // const [isLoading, setIsLoading] = useState(true)


    // const getImages = async() =>{
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    //     setIsLoading(false);
    // }

    // //EL useEffecto no puede ser una funcion asyncrona
    // useEffect(() => {
    //     getImages();
    // }, [])

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading 
                ? (<h2>Cargando...</h2>)
                :null
            }
            <div className='card-grid'>
                {images.map((image) => (
                    <GifItem key={image.id}  {...image} />
                ))}
            </div>
        </>
    )
}
