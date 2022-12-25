import { Container, Typography } from '@mui/material';
import MuiBox from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles'

const BannerWrapper = styled(MuiBox)(() => ({
    position: 'relative',
    padding: '260px 0 130px',
    backgroundImage: `url('//res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed8be96bebfe6002207efc0_optimized_1920')`,
    backgroundSize: 'cover',
}))

const TextWrapper = styled(MuiBox)(() => ({
    maxWidth: '600px',
}))

const ButtonWrapper = styled(MuiBox)(() => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    [`@media screen and (max-width: 768px)`]: {
        flexDirection: 'column',
    },
    marginTop: '35px',
}))
const Banner = () => {
    return (
        <BannerWrapper>
            <Container>
                <TextWrapper>
                    <Typography variant='h2'>―PLANTLAND―</Typography>
                    <Typography variant='h1'>Make Your Home Green</Typography>
                    <Typography variant='subtitle'>Check out our store in New York with the best indoor & outdoor plants that are suitable for growing exactly in your conditions.</Typography>
                </TextWrapper><ButtonWrapper>
                    <MuiButton variant='primary'>BEST PLANTS</MuiButton>
                    <MuiButton variant='secondary'>LEARN MORE</MuiButton>
                </ButtonWrapper>
            </Container>
        </BannerWrapper>
    )
}

export default Banner