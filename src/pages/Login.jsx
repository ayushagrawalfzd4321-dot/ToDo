function Login() {
  return (
    <div className="flex items-center h-[70vh]">
   
      <form className="flex flex-col gap-4 w-1/3 mx-auto mt-10">
        <input type="text" className="border rounded-lg" placeholder=" Username" />
        <input type="password" className="border rounded-lg" placeholder=" Password" />
        <button type="submit" className="bg-green-500 text-black px-2 py-1 w-1/2 mx-auto  rounded-4xl hover:bg-green-900">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;