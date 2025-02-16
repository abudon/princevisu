function DownloadSwipeItem({ img, onImageSelect }) {
    const ext = img.filename.split('.').pop()

  return (
      <>
          {
              ext === 'mp4'?
                  (
                  <video
                      onClick={()=>onImageSelect(img)}
                      loop={true}
                      src={img.url}
                      autoPlay={true}
                      controls={false}
                      className={'h-20 w-20 object-cover'}
                  />
                  )
                  :
                  (
                  <img
                  onClick={() => onImageSelect(img)}
                  className='w-20 h-20 object-cover cursor-pointer'
                  src={img.url}
                  alt={img.filename}
              />
                  )
          }


      </>

  );
}

export default DownloadSwipeItem;
