import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      photo,
      details,
    };
    // post request by fetch
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Added!", "Coffee Added Successfully", "success");
        }
      });
  };
  return (
    <div className="p-24">
      <h1 className="text-3xl font-extrabold mb-8">Add Coffee</h1>
      <form onSubmit={handleAddCoffee}>
        {/* form row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              name="name"
              className="input input-bordered w-full"
              placeholder="Coffee Name"
              type="text"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              className="input input-bordered w-full"
              placeholder="Quantity"
            />
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              className="input input-bordered w-full"
              placeholder="Supplier"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              className="input input-bordered w-full"
              placeholder="Taste"
            />
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              className="input input-bordered w-full"
              placeholder="Category"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              className="input input-bordered w-full"
              placeholder="Details"
            />
          </div>
        </div>

        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            className="input input-bordered w-full"
            placeholder="URL"
          />
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block m-2 btn-success"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
