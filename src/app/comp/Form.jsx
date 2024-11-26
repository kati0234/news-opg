const Form = () => {
  return (
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
  );
};

export default Form;
