import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CaffeeCard = ({ coffee }) => {
  const { photo, _id, name, quantity, supplier, taste, details } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    // sweet alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
        console.log("Delete Confirm");
      }
    });
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className=" flex justify-between w-full  pr-3">
          <div>
            <figure>
              <img src={photo} alt="Shoes" />
            </figure>
            <h2 className="card-title">{name}</h2>
            <p>{details}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical flex flex-col gap-2 justify-center items-center ">
              <button className="btn btn-secondary m-2">View</button>
              <Link to={`coffee/${_id}`} className="btn btn-primary m-2">
                Edit
              </Link>
              <button
                onClick={() => {
                  handleDelete(_id);
                }}
                className="btn btn-error m-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaffeeCard;
