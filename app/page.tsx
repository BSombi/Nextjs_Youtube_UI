import { feedVideos } from '.util/data';
import Image from 'next/image';
export default function Home() {
  return (
    <div className='flex-1 border-2 border-purple-900'>
      {feedVideos.map((video) => (
        <div key={video.id} className='border-2 border-blue-500'>
          <div className=''>
          <Image src={video.thumbnailUrl} alt="thumbnail" width={400} height={200} />
          </div>
          <div>
            <div>
              
            </div>
          </div>
        </div>
      ))}
      <div>

      </div>
    </div>
  )
};