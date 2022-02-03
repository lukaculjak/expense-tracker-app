import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "felge",
    amount: "900",
    date: new Date(2021, 3, 12),
  },
  {
    id: "e2",
    title: "gumeeeeee",
    amount: "700",
    date: new Date(2020, 10, 25),
  },
  {
    id: "e3",
    title: "kocnice",
    amount: "400",
    date: new Date(2021, 6, 3),
  },
  {
    id: "e4",
    title: "dizne",
    amount: "350",
    date: new Date(2021, 6, 29),
  },
  {
    id: "e5",
    title: "zvake",
    amount: "15",
    date: new Date(2021, 3, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
