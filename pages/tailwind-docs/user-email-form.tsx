const UserEmailForm = () => {
  const signupUser = async (event: React.FormEvent) => {
    event.preventDefault()
  }
  return (
    <div className='flex h-screen p-2 bg-green-100'>
      <div className='m-auto space-y-3'>
        <div className='max-w-full px-6 py-5 mx-auto space-y-1 overflow-hidden transition duration-500 transform border-2 border-green-500 border-opacity-25 rounded-lg cursor-pointer select-none hover:border-2 group w-96 hover:bg-green-100 hover:shadow-lg motion-reduce:transform-none hover:scale-105 click:bg-green-700'>
          <p className='text-lg font-semibold text-green-600'>
            New Project
          </p>
          <p className='text-green-500'>
            Create a new project from a variety of starting
            templates.
          </p>
        </div>
        <form
          className='flex w-full max-w-sm m-auto mx-auto space-x-3'
          onSubmit={signupUser}
        >
          <input
            className='flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 transition duration-500 transform bg-white border border-transparent rounded-lg shadow-md appearance-none focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent motion-reduce:transform-none hover:scale-105'
            placeholder='Your Email'
            type='email'
          />
          <button
            className='flex-shrink-0 px-4 py-2 text-base font-semibold text-white transition duration-500 transform bg-green-600 rounded-lg shadow-md focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200 motion-reduce:transform-none hover:scale-105 tramsform '
            type='button'
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default UserEmailForm
