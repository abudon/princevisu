function DownloadSwipeItem({ img, title, onImageSelect }) {


  return (
        <img
            onClick={() => onImageSelect(img)}
            className='w-20 h-20 object-cover cursor-pointer'
            src={img}
            alt={title}
            />
  );
}

export default DownloadSwipeItem;
