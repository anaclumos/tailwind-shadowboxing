import Image from 'next/image'

const CaseStudyCard = () => (
  <div className='flex h-screen'>
    <div className='max-w-md m-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border-2'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <div className='h-48 object-cover md:h-full md:w-48 relative'>
            <Image
              src='https://cataas.com/cat'
              alt='Man looking at item at a store'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            Case study
          </div>
          <a
            href='#'
            className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
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
