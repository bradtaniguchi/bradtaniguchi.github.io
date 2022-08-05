window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';

  window.appConfig = {
    showDebugger: false,
    showExperimentalFeatures: false,
    projectGraphs: [
      {
        id: 'local',
        label: 'local',
        url: 'projectGraph.json',
      }
    ],
    defaultProjectGraph: 'local',
  };
  window.projectGraphResponse = {"hash":"447500c4426d365a3b567f647388be740d146ecb8ab1e85b0b545de3193d0c0b","projects":[{"name":"internal-client","type":"app","data":{"tags":[],"root":"apps/internal-client","files":[{"file":"apps/internal-client/.eslintrc.json","hash":"f13f56cc53c7d94063a3c717349e025e863bc78c"},{"file":"apps/internal-client/.gitignore","hash":"737f3f5484b600482c57007f3c0185a48dd3b8f5"},{"file":"apps/internal-client/components/activity/activities.tsx","hash":"90de6544333a424cb5790f50a3c9668d2beaf0b9","deps":["npm:@primer/react","npm:react"]},{"file":"apps/internal-client/components/activity/activity-project.tsx","hash":"0ef90748c758f603d1a221062aceec451f965c4e","deps":["npm:@primer/octicons-react","npm:@primer/react","npm:react","npm:luxon"]},{"file":"apps/internal-client/components/activity/github-public-activity.tsx","hash":"8cbc77c5107a58a0a60566b924b9f249803a5615","deps":["npm:@primer/octicons-react","npm:@primer/react","npm:luxon","npm:next","npm:react"]},{"file":"apps/internal-client/components/core/app-header-search.tsx","hash":"3703ee432c2417b062910b05f4f5c541d507a57e","deps":["npm:@primer/octicons-react","npm:@primer/react","npm:react"]},{"file":"apps/internal-client/components/core/app-header.tsx","hash":"3b68c8a339094b0f3dcfd0e113f6797889f3f820","deps":["common-react","npm:@primer/octicons-react","npm:@primer/react","npm:next","npm:react"]},{"file":"apps/internal-client/components/core/card.tsx","hash":"dd482ae168885d84608fa3c16218f0497be83469","deps":["npm:@primer/react"]},{"file":"apps/internal-client/components/internals/internal-config.tsx","hash":"25e742c9ca3c1bed73cf724b940ab73a4c0d93ce","deps":["common-react","npm:@primer/react","npm:react"]},{"file":"apps/internal-client/components/internals/internal-links.tsx","hash":"a4a6936f74f26e447f53f06c5caffa5a7bb766e0","deps":["npm:@primer/react","npm:react","npm:@primer/octicons-react"]},{"file":"apps/internal-client/components/internals/internal-projects.tsx","hash":"b19b1710cc09f1630eabe622ddcf33ecd622842a","deps":["common-react","npm:@primer/react","npm:nx","npm:@primer/octicons-react","npm:react"]},{"file":"apps/internal-client/components/profile/profile.tsx","hash":"ef32b5a5a7afc34dd68160a4ea16ebe587884604","deps":["npm:@primer/react"]},{"file":"apps/internal-client/components/spinner.tsx","hash":"263a96f37d89099bf5be80d1c9f6479dfd4cfcf0","deps":["npm:@primer/react"]},{"file":"apps/internal-client/constants/github-url.ts","hash":"5c52742da2d4c7ee086c607b20db74d81b315f05"},{"file":"apps/internal-client/constants/local-forage-theme-key.ts","hash":"82132f27efb583192039512dae089c78b29dd5e5"},{"file":"apps/internal-client/index.d.ts","hash":"7ba08fa17ccbb3d5eaa4d9c7b435bd44ff43f330"},{"file":"apps/internal-client/jest.config.ts","hash":"315b134a141cb9ac26109a983501097abfe95d35"},{"file":"apps/internal-client/models/activity.ts","hash":"25d1f5d5096ef88a750bf99638b40926c62e4edd"},{"file":"apps/internal-client/models/github-public-activity.ts","hash":"5cf2115336df4706b779a82bc02c0f0655174d77","deps":["npm:@octokit/rest"]},{"file":"apps/internal-client/next-env.d.ts","hash":"4f11a03dc6cc37f2b5105c08f2e7b24c603ab2f4"},{"file":"apps/internal-client/next.config.js","hash":"b538bb15ed9bf3f02ff33ad06e3f66001c4351dc","deps":["npm:@sentry/nextjs","npm:@nrwl/next"]},{"file":"apps/internal-client/pages/_app.tsx","hash":"76207fa6935c96c6429c67cd8e694c8a4b595970","deps":["common-react","npm:@primer/react","npm:next","npm:react"]},{"file":"apps/internal-client/pages/_document.tsx","hash":"25300466ab1c60ad6a9607d6aa6d9ddf0ce629ee","deps":["npm:react","npm:next","npm:styled-components","common-react"]},{"file":"apps/internal-client/pages/_error.tsx","hash":"024eafe831b4cd55054b4bb6c20aafedee92e3e3","deps":["npm:@sentry/nextjs","npm:next"]},{"file":"apps/internal-client/pages/404.tsx","hash":"3afeff96af8e5867de8f5f394f6eb05fa4f2475b"},{"file":"apps/internal-client/pages/about.tsx","hash":"3dd052e7d61817edc755e4ff251ecdbbe12e7bc4","deps":["common-react","npm:@primer/react"]},{"file":"apps/internal-client/pages/index.tsx","hash":"5deeaadbc34c0c83f168ffb9c1b0ec14445701b9","deps":["npm:@octokit/rest","npm:@primer/octicons-react","npm:@primer/react","npm:next","npm:react","npm:react-icons"]},{"file":"apps/internal-client/pages/posts/[slug].tsx","hash":"0e6fca8c36aa04d271a55a541271fc6d005a8d34","deps":["npm:next"]},{"file":"apps/internal-client/pages/posts/index.tsx","hash":"5cc78ad607bb2762bd24ce2e27ed10bc085d7112"},{"file":"apps/internal-client/pages/projects/[name].tsx","hash":"86addde05d4aae498fe18c3a6239bb7c9f7b2e66","deps":["npm:next"]},{"file":"apps/internal-client/pages/projects/index.tsx","hash":"7e8cab50295f4302124b7ab27e18fd6b03600006"},{"file":"apps/internal-client/pages/snippets/[id].tsx","hash":"b1f95f91a0e2911490df035c31f49478cbe70f44","deps":["npm:next"]},{"file":"apps/internal-client/pages/snippets/index.tsx","hash":"c06c8286eeefbbbd5cc346c0319ad07adf258f81"},{"file":"apps/internal-client/pages/styles.css","hash":"2cf71cc2a02c386178e8245417d76017ec3ee206"},{"file":"apps/internal-client/project.json","hash":"9e202f13d623df40f87e57a2f94726f2419136ff"},{"file":"apps/internal-client/public/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/internal-client/public/.nojekyll","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/internal-client/public/config.json","hash":"677e3cdebdf644bcfcb8f9416e5b8822b2c01bb0"},{"file":"apps/internal-client/public/nx-graph/graph.json","hash":"c5f027dc631c9c97b9542f93e1d522bd804d98fe"},{"file":"apps/internal-client/README.md","hash":"3621d89b6e8de790afd54ac835bf82292cf2420e"},{"file":"apps/internal-client/sentry.client.config.ts","hash":"513996c020e223d08fc84669109edc4631c5c6a3","deps":["npm:@sentry/nextjs"]},{"file":"apps/internal-client/sentry.properties","hash":"97593db9b957d62313b8b352da400a158ccaf6bb"},{"file":"apps/internal-client/sentry.server.config.ts","hash":"0a1a160e92ccd8dcbee99185c2385f713ce2691d","deps":["npm:@sentry/nextjs"]},{"file":"apps/internal-client/tsconfig.json","hash":"cadb8cda700070fec16641a4c734213862573c1c"},{"file":"apps/internal-client/tsconfig.spec.json","hash":"14b06c6a5bf51709abab64ca3e8e0b35b5e52a43"},{"file":"apps/internal-client/utils/get-markdown.ts","hash":"14286cad9b69b35199fedfb838250a8f43357262","deps":["npm:dompurify","npm:jsdom","npm:marked"]},{"file":"apps/internal-client/utils/logger.tsx","hash":"c716af5f9abd784bcc1dcc2aecc5c1e68e4e2879","deps":["common-react","npm:@sentry/nextjs"]},{"file":"apps/internal-client/utils/theme-context.tsx","hash":"b744a97ee36cfb8344ebdcb6f160c56a2ee77b47","deps":["common-react"]}]}},{"name":"common-react","type":"lib","data":{"tags":[],"root":"libs/common-react","files":[{"file":"libs/common-react/.babelrc","hash":"ccae900be42788285eb6e1b3a2af4b81f56f14fe"},{"file":"libs/common-react/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/common-react/.storybook/main.js","hash":"b17a4cd6ebe5e3b9bf8f3b47328cfa969bc0fef5"},{"file":"libs/common-react/.storybook/tsconfig.json","hash":"7a1170995999ff179ae31ea7b87133b1c2161bc2"},{"file":"libs/common-react/jest.config.ts","hash":"b59a0a99ecbe1f0f88b49e3267d438b75f245568"},{"file":"libs/common-react/package.json","hash":"c99762c7de6ff4d0ee3b0f36d17f0468cf903f14"},{"file":"libs/common-react/project.json","hash":"bec8a20259078de9a3fc2340234d37049c5fffb8"},{"file":"libs/common-react/README.md","hash":"f351f7ff8075ea3a997a7e45950bfe94141af6df"},{"file":"libs/common-react/src/index.ts","hash":"e07c97f79c8a865a189e1e481d53d0d72fb46479"},{"file":"libs/common-react/src/lib/components/google-analytics/google-analytics.tsx","hash":"47583544840884b986e6496d8e117af928672300"},{"file":"libs/common-react/src/lib/hooks/index.ts","hash":"67954b453c8cdcbc2d31c1e1f01cfc9b8e1681e3"},{"file":"libs/common-react/src/lib/hooks/theme-context-factory.ts","hash":"a81c5364f26300b112af6564d50dabb009c736ed","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-config.spec.tsx","hash":"74a81f5919a6c4e049a79b22410c60226e6a56b2","deps":["npm:@testing-library/react","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-config.ts","hash":"efa4f7020ac3596a8f224848a666d7f1d252e30b","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-local-forage.ts","hash":"145b7cabbc42d258f2690578ac911d889708d094","deps":["npm:localforage","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-logger.ts","hash":"6b96e68d73732e8feccd2a88a4b16140c76b4dcf","deps":["common","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-nx-graph.ts","hash":"36c11fd630a96b4ded3d5c8784541b7d97bc8965","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-script.ts","hash":"8b5bf160ac1ea391287b718cedff8444e9426d6a","deps":["npm:react"]},{"file":"libs/common-react/src/lib/types/base-config.ts","hash":"5648d8afc499d735be0b82653fd3120e882276a3"},{"file":"libs/common-react/src/lib/types/index.ts","hash":"5161f4c99558ace611f07d674479df81aab171eb"},{"file":"libs/common-react/src/lib/types/themes.ts","hash":"98fae24608f74841f42fed968d272405b1702ee3"},{"file":"libs/common-react/src/lib/utils/combine-components.tsx","hash":"6e13194af9442ef6c8e506b8240596ee89c73deb","deps":["npm:react"]},{"file":"libs/common-react/src/lib/utils/get-config.ts","hash":"e1c5b38b333ee58223fe8bc99610e4ca0237f663"},{"file":"libs/common-react/src/lib/utils/get-nx-graph.ts","hash":"9c87613999586cf84dd4dcfdfa6ebb6fcb5e79e8"},{"file":"libs/common-react/src/lib/utils/get-projects-by-target.spec.ts","hash":"573db404eb241631ca259c521bf5a906dd8b520d"},{"file":"libs/common-react/src/lib/utils/get-projects-by-target.ts","hash":"0b8a3e7fdb9092e8827c2f6c96b8d4b62487ef6f"},{"file":"libs/common-react/src/lib/utils/index.ts","hash":"d39a90a988a6155d294de5e57515d1c88e58991d"},{"file":"libs/common-react/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/common-react/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/common-react/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/common-react/typedoc.json","hash":"0df9bd3ed0bb9c9319f89ab55b71985fcba330f7"}]}},{"name":"storybook","type":"lib","data":{"tags":[],"root":"libs/storybook","files":[{"file":"libs/storybook/.babelrc","hash":"ccae900be42788285eb6e1b3a2af4b81f56f14fe"},{"file":"libs/storybook/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/storybook/.storybook/main.js","hash":"b274f2bef88b29d7aa5fc0f4b63c1fb83b8aba96"},{"file":"libs/storybook/.storybook/preview-head.html","hash":"31db416a9aabb1122a1a6e59418a61272abebc0c"},{"file":"libs/storybook/.storybook/tsconfig.json","hash":"5236331a19174caa1865949505d8ce05a8163da9"},{"file":"libs/storybook/jest.config.ts","hash":"d6e42f3cbe680e87312920043cf29c1665fabe9b"},{"file":"libs/storybook/package.json","hash":"c37f61b012a34ae809b0aaf2511b068823d0a473"},{"file":"libs/storybook/project.json","hash":"c1ae4064a69befa55127f465489aad319cc66140"},{"file":"libs/storybook/README.md","hash":"c306e6e0eae27e2bfc81452ae718cc3303644c2f"},{"file":"libs/storybook/src/index.ts","hash":"fb1481ec27960d4ff8714ef327c02b3939c32312"},{"file":"libs/storybook/src/lib/storybook-landing.spec.tsx","hash":"cf98d24b844457a1a5d303f3d685a8cbf561d14d","deps":["npm:@testing-library/react"]},{"file":"libs/storybook/src/lib/storybook-landing.stories.tsx","hash":"f0e4fcd9eebf66279d7aa059a83424744511af53","deps":["npm:@primer/react","npm:@storybook/react"]},{"file":"libs/storybook/src/lib/storybook-landing.tsx","hash":"447dae71200f0aaafd89bd8b0ad0a7f7efb3e8e6","deps":["npm:@primer/react","npm:react"]},{"file":"libs/storybook/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/storybook/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/storybook/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/storybook/typedoc.json","hash":"85163ace684abcf02f209f2c1db480fd9beecaeb"}]}},{"name":"markdown","type":"lib","data":{"tags":[],"root":"libs/markdown","files":[{"file":"libs/markdown/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/markdown/.eslintrc.json","hash":"9d9c0db55bb1e91c5f2e7b64a02bc6bf69fc7cb5"},{"file":"libs/markdown/jest.config.ts","hash":"68c80783135304cb96fe208491c7647fabd0a8d1"},{"file":"libs/markdown/project.json","hash":"1d6d10a09183d142fb6df500af74fee63419f8a7"},{"file":"libs/markdown/README.md","hash":"10913a384fa701835c658c3d0590b5e58ee203ba"},{"file":"libs/markdown/src/index.ts","hash":"26ce92b1897c77a648e1f83054b704fba085ac46"},{"file":"libs/markdown/src/lib/markdown.spec.ts","hash":"b18b914b2d4a346cb62a213ecc0ea75a8b1e057e"},{"file":"libs/markdown/src/lib/markdown.ts","hash":"83ed644f1a56ebb9ab14a28238a24ad46616db40"},{"file":"libs/markdown/tsconfig.json","hash":"62ebbd946474cea997e774d20fffc4d585c184f3"},{"file":"libs/markdown/tsconfig.lib.json","hash":"0e2a172abd561482f8c5e4d9ad900e03a9e48260"},{"file":"libs/markdown/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"}]}},{"name":"common","type":"lib","data":{"tags":[],"root":"libs/common","files":[{"file":"libs/common/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/common/.eslintrc.json","hash":"9d9c0db55bb1e91c5f2e7b64a02bc6bf69fc7cb5"},{"file":"libs/common/jest.config.ts","hash":"43acc9da0efabd776fc72123e32ef2199372a264"},{"file":"libs/common/package.json","hash":"b1e154e88e13334f143ace9a26d89da97a56a948"},{"file":"libs/common/project.json","hash":"3065be444d5cea02c7da0b6e4b2e59faa9bf6d48"},{"file":"libs/common/README.md","hash":"0246461f2c49545e5963fdbb5798244091246ac2"},{"file":"libs/common/src/index.ts","hash":"efb36b5cbe0761ecb2c5317b79268e110d295175"},{"file":"libs/common/src/lib/models/document-with-id.ts","hash":"2e9e79933c5773b6e0422aff32ac7b94acbbac43"},{"file":"libs/common/src/lib/models/index.ts","hash":"dbc33d1d2e816fe7dcb1493604af1b4d9f597b7f"},{"file":"libs/common/src/lib/utils/common-logger.spec.ts","hash":"22f06f1c9eef62f3606def8be8d85781d29c36ca"},{"file":"libs/common/src/lib/utils/common-logger.ts","hash":"05e25683cdb8adea808b885ca271941d9955a9d5"},{"file":"libs/common/src/lib/utils/index.ts","hash":"97e7cd56dd8a44356ad42e260984b5ba73cd2efe"},{"file":"libs/common/tsconfig.json","hash":"e258886ffc933cca0326ceb2ee4fde881378131b"},{"file":"libs/common/tsconfig.lib.json","hash":"0e2a172abd561482f8c5e4d9ad900e03a9e48260"},{"file":"libs/common/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/common/typedoc.json","hash":"f17b64fe6c15fb08a2b83fc32b966310866c0297"}]}}],"dependencies":{"internal-client":[{"source":"internal-client","target":"common-react","type":"static"}],"common-react":[{"source":"common-react","target":"common","type":"static"}],"storybook":[],"markdown":[],"common":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};