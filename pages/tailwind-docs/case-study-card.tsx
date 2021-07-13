import Image from 'next/image'

const CaseStudyCard = () => (
  <div className='flex h-screen'>
    <div className='max-w-md m-auto overflow-hidden bg-white border-2 shadow-md rounded-xl md:max-w-2xl'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <div className='relative object-cover h-48 md:h-full md:w-48'>
            <Image
              src='https://cataas.com/cat'
              alt='Man looking at item at a store'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div className='p-8'>
          <div className='text-sm font-semibold tracking-wide text-indigo-500 uppercase'>
            Case study
          </div>
          <a
            href='#'
            className='block mt-1 text-lg font-medium leading-tight text-black hover:underline'
          >
            Finding customers for your new business
          </a>
          <p className='mt-2 text-gray-500'>
            Getting a new business off the ground is a lot
            of hard work. Here are five ideas you can use to
            find your first customers.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default CaseStudyCard
