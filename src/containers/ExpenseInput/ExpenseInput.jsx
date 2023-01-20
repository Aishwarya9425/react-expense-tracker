import s from "./style.module.css";
import { addExpenseAction } from "store/expense/expense-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

//ExpenseInput is a connected component - reading/writing into store

export function ExpenseInput(props) {
  //to call action we need to use dispatch
  const dispatch = useDispatch();

  const [price, setPrice] = useState();
  const [expensename, setExpenseName] = useState();

  function submit(e) {
    e.preventDefault(); // to cancel reloading on submit
    dispatch(addExpenseAction({ price, name: expensename }));
    console.log("Submitted the form ", e);
  }

  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            onChange={(e) => {
              setExpenseName(e.target.value);
            }}
            name="name"
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
