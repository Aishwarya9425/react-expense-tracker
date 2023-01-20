import { ExpenseInput } from "containers/ExpenseInput/ExpenseInput";
import s from "./style.module.css";
import { ExpenseList } from "containers/ExpenseList/ExpenseList";

export function App() {
  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-3`}>Logo</div>
        <div className={`col-9 ${s.income_input}`}>Income input</div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <ExpenseList />
          <div className={`col-12 ${s.expense_total}`}>Expense Total</div>
        </div>
      </div>
    </div>
  );
}
