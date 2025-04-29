import image1 from '../../../../assets/three.jpg'
import image2 from '../../../../assets/fligth.jpg'
import image3 from '../../../../assets/tore.jpg'


const cardItem = [
    {
        image: image2,
    },
    {
        image: image1,
    },
    {
        image: image3,
    },
]
const Visa = () => {
    return (
        <div className="mb-5 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

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

export default Visa;