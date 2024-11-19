"use client"
import React, { useState } from "react";

const Allocations = () => {
  const [allocations, setAllocations] = useState([
    { id: 1, name: "Allocation 1", value: 1000 },
    { id: 2, name: "Allocation 2", value: 2000 },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAllocation, setNewAllocation] = useState({ name: "", value: "" });
  const [editing, setEditing] = useState(null);

  // Add Allocation
  const handleAdd = () => {
    if (!newAllocation.name || !newAllocation.value) return;
    setAllocations([
      ...allocations,
      { id: Date.now(), ...newAllocation },
    ]);
    setNewAllocation({ name: "", value: "" });
    isModalOpen(false)
  };

  // Delete Allocation
  const handleDelete = (id) => {
    setAllocations(allocations.filter((allocation) => allocation.id !== id));
  };

  // Edit Allocation
  const handleEdit = (id) => {
    const editedAllocations = allocations.map((allocation) =>
      allocation.id === id ? { ...allocation, ...editing } : allocation
    );
    setAllocations(editedAllocations);
    setEditing(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-400 mb-6">
        Asset Allocations
      </h1>
      <table className="w-full text-left bg-gray-800 text-white rounded-lg shadow-lg">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Value</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allocations.map((allocation) => (
            <tr key={allocation.id} className="border-b border-gray-700">
              <td className="px-4 py-2">{allocation.id}</td>
              <td className="px-4 py-2">
                {editing?.id === allocation.id ? (
                  <input
                    type="text"
                    className="bg-gray-900 p-1 rounded"
                    value={editing.name}
                    onChange={(e) =>
                      setEditing({ ...editing, name: e.target.value })
                    }
                  />
                ) : (
                  allocation.name
                )}
              </td>
              <td className="px-4 py-2">
                {editing?.id === allocation.id ? (
                  <input
                    type="number"
                    className="bg-gray-900 p-1 rounded"
                    value={editing.value}
                    onChange={(e) =>
                      setEditing({ ...editing, value: e.target.value })
                    }
                  />
                ) : (
                  `$${allocation.value}`
                )}
              </td>
              <td className="px-4 py-2 space-x-2">
                {editing?.id === allocation.id ? (
                  <button
                    className="bg-green-500 px-3 py-1 rounded text-white"
                    onClick={() => handleEdit(allocation.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-yellow-500 px-3 py-1 rounded text-white"
                    onClick={() => setEditing(allocation)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="bg-red-500 px-3 py-1 rounded text-white"
                  onClick={() => handleDelete(allocation.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Allocation Button */}
      <button
        className="mt-6 bg-indigo-500 px-4 py-2 rounded text-white"
        onClick={() => setIsModalOpen(true)}
      >
        Add Allocation
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              Add New Allocation
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 bg-gray-900 text-white rounded"
                value={newAllocation.name}
                onChange={(e) =>
                  setNewAllocation({ ...newAllocation, name: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Value"
                className="w-full p-2 bg-gray-900 text-white rounded"
                value={newAllocation.value}
                onChange={(e) =>
                  setNewAllocation({ ...newAllocation, value: e.target.value })
                }
              />
              <div className="flex justify-end space-x-4">
                <button
                  className="bg-red-500 px-4 py-2 rounded text-white"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 px-4 py-2 rounded text-white"
                  onClick={handleAdd}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}  </div>
  );
};

export default Allocations;
