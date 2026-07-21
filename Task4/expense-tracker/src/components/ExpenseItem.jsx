function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:-translate-y-1 duration-300 transition">

      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {expense.label}
        </h3>

        <span className="inline-block mt-2 bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
            {expense.category}
        </span>
      </div>

      <div className="flex items-center gap-4 mt-4 sm:mt-0">

        <span className="text-xl font-bold text-green-600">
          ${expense.amount.toFixed(2)}
        </span>

        <button
          onClick={() => deleteExpense(expense.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default ExpenseItem;