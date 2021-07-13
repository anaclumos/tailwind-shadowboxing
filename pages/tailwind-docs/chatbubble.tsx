import Image from 'next/image'
import Favicon from '../../public/favicon.ico'

const chatbubble = () => (
  <div className='flex h-screen'>
    <div className='p-6 max-w-sm m-auto bg-white rounded-xl shadow-md flex items-center space-x-4 border-2'>
      <div className='flex-shrink-0 relative'>
        <div className='h-12 w-12'>
          <Image
            layout='fill'
            src={Favicon}
            alt='Favicon'
          />
        </div>
      </div>
      <div>
        <div>
          <div className='text-xl font-medium text-black'>
            Chat Bubble
          </div>
          <p className='text-gray-500'>
            You have a message.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default chatbubble
