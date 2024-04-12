import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./categories";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Switch name must be at least 3 character!" }),
  amount: z
    .number({ invalid_type_error: "Input some amount!" })
    .min(1, { message: "Input 1 or more plase!" }),
  category: z.enum(categories),
});

type SwitchData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: SwitchData) => void;
}

const SwitchForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SwitchData>({
    resolver: zodResolver(schema),
  });

  return (
    <form className="px-40 mb-10" action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 mt-3 flex flex-col">
        <label htmlFor="inputName">Name</label>
        <input
          {...register("name")}
          className="border p-1"
          type="text"
          id="inputName"
        />
        {errors.name && <p className="text-red-800">{errors.name.message}</p>}
      </div>
      <div className="mb-3 mt-3 flex flex-col">
        <label htmlFor="inputAmount">Amount</label>
        <input
          {...register("amount", { valueAsNumber: true })}
          className="border p-1"
          type="number"
          id="inputAmount"
        />
        {errors.amount && (
          <p className="text-red-800">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3 mt-3 flex flex-col">
        <label htmlFor="inputCategory">Category</label>
        <select
          {...register("category")}
          id="inputCategory"
          className="border p-1"
        >
          <option></option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-800">{errors.category.message}</p>
        )}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default SwitchForm;
