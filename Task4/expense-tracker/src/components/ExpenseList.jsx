import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {

  if (expenses.length === 0) {
    return (
      <div className="bg-gray-400 rounded-xl shadow-md p-6 mb-6 text-center">

        <div className="py-10">

            <div className="text-6xl mb-4">
                📭
            </div>

            <h2 className="text-2xl font-semibold text-gray-700">
                No expenses found
            </h2>

            <p className="text-gray-500 mt-2">
                Try changing the filter or add a new expense.
            </p>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-gray-400 rounded-xl shadow-md p-6 mb-6">

      <h2 className="text-2xl font-semibold mb-5">
        Expenses
      </h2>

      <div className="space-y-4">

        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            deleteExpense={deleteExpense}
          />
        ))}

      </div>

    </div>
  );
}

export default ExpenseList;