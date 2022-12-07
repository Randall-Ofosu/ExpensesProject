import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "1",
      title: "Car Insurance",
      date: new Date(2022, 2, 14),
      amount: 234.54,
    },
    {
      id: "2",
      title: "Toilet Paper",
      date: new Date(2022, 3, 19),
      amount: 453.45,
    },
    {
      id: "3",
      title: "Car Washer",
      amount: 5625.6,
      date: new Date(2022, 5, 12),
    },
    {
      id: "4",
      title: "Waakye Seller",
      amount: 234.7,
      date: new Date(2022, 8, 2),
    }
  ];
  const addExpenseHandler = (expense) => {
    console.log('In my app.js');
    console.log(expense);
  }
  return (
    <div>
    <h2>Let's get started!</h2>
    <h2>Let's get started!</h2>
    <h2>Let's get started!</h2>

    <NewExpense onAddExpense={addExpenseHandler} />
    <Expense items={expenses}/>
    </div>
  );
}

export default App;
