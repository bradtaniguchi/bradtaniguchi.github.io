import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export default function PageNotFound() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '64px',
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h5">
                Page Not Found
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
}
