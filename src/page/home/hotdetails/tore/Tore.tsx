import image1 from '../../../../assets/three.jpg';
import image2 from '../../../../assets/fligth.jpg';
import image3 from '../../../../assets/tore.jpg';

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
];

const Tore = () => {
  return (
    <div className="mb-5 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {cardItem.map((item) => {
        return (
          <div
            className="card bg-base-100 w-full   rounded shadow-sm m-2"
            key={item.image}
          >
            <figure>
              <img
                className="rounded-xl w-full h-auto object-cover"
                src={item.image}
                alt="Tore"
              />
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default Tore;