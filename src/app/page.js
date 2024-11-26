import { getSub } from "@/app/lib/api";
import { postSub } from "@/app/lib/api";
import { revalidatePath } from "next/cache";
import Link from "next/link";

async function page() {
  const subscriber = await getSub();

  console.log(subscriber);
  async function send(FormData) {
    "use server";
    console.log(FormData);
    const data = {
      name: FormData.get("name"),
      email: FormData.get("email"),
    };
    await postSub(data);
    revalidatePath("/apitest");
  }
  return (
    <div>
      <h1 className="place-self-center font-bold text-4xl">Newsletter</h1>
      <form
        action={send}
        className="max-w-md mx-auto p-4 shadow-md rounded bg-white"
      >
        <div className="mb-4 grid grid-cols-1 ">
          <label htmlFor="name" className="text-gray-700 font-bold">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <label htmlFor="email" className="  block text-gray-700 font-bold">
            email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <button className="bg-pink-400 w-full px-3 py-2 rounded text-white">
          subcrib
        </button>
      </form>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 m-5 place-self-center gap-3 ">
        {subscriber.map((sub) => (
          <li
            key={sub.id}
            className="px-4 py-4 bg-white shadow-md rounded-md grid grid-cols-1 gap-3 min-w-32"
          >
            <Link href={`/update/${sub.id}`}>
              <p> {sub.name}</p>
              <p>{sub.email}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
