import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (label.trim() === "" || amount === "" || Number(amount) <= 0) {
      alert("Please enter a valid expense.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      label: label.trim(),
      amount: Number(amount),
      category,
    };

    addExpense(newExpense);

    // Clear Form
    setLabel("");
    setAmount("");
    setCategory("Food");
  };

  return (
    <div className="bg-gray-400 rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-5 text-gray-800">
        Add New Expense
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Expense Name */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Expense Name
          </label>

          <input
            type="text"
            placeholder="e.g. Burger"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Amount
          </label>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Entertainment</option>
          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;