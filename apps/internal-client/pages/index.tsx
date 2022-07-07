import styled from 'styled-components';
import { HeaderBar } from '@nx-template/common-react';
import { DashboardPage } from '../components/dashboard-page/dashboard-page';
import Typography from '@mui/material/Typography';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <HeaderBar hideMenu={true} hideHamburger={true}>
        {
          <Typography variant="h5" component="h5">
            internal-client
          </Typography>
        }
      </HeaderBar>
      <main>
        <DashboardPage />
      </main>
    </StyledPage>
  );
}

export default Index;
