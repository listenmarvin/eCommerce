import { useNavigate } from "react-router-dom";

export default function Checkout(props) {
  const navigate = useNavigate();

  let tempValue = 0;
  tempValue = props.passLogin;
  console.log(tempValue);
  //This function navigates to Ordersucessfull.js
  function handleLogin() {
    navigate("/Ordersucessfull");
  }
  //This takes the delivery location of the customber
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div class="col-md-8 order-md-1">
        {tempValue === 1 ? <h1>You have Loged In</h1> : <h1>Guest User</h1>}
        <h4 class="mb-3">Delivery address</h4>
        <form class="needs-validation" novalidate>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">Enter Your name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                required
              />
              <div class="invalid-feedback">Valid name is required.</div>
            </div>
          </div>

          <div class="mb-3">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="you@example.com"
            />
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
          <div class="mb-3">
            <label for="address">Address</label>
            <textarea
              type="textarea"
              class="form-control"
              id="address"
              placeholder="1234 Main St"
              required
            />
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="country">Country</label>
              <select class="custom-select d-block w-100" id="country" required>
                <option value="">Choose...</option>
                <option>India</option>
              </select>
              <div class="invalid-feedback">Please select a valid country.</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="state">State</label>
              <select class="custom-select d-block w-100" id="state" required>
                <option value="">Choose...</option>
                <option>Karnataka</option>
                <option>UP</option>
                <option>MP</option>
                <option>Delhi</option>
                <option>Kerala</option>
              </select>
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Zip</label>
              <input
                type="text"
                class="form-control"
                id="zip"
                placeholder=""
                required
              />
              <div class="invalid-feedback">Zip code required.</div>
            </div>
          </div>
          <button
            class="btn btn-danger btn-lg btn-block"
            type="button"
            onClick={() => handleLogin()}
          >
            Place Your Order
          </button>
        </form>
      </div>
    </div>
  );
}
