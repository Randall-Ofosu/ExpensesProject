import Expense from "./components/Expenses/Expense";

const App = () => {
  const expense = [
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
  ];
  return (
    <div>
    <h2>Let's get started!</h2>
    <Expense items={expense}/>
    </div>
  );
}

export default App;
