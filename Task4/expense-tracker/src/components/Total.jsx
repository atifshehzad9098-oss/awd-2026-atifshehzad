function Total({ total }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-md p-6 text-white">

      <h2 className="text-xl font-medium">
        Total Expense
      </h2>

      <p className="text-4xl font-bold mt-2">
        ${total.toFixed(2)}
      </p>

    </div>
  );
}

export default Total;