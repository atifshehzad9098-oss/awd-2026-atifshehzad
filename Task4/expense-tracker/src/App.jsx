import { useEffect, useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import Filter from "./components/Filter";
import ExpenseList from "./components/ExpenseList";
import Total from "./components/Total";

function App() {

  // Expenses Array
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // Selected Filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Save to Local Storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add Expense
  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  // Delete Expense
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  // Filtered Expenses
  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter(
          (expense) => expense.category === selectedCategory
        );

  // Total Amount
  const totalAmount = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  console.log(expenses);
  return (
    <div className="min-h-screen bg-gray-500 py-10 px-4">

      <div className="max-w-4xl mx-auto">

        <Header />

        <ExpenseForm addExpense={addExpense} />

        <Filter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ExpenseList
          expenses={filteredExpenses}
          deleteExpense={deleteExpense}
        />

        <Total total={totalAmount} />

      </div>

    </div>
  );
}

export default App;