// import ArticleIcon from '@mui/icons-material/Article';
// import BookIcon from '@mui/icons-material/Book';
// import EqualizerIcon from '@mui/icons-material/Equalizer';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CircularProgress from '@mui/material/CircularProgress';
// import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import { Box, ProgressBar, Text } from '@primer/react';
import { ProjectGraph } from '@nrwl/devkit';
import {
  BaseConfig,
  getProjectsByTarget,
  useConfig,
  useNxGraph,
} from '@bradtaniguchi-dev/common-react';
import { memo, useMemo } from 'react';

const spinner = (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <ProgressBar progress={80} />
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
    <>
      <Text as="h5">config.json</Text>
      <Text as="div">
        {(() => {
          if (configLoading) return spinner;
          if (configError) return <Text>Error Loading config.json</Text>;
          return (
            <Box>
              <pre style={{ margin: '0' }}>
                {JSON.stringify(config, null, 2)}
              </pre>
            </Box>
          );
        })()}
      </Text>
    </>
  );
});

// function DashboardPageLinks() {
//   return (
//     <Card variant="outlined">
//       <CardContent>
//         <Text variant="h5" component="h5">
//           External Links
//         </Text>
//         <Grid container spacing={1} columns={2}>
//           <Grid item xs={8}>
//             <Text
//               component="div"
//               sx={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 display: 'flex',
//               }}
//             >
//               <EqualizerIcon color="primary" />
//               <Link href="nx-graph">nx-graph</Link>
//             </Text>
//           </Grid>
//           <Grid item xs={8}>
//             <Text
//               component="div"
//               sx={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 display: 'flex',
//               }}
//             >
//               <BookIcon color="primary" />
//               <Link href="storybooks">storybooks</Link>
//             </Text>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }

// const DashboardPageProjects = memo(function DashboardPageProjects({
//   nxGraphLoading,
//   nxGraphError,
//   nxGraph,
// }: {
//   nxGraphLoading?: boolean;
//   nxGraphError: unknown;
//   nxGraph: ProjectGraph<unknown>;
// }) {
//   const projects = useMemo(
//     () =>
//       nxGraph ? getProjectsByTarget({ graph: nxGraph, target: 'typedoc' }) : [],
//     [nxGraph]
//   );

//   return (
//     <Card variant="outlined">
//       <CardContent>
//         <Text variant="h5" component="h5">
//           Project Docs
//         </Text>
//         <Text component="div">
//           {(() => {
//             if (nxGraphLoading) return spinner;
//             if (nxGraphError) return <Text>Error Loading nx-graph</Text>;
//             return (
//               <Grid container spacing={1} columns={2}>
//                 {projects.map((project) => (
//                   <Grid item xs={8} key={project}>
//                     <Text
//                       component="div"
//                       sx={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         display: 'flex',
//                       }}
//                     >
//                       <ArticleIcon color="primary" />
//                       <Link href={`docs/${project}`}>{`${project} docs`}</Link>
//                     </Text>
//                   </Grid>
//                 ))}
//               </Grid>
//             );
//           })()}
//         </Text>
//       </CardContent>
//     </Card>
//   );
// });

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
  // const { nxGraph, nxGraphError, nxGraphLoading } = useNxGraph({
  //   path: 'nx-graph/graph.json',
  // });

  return (
    <div>
      <Box sx={{ flexGrow: 1, margin: '12px' }}>
        <Box display="grid" gridGap={3}>
          <Box
            borderColor="border.default"
            borderWidth={1}
            borderStyle="solid"
            p={3}
          >
            <DashboardPageConfig
              config={config}
              configError={configError}
              configLoading={configLoading}
            />
          </Box>

          {/* <Grid item xs={12} md={6}>
            <DashboardPageLinks />
          </Grid>

          <Grid item xs={12} md={6}>
            <DashboardPageProjects
              nxGraphError={nxGraphError}
              nxGraphLoading={nxGraphLoading}
              nxGraph={nxGraph}
            />
          </Grid>
  </Grid> */}
        </Box>
      </Box>
    </div>
  );
}

export default DashboardPage;
