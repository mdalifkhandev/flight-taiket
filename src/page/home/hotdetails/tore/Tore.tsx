import image1 from '../../../../assets/three.jpg'
import image2 from '../../../../assets/fligth.jpg'
import image3 from '../../../../assets/tore.jpg'


const cardItem = [
    {
        image: image1,
    },
    {
        image: image3,
    },
    {
        image: image2,
    },
]
const Tore = () => {
    return (
        <div className='mb-5 gap-3 flex'>

        {
            cardItem.map((item) => {
                return (
                    <div className="card bg-base-100 w-full rounded shadow-sm" key={item.image}>
                        <figure>
                            <img
                                className='rounded-xl'
                                src={item.image}
                                alt="Shoes" />
                        </figure>
                    </div>
                )
            })
        }



    </div>
    );
};

export default Tore;