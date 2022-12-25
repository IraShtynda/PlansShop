import { List, ListItemText, Typography } from '@mui/material';
import MuiListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';

const ListItemButton = styled(MuiListItemButton)(() => ({
    '&:hover': {
        backgroundColor: 'transparent'
    },
}))

const HeaderMenu = () => {
    return (
        <List sx={{ display: 'flex', justifyContent: 'center' }} ><ListItemButton component="a" href="#about">
            <ListItemText><Typography variant='menuItem'>About us</Typography></ListItemText>
        </ListItemButton>
            <ListItemButton>
                <ListItemText><Typography variant='menuItem'>Plants</Typography></ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemText><Typography variant='menuItem'>Pick of the Month</Typography></ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemText><Typography variant='menuItem'>Pricing</Typography></ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemText><Typography variant='menuItem'>Contact us</Typography></ListItemText>
            </ListItemButton>
        </List>
    )
}

export default HeaderMenu;