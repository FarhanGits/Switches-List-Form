import React from "react";

interface Switch {
  id: number;
  name: string;
  category: string;
  amount: number;
}

interface Props {
  switches: Switch[];
  onDelete: (id: number) => void;
}

const SwitchList = ({ switches, onDelete }: Props) => {
  return (
    // overflow-x-auto w-full px-40 mt-10
    <div className="overflow-x-auto w-full px-40 mt-10">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {switches.map((switchh) => (
            <tr key={switchh.id}>
              <td className="px-4 py-2 border border-gray-200">
                {switchh.name}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                {switchh.amount}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                {switchh.category}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                <button
                  onClick={() => onDelete(switchh.id)}
                  type="button"
                  className="border border-red-800 text-red-800 p-2 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SwitchList;
