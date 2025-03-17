import { useState } from "react";

// Static data for products with product names
const staticProducts = [
  { id: 1, name: "Laptop", quantity: 10, price: 500, mrp: 550 },
  { id: 2, name: "Smartphone", quantity: 15, price: 300, mrp: 350 },
  { id: 3, name: "Headphones", quantity: 20, price: 50, mrp: 60 },
  { id: 4, name: "Tablet", quantity: 5, price: 200, mrp: 250 },
  { id: 5, name: "Smartwatch", quantity: 100, price: 100, mrp: 120 },
  { id: 6, name: "Keyboard", quantity: 50, price: 30, mrp: 35 },
  { id: 7, name: "Mouse", quantity: 30, price: 20, mrp: 25 },
  { id: 8, name: "Monitor", quantity: 25, price: 150, mrp: 180 },
  { id: 9, name: "Speaker", quantity: 80, price: 40, mrp: 50 },
  { id: 10, name: "Router", quantity: 10, price: 80, mrp: 100 },
];

function ProductsPage() {
  const [products, setProducts] = useState(staticProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    mrp: "",
  });
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle add or edit product form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProduct) {
      // Edit product
      const updatedProduct = {
        id: editingProduct.id, // Keep the same id for editing
        ...formData,
        quantity: Number(formData.quantity),
        price: Number(formData.price),
        mrp: Number(formData.mrp),
      };

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === editingProduct.id ? updatedProduct : product
        )
      );
    } else {
      // Add new product
      const newProduct = {
        id: Date.now(), // Unique id for new product
        ...formData,
        quantity: Number(formData.quantity),
        price: Number(formData.price),
        mrp: Number(formData.mrp),
      };

      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }

    // Reset the form and close modal
    setFormData({
      name: "",
      quantity: "",
      price: "",
      mrp: "",
    });
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  // Handle deleting a product
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Open the modal for adding or editing a product
  const handleModalOpen = (product = null) => {
    if (product) {
      setFormData({
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        mrp: product.mrp,
      });
      setEditingProduct(product);
    } else {
      setFormData({
        name: "",
        quantity: "",
        price: "",
        mrp: "",
      });
      setEditingProduct(null);
    }
    setIsModalOpen(true);
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="font-semibold mb-4">Product List</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for products..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Button to open the add product modal */}
      <button
        onClick={() => handleModalOpen()}
        className="bg-blue-500 text-white p-2 rounded-lg mb-4"
      >
        Add New Product
      </button>

      {/* Product Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">MRP</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">{product.quantity}</td>
                <td className="border p-2">{product.price}</td>
                <td className="border p-2">{product.mrp}</td>
                <td className="border p-2">
                  <button
                    className="text-blue-500 mr-2"
                    onClick={() => handleModalOpen(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border p-2 text-center">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for adding or editing product */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {editingProduct ? "Edit Product" : "Add Product"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">MRP</label>
                <input
                  type="number"
                  name="mrp"
                  value={formData.mrp}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-400 text-white py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  {editingProduct ? "Update Product" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
