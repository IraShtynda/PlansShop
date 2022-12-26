import { Typography, Card, CardActions, CardContent, Box } from '@mui/material';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Colors } from '../../styles/index'

const CardWrapper = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    borderTop: `5px solid ${Colors.accent}`,
    marginTop: '30px'
}))

const CardPlant = ({ price, title, itemOne, itemTwo, itemThree }) => {
    return (
        <CardWrapper>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                justifyContent: 'center'
            }}>
                <Typography variant="h6">
                    from ${price}
                </Typography>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography variant="p">
                    {itemOne}
                </Typography>
                <Typography variant="p">
                    {itemTwo}
                </Typography>
                <Typography variant="p">
                    {itemThree}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <MuiButton variant='primaryOrder'>CUSTOM ORDER</MuiButton>
            </CardActions>
        </CardWrapper>
    )
}

export default CardPlant;