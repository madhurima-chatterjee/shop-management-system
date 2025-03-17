import { useState } from "react";

function DashboardPage() {
  // Initialize state with dynamic data
  const [totalShops, setTotalShops] = useState(10);
  const [totalProducts, setTotalProducts] = useState(50);
  const [totalStaff, setTotalStaff] = useState(20);
  const [totalSales, setTotalSales] = useState(100000); // Example static value in currency

  // Function to update the values (simulating updates from UI)
  const handleUpdate = (e, setter) => {
    setter(Number(e.target.value));
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {/* Total Shops */}
      <div className="p-6 bg-blue-200 rounded-lg shadow-lg">
        <h2 className="font-semibold">Total Shops</h2>
        <p className="text-2xl">{totalShops}</p>
        <input
          type="number"
          value={totalShops}
          onChange={(e) => handleUpdate(e, setTotalShops)}
          className="mt-2 p-2 border rounded"
        />
      </div>

      {/* Total Products */}
      <div className="p-6 bg-green-200 rounded-lg shadow-lg">
        <h2 className="font-semibold">Total Products</h2>
        <p className="text-2xl">{totalProducts}</p>
        <input
          type="number"
          value={totalProducts}
          onChange={(e) => handleUpdate(e, setTotalProducts)}
          className="mt-2 p-2 border rounded"
        />
      </div>

      {/* Total Staff */}
      <div className="p-6 bg-yellow-200 rounded-lg shadow-lg">
        <h2 className="font-semibold">Total Staff</h2>
        <p className="text-2xl">{totalStaff}</p>
        <input
          type="number"
          value={totalStaff}
          onChange={(e) => handleUpdate(e, setTotalStaff)}
          className="mt-2 p-2 border rounded"
        />
      </div>

      {/* Total Sales */}
      <div className="p-6 bg-red-200 rounded-lg shadow-lg">
        <h2 className="font-semibold">Total Sales</h2>
        <p className="text-2xl">${totalSales}</p>
        <input
          type="number"
          value={totalSales}
          onChange={(e) => handleUpdate(e, setTotalSales)}
          className="mt-2 p-2 border rounded"
        />
      </div>
    </div>
  );
}

export default DashboardPage;
