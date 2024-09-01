import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarImageList() {
  return (
    // <ImageList style={{ gap: '1rem', padding: '2rem' }} sx={{
    //     gridTemplateColumns: {
    //         xs: 'repeat(1, 1fr)',
    //         md: 'repeat(2, 1fr)',
    //     },
    // }}>
    <ImageList
      style={{ gap: '1rem', padding: '2rem' }}
      sx={{
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr) !important',  // Forzar 1 columna en pantallas pequeñas (xs)
          md: 'repeat(2, 1fr) !important',  // 2 columnas en pantallas medianas (md) y superiores
        },
      }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mobiliario',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1684980181655-ab1cf2e31b17?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Kids',
  },
  {
    img: 'https://images.unsplash.com/photo-1495130656884-992a9f30d178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXRlbnNpbGxvcyUyMG1hZGVyYXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Home',
  },
  {
    img: 'https://aluminiossardina.es/wp-content/uploads/2021/09/cerramiento-ventanas-abatibles.jpg',
    title: 'Vidriado',
  },
];