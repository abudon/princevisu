import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img from './../assets/images/home/Eukeria & Isaac 2 1.jpg'
import img2 from './../assets/images/home/pix (6).jpg'
import img3 from './../assets/images/home/pic (3).jpg'
import img4 from './../assets/images/home/px.jpg'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))!important' }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: img,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: img2,
    title: 'Burger',
  },
  {
    img: img3,
    title: 'Camera',
  },
  {
    img: img4,
    title: 'Coffee',
    cols: 2,
  },
 
];