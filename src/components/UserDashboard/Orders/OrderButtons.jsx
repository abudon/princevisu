import { PiListChecks } from "react-icons/pi";
import Button from "../../UI/Button";
import { MdOutlineCancel } from "react-icons/md";

function OrderButtons({ selectedImages, onSelectAll, onClearAll, onDownload }) {
  return (
    <div className='flex gap-4 flex-col md:flex-row items-center justify-center md:justify-between mb-10'>
      {/* Left Side */}
      <div className='flex items-center gap-4 justify-between md:justify-normal'>
        {/* Select all button */}
        <Button onClick={onSelectAll} color='white'>
          <PiListChecks size={20} />
          <span className='uppercase hidden md:flex'>Select all</span>
        </Button>

        {/* Cancel Button */}
        {selectedImages.length > 0 && (
          <Button onClick={onClearAll} color='white'>
            <MdOutlineCancel size={20} />
            <span className='uppercase'>Cancel</span>
          </Button>
        )}
      </div>

      {/* Right Side */}
      <div>
        {/* Download Button */}
        <Button onClick={onDownload} disabled={selectedImages.length === 0}>
          {selectedImages.length ? (
            <span className='uppercase'>request download / {selectedImages.length}</span>
          ) : (
            <span className='uppercase'>request download</span>
          )}
        </Button>
      </div>
    </div>
  );
}

export default OrderButtons;
