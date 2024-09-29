const CaffeeCard = ({ coffee }) => {
  const { photo, name, quantity, supplier, taste, details } = coffee;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className=" flex justify-between w-full">
          <div>
            <figure>
              <img src={photo} alt="Shoes" />
            </figure>
            <h2 className="card-title">{name}</h2>
            <p>{details}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical">
              <button className="btn join-item">Button</button>
              <button className="btn join-item">Button</button>
              <button className="btn join-item">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaffeeCard;
