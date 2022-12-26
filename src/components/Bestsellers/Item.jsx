import { Typography, Card, CardActions, CardMedia, CardContent } from '@mui/material';
import MuiButton from '@mui/material/Button';

const Item = ({ item }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                src={item.imgPath}
                alt={item.name}
                height={360}
            />
            <CardContent sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
            }}>
                <Typography variant="subtitle">
                    {item.name}
                </Typography>
                <Typography variant="h6">
                    {item.price}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <MuiButton variant='primaryOrder'>ORDER NOW</MuiButton>
            </CardActions>
        </Card>
    )
}

export default Item;