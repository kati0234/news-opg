import { getSubById } from "@/app/lib/api";
import { patchSub } from "@/app/lib/api";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { deleteSub } from "@/app/lib/api";

async function Single({ params }) {
  const { id } = await params;
  console.log(id);

  //   const subscriber = await getSubById(id);
  //   console.log(subscriber);

  const subscriberArray = await getSubById(id);
  const subscriber = subscriberArray[0];

  async function updatedata(FormData) {
    "use server";
    console.log(FormData);
    const patchdata = {
      name: FormData.get("name"),
      email: FormData.get("email"),
    };
    await patchSub(id, patchdata);
    revalidatePath("/");
    redirect("/");
  }
  async function deletedata() {
    "use server";
    await deleteSub(id);
    revalidatePath("/");
    redirect("/");
  }

  return (
    <div>
      <form
        action={updatedata}
        className="max-w-md mx-auto p-4 shadow-md rounded bg-white"
      >
        <div className="mb-4 grid grid-cols-1 ">
          <label htmlFor="name" className="text-gray-700 font-bold">
            {/* name sub:{subscriber.name} idd: {id} */}
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            defaultValue={subscriber.name}
          />
          <label htmlFor="email" className="  block text-gray-700 font-bold">
            email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            defaultValue={subscriber.email}
          />
        </div>
        <div className="flex gap-3">
          <button
            formAction={deletedata}
            className="bg-pink-400 w-full px-3 py-2 rounded text-white"
          >
            Delete
          </button>
          <button className="bg-green-400 w-full px-3 py-2 rounded text-white">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Single;
