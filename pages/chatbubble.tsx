const chatbubble = () => (
  <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
    <div className='flex-shrink-0'>
      <img
        className='h-12 w-12'
        src='/favicon.ico'
        alt='ChitChat Logo'
      />
    </div>
    <div>
      <div>
        <div className='text-xl font-medium text-black'>
          Chat Bubble
        </div>
        <p className='text-gray-500'>You have a message.</p>
      </div>
    </div>
  </div>
)

export default chatbubble
