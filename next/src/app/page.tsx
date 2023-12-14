import { revalidatePath } from "next/cache";
import FormComponent from "./FormComponent";

let nums = [1, 2, 3];

const getNums = async () => {
  "use server";
  return nums;
};

const addNum = async () => {
  "use server";
  await new Promise(r => setTimeout(r, 2000));

  nums.push(4);

  revalidatePath('/');

  return 'success';
};

export default async function Home() {
  const nums = await getNums();

  return (
    <main>
      <p>
        {nums}
      </p>

      <FormComponent addNum={addNum} />
    </main>
  );
}
