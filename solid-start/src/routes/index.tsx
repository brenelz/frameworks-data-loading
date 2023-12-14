import { action, cache, createAsync, useSubmission } from "@solidjs/router";

let nums = [1, 2, 3];

const getNums = cache(async () => {
  "use server";
  return nums;
}, 'getNums');

const addNum = action(async () => {
  "use server";
  await new Promise(r => setTimeout(r, 2000));

  nums.push(4);

  return 'success';
}, 'addNum');

export default function Home() {
  const nums = createAsync(getNums);
  const addNumAction = useSubmission(addNum);

  return (
    <main>
      <p>
        {nums()}
      </p>
      <form action={addNum} method='post'>
        <button type="submit">Add Num</button>
      </form>
      <pre>
        {addNumAction.pending ? 'pending' : 'not pending'}
        {addNumAction.result}
      </pre>
    </main>
  );
}
