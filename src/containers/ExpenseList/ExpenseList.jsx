import { List } from "components/List/List";
import { useSelector } from "react-redux";

export function ExpenseList() {
  //hook - useSelector
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  return <List items={expenseList} />;
}
