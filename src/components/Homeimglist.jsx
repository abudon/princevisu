import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import wed1 from '../assets/images/home/piic (1).jpg'
import wed2 from '../assets/images/home/piic (4).jpg'
import wed3 from '../assets/images/home/piic (2).jpg'
import wed4 from '../assets/images/home/piic (3).jpg'

export default function TitlebarImageList() {
  return (
    <ImageList sx={{gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))!important'}} className='mt-[-5rem] '>
      {/* <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Photo Gallery</ListSubheader>
      </ImageListItem> */}
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>

    
  );
}

const itemData = [
  {
    img: wed1,
    title: 'WEDDING',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: wed2,
    title: 'BIRTHDAYS',
    author: '@rollelflex_graphy726',
  },
  {
    img: wed3,
    title: 'CHRISTENING',
    author: '@helloimnik',
  },
  {
    img: wed4,
    title: 'ANNIVERSARY',
    author: '@nolanissac',
    cols: 2,
  },
];