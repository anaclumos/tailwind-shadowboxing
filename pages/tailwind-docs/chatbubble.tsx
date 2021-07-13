import Image from 'next/image'
import Favicon from '../../public/favicon.ico'

const chatbubble = () => (
  <div className='flex h-screen'>
    <div className='flex items-center max-w-sm p-6 m-auto space-x-4 bg-white border-2 shadow-md rounded-xl'>
      <div className='relative flex-shrink-0'>
        <div className='w-12 h-12'>
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
