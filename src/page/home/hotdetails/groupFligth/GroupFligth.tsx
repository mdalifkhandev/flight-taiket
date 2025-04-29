import image1 from '../../../../assets/three.jpg';
import image2 from '../../../../assets/fligth.jpg';
import image3 from '../../../../assets/tore.jpg';

const cardItem = [
    {
        image: image1,
    },
    {
        image: image2,
    },
    {
        image: image3,
    },
];

const GroupFligth = () => {
    return (
        <div className="mb-5 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cardItem.map((item) => {
                return (
                    <div
                        className="card bg-base-100 w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        key={item.image}
                    >
                        <figure>
                            <img
                                className="rounded-lg object-cover w-full h-48 sm:h-64"
                                src={item.image}
                                alt="Flight"
                            />
                        </figure>
                    </div>
                );
            })}
        </div>
    );
};

export default GroupFligth;