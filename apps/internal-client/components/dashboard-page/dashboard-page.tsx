import ArticleIcon from '@mui/icons-material/Article';
import BookIcon from '@mui/icons-material/Book';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ProjectGraph } from '@nrwl/devkit';
import {
  BaseConfig,
  getProjectsByTarget,
  useConfig,
  useNxGraph,
} from '@nx-template/common-react';
import { memo, useMemo } from 'react';

const spinner = (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <CircularProgress />
  </Box>
);

const DashboardPageConfig = memo(function DashboardPageConfig({
  configLoading,
  configError,
  config,
}: {
  configLoading?: boolean;
  configError: unknown;
  config: BaseConfig;
}) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h5">
          config.json
        </Typography>
        <Typography component="div">
          {(() => {
            if (configLoading) return spinner;
            if (configError)
              return <Typography>Error Loading config.json</Typography>;
            return (
              <Card variant="outlined">
                <pre style={{ margin: '0' }}>
                  {JSON.stringify(config, null, 2)}
                </pre>
              </Card>
            );
          })()}
        </Typography>
      </CardContent>
    </Card>
  );
});

function DashboardPageLinks() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h5">
          External Links
        </Typography>
        <Grid container spacing={1} columns={2}>
          <Grid item xs={8}>
            <Typography
              component="div"
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <EqualizerIcon color="primary" />
              <Link href="nx-graph">nx-graph</Link>
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              component="div"
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <BookIcon color="primary" />
              <Link href="storybooks">storybooks</Link>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const DashboardPageProjects = memo(function DashboardPageProjects({
  nxGraphLoading,
  nxGraphError,
  nxGraph,
}: {
  nxGraphLoading?: boolean;
  nxGraphError: unknown;
  nxGraph: ProjectGraph<unknown>;
}) {
  const projects = useMemo(
    () =>
      nxGraph ? getProjectsByTarget({ graph: nxGraph, target: 'typedoc' }) : [],
    [nxGraph]
  );

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h5">
          Project Docs
        </Typography>
        <Typography component="div">
          {(() => {
            if (nxGraphLoading) return spinner;
            if (nxGraphError)
              return <Typography>Error Loading nx-graph</Typography>;
            return (
              <Grid container spacing={1} columns={2}>
                {projects.map((project) => (
                  <Grid item xs={8} key={project}>
                    <Typography
                      component="div"
                      sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <ArticleIcon color="primary" />
                      <Link
                        href={`docs/${project}`}
                      >{`${project} docs`}</Link>
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            );
          })()}
        </Typography>
      </CardContent>
    </Card>
  );
});

/**
 * The dashboard page component.
 *
 * This is the main and only component that acts as a "project landing page"
 * in regards to compiled docs and helper tools.
 */
export function DashboardPage() {
  const { config, configError, configLoading } = useConfig({
    path: 'config.json',
  });
  const { nxGraph, nxGraphError, nxGraphLoading } = useNxGraph({
    path: 'nx-graph/graph.json',
  });

  return (
    <div>
      <Box sx={{ flexGrow: 1, margin: '12px' }}>
        <Grid
          container
          spacing={4}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={6}>
            <DashboardPageConfig
              config={config}
              configError={configError}
              configLoading={configLoading}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <DashboardPageLinks />
          </Grid>

          <Grid item xs={12} md={6}>
            <DashboardPageProjects
              nxGraphError={nxGraphError}
              nxGraphLoading={nxGraphLoading}
              nxGraph={nxGraph}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default DashboardPage;
