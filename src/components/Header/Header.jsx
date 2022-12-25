import { AppBar, Toolbar, Container } from '@mui/material';
import SidebarMenu from './SidebarMenu';
import HeaderMenu from './HeaderMenu';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
    const isDesktop = useMediaQuery('(min-width:900px)');

    return (
        <AppBar backgroundColor='transparent'>
            <Container>
                <Toolbar sx={{
                    justifyContent: 'space-between',
                    padding: '10px 0',
                }}>
                    <img src='https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5eda274b1bed7f0021d38207?nowebp' alt='PlantLand' width={160}></img>
                    {isDesktop && <HeaderMenu />}
                    {!isDesktop && <SidebarMenu />}
                </Toolbar>
            </Container>
        </AppBar >
    )
}
export default Header;