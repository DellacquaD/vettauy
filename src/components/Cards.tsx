import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// Define la interfaz de las props
interface CardInfo {
  title: string;
  text: string;
}

interface CardsProps {
  cardInfo: CardInfo[];
}

const Cards: FC<CardsProps> = ({ cardInfo }) => {
  return (
    <>
      {cardInfo.map((info, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            {/* Puedes reemplazar la imagen con una que corresponda */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {info.text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

export default Cards;
