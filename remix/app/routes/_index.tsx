import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useActionData, useFetcher, useLoaderData, useNavigation } from "@remix-run/react";

let nums = [1, 2, 3];

const getNums = async () => {
  return nums;
};

const addNum = async () => {
  await new Promise(r => setTimeout(r, 2000));

  nums.push(4);

  return 'success';
};


export const loader = async () => {
  return {
    nums: await getNums()
  }
}

export const action = async () => {
  return {
    message: await addNum()
  }
}

export default function Home() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();

  return (
    <main>
      <p>
        {loaderData.nums}
      </p>
      <Form method='post'>
        <button type="submit">Add Num</button>
      </Form>
      <pre>
        {navigation.state}<br />
        {actionData?.message}
      </pre>
    </main>
  );
}
