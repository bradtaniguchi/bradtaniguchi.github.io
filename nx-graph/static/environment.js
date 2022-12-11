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
  window.projectGraphResponse = {"hash":"94cff7b9ce6203adef116e614af88b9020abf71676b057d101007ccea446a64b","projects":[{"name":"internal-client-e2e","type":"e2e","data":{"tags":[],"root":"apps/internal-client-e2e","files":[{"file":"apps/internal-client-e2e/.eslintrc.json","hash":"296b4bd55da354fdb536ddc8a5b309b577f5ee51"},{"file":"apps/internal-client-e2e/playwright.config.ts","hash":"71ba23f6c2aa0bd1ec38ce08db93e32e72fbf89a","deps":["npm:@playwright/test"]},{"file":"apps/internal-client-e2e/project.json","hash":"0415283f88674394e123d8e30fbb50e09a01b259"},{"file":"apps/internal-client-e2e/README.md","hash":"f802ee2c45c5efa7fae5cf59ccb3bd0e9135941c"},{"file":"apps/internal-client-e2e/src/core/header.spec.ts","hash":"b63259ef45532afabc51c06389fa1e5444ddff6b","deps":["npm:@playwright/test"]},{"file":"apps/internal-client-e2e/src/pages/index.spec.ts","hash":"5e340c9b89745b03199d746cbfae0a17943d6dab","deps":["npm:@playwright/test"]},{"file":"apps/internal-client-e2e/tsconfig.e2e.json","hash":"208869be646ac501ab4bc27d924e43a712120247"},{"file":"apps/internal-client-e2e/tsconfig.json","hash":"08841a7f56c62d55340ad08451502304837254fd"}]}},{"name":"internal-client","type":"app","data":{"tags":[],"root":"apps/internal-client","files":[{"file":"apps/internal-client/.eslintrc.json","hash":"cd7b0320ecbe096c9d39295be64ddf5a83509506"},{"file":"apps/internal-client/.gitignore","hash":"737f3f5484b600482c57007f3c0185a48dd3b8f5"},{"file":"apps/internal-client/components/activity/activities.tsx","hash":"1f967169c40d5bdc889c4403379d9357045d68d7","deps":["common-react","npm:@primer/react","npm:react"]},{"file":"apps/internal-client/components/activity/github-public-activity.tsx","hash":"f279d7e263d47eb56bec68d5f5b7cda8e7d89181","deps":["npm:@primer/octicons-react","npm:@primer/react","npm:luxon","npm:next","npm:react"]},{"file":"apps/internal-client/components/blog/static-blog-post.tsx","hash":"1d182a734ef91e1fd0f2102a2caa74c8d2bec32e","deps":["npm:@primer/react","npm:react","npm:luxon","npm:next"]},{"file":"apps/internal-client/components/core/app-header-search.tsx","hash":"3703ee432c2417b062910b05f4f5c541d507a57e","deps":["npm:@primer/octicons-react","npm:@primer/react","npm:react"]},{"file":"apps/internal-client/components/core/app-header.tsx","hash":"293915050befee89d08626a08adf172ffcd69a90","deps":["common-react","npm:@primer/octicons-react","npm:@primer/react","npm:next","npm:react"]},{"file":"apps/internal-client/components/core/card.tsx","hash":"9273ff893eb02c27800912955068e931977ad9a4","deps":["npm:@primer/react"]},{"file":"apps/internal-client/components/internals/internal-config.tsx","hash":"25e742c9ca3c1bed73cf724b940ab73a4c0d93ce","deps":["common-react","npm:@primer/react","npm:react"]},{"file":"apps/internal-client/components/internals/internal-links.tsx","hash":"a4a6936f74f26e447f53f06c5caffa5a7bb766e0","deps":["npm:@primer/react","npm:react","npm:@primer/octicons-react"]},{"file":"apps/internal-client/components/internals/internal-projects.tsx","hash":"b19b1710cc09f1630eabe622ddcf33ecd622842a","deps":["common-react","npm:@primer/react","npm:nx","npm:@primer/octicons-react","npm:react"]},{"file":"apps/internal-client/components/profile/profile.tsx","hash":"ef32b5a5a7afc34dd68160a4ea16ebe587884604","deps":["npm:@primer/react"]},{"file":"apps/internal-client/components/project/static-project.tsx","hash":"3124f5fce51948f53952414faa9ea6154fc9dd39","deps":["npm:@primer/react","npm:react","npm:luxon","npm:next"]},{"file":"apps/internal-client/components/projects/list-filters.tsx","hash":"619460e4d33f4fd81a34ada838161e1e5128001b","deps":["npm:@primer/octicons-react","npm:@primer/react","npm:react","npm:react-use"]},{"file":"apps/internal-client/components/spinner.tsx","hash":"263a96f37d89099bf5be80d1c9f6479dfd4cfcf0","deps":["npm:@primer/react"]},{"file":"apps/internal-client/constants/blog-path.ts","hash":"335f2b3d2869e28b84b2e4302afd912ea87db106"},{"file":"apps/internal-client/constants/github-url.ts","hash":"5c52742da2d4c7ee086c607b20db74d81b315f05"},{"file":"apps/internal-client/constants/local-forage-theme-key.ts","hash":"82132f27efb583192039512dae089c78b29dd5e5"},{"file":"apps/internal-client/constants/projects-path.ts","hash":"fbc7ec2e2d717fb662c7d1407614847640a8991a"},{"file":"apps/internal-client/index.d.ts","hash":"7ba08fa17ccbb3d5eaa4d9c7b435bd44ff43f330"},{"file":"apps/internal-client/jest.config.ts","hash":"315b134a141cb9ac26109a983501097abfe95d35"},{"file":"apps/internal-client/models/activity.ts","hash":"25d1f5d5096ef88a750bf99638b40926c62e4edd"},{"file":"apps/internal-client/models/github-public-activity.ts","hash":"c62d00c5668417d5453d64a19353b463d93e293e","deps":["npm:@octokit/rest"]},{"file":"apps/internal-client/models/project.ts","hash":"86632ebdae75370da9cac3ade4e7fa5c925c5306","deps":["npm:@primer/react","npm:luxon"]},{"file":"apps/internal-client/models/static-blog-post.ts","hash":"c53afdd12fd3a96c5e26d0267e21bd75f2279afb"},{"file":"apps/internal-client/next-env.d.ts","hash":"4f11a03dc6cc37f2b5105c08f2e7b24c603ab2f4"},{"file":"apps/internal-client/next.config.js","hash":"dc0b64da0785c88bbcf4d2642a5b4f9c689a1a4c","deps":["npm:@sentry/nextjs","npm:@nrwl/next","npm:@next/bundle-analyzer"]},{"file":"apps/internal-client/pages/_app.tsx","hash":"83b24d876df8c62c16f680588f9be6273728dd46","deps":["common-react","npm:@primer/react","npm:next","npm:react"]},{"file":"apps/internal-client/pages/_document.tsx","hash":"f8917c1bde1bb9bea1d63a7522baa5effab74160","deps":["npm:react","npm:next","npm:styled-components","common-react"]},{"file":"apps/internal-client/pages/_error.tsx","hash":"024eafe831b4cd55054b4bb6c20aafedee92e3e3","deps":["npm:@sentry/nextjs","npm:next"]},{"file":"apps/internal-client/pages/404.tsx","hash":"3afeff96af8e5867de8f5f394f6eb05fa4f2475b"},{"file":"apps/internal-client/pages/500.tsx","hash":"02c533c6eba6270f88549c6037bab0b0d2634012"},{"file":"apps/internal-client/pages/about.tsx","hash":"495338256bd46f417df13e4774941c4eee740ffc","deps":["common-react","npm:@primer/react"]},{"file":"apps/internal-client/pages/blog/[slug].tsx","hash":"7761f0b29364735f16dca26c913f595d9ae1b0c9","deps":["npm:next","npm:react-icons"]},{"file":"apps/internal-client/pages/blog/index.tsx","hash":"363d7769b8fccbf6f3d209788d1cca20d7aa5340","deps":["common-react","npm:@primer/react","npm:next","npm:react"]},{"file":"apps/internal-client/pages/index.tsx","hash":"de4b77027caf276e294be9dd7e0ed2c32f50d201","deps":["npm:@octokit/rest","npm:@primer/octicons-react","npm:@primer/react","npm:next","npm:react-icons"]},{"file":"apps/internal-client/pages/projects/[name].tsx","hash":"c71186f90c25dddbd0096815f9d4af494a94147a","deps":["npm:next","npm:react-icons"]},{"file":"apps/internal-client/pages/projects/index.tsx","hash":"abeec518b77263fbb28dcc4d814d1ea03a2034a9","deps":["common-react","npm:@primer/react","npm:next","npm:react"]},{"file":"apps/internal-client/pages/snippets/[id].tsx","hash":"b1f95f91a0e2911490df035c31f49478cbe70f44","deps":["npm:next"]},{"file":"apps/internal-client/pages/snippets/index.tsx","hash":"c06c8286eeefbbbd5cc346c0319ad07adf258f81"},{"file":"apps/internal-client/pages/styles.css","hash":"c6e0699813a17bb52cbf8b7d63276ac6a8542bf8"},{"file":"apps/internal-client/project.json","hash":"8bc9b4bd367ea51a2f2c5d9a3bb810fe1da06166"},{"file":"apps/internal-client/public/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/internal-client/public/.nojekyll","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/internal-client/public/config.json","hash":"677e3cdebdf644bcfcb8f9416e5b8822b2c01bb0"},{"file":"apps/internal-client/public/img/bomb-defuse-utils.png","hash":"6e90cf80c3735917b0dbe17ed64589cb15be3c8e"},{"file":"apps/internal-client/public/img/chrome-neo.png","hash":"b378cfacd2f2157384bbb2c95b9ea463f1984411"},{"file":"apps/internal-client/public/img/fcc-calculator.png","hash":"4e187721d696a02c9b7db22cfc3bdae3f760ca6a"},{"file":"apps/internal-client/public/img/github-avatar.jpg","hash":"758f9890cff0f8c5526f8fbccf591419eba9ce1d"},{"file":"apps/internal-client/public/img/markdown-previewer.png","hash":"073d5aa7b2e1763a78ba9ef8888e809fbc45bb9d"},{"file":"apps/internal-client/public/nx-graph/graph.json","hash":"c5f027dc631c9c97b9542f93e1d522bd804d98fe"},{"file":"apps/internal-client/README.md","hash":"c52aa53556ff8d9e61d319e23117736681f7589b"},{"file":"apps/internal-client/scripts/get-meta-data.ts","hash":"3d4c670e137e19d0d3372c48f23c2fa3d6ed1495","deps":["npm:fs-extra","npm:yargs"]},{"file":"apps/internal-client/scripts/prod-build.sh","hash":"34c36021cb0f34d06d40bb2bb40c0fb27677bc66"},{"file":"apps/internal-client/scripts/tsconfig.json","hash":"8ca3c084ecc312b5673440d7b7912c98402f84c9"},{"file":"apps/internal-client/scripts/validate-blog-posts.ts","hash":"c3177024bfac22bb6f322cde32f5551821b57867","deps":["npm:fs-extra","npm:yargs"]},{"file":"apps/internal-client/scripts/validate-static-projects.ts","hash":"10d89a844a7ca560b98c2576d4456c9634bc01cd","deps":["npm:fs-extra","npm:yargs"]},{"file":"apps/internal-client/sentry.client.config.ts","hash":"09f7c52f3f95dc6907fdb47fdbeff354867e30ec","deps":["npm:@sentry/nextjs"]},{"file":"apps/internal-client/sentry.properties","hash":"97593db9b957d62313b8b352da400a158ccaf6bb"},{"file":"apps/internal-client/sentry.server.config.ts","hash":"990cf22a51e1d45c954980e0670c53fbcc68d64e","deps":["npm:@sentry/nextjs"]},{"file":"apps/internal-client/static/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/internal-client/static/blog/2021-08-31-blog.md","hash":"b3fb007cef666aec4c0d6f1cb88daa114dd52372"},{"file":"apps/internal-client/static/blog/2021-09-02-blog.md","hash":"dbc5be6186a6b12f89f0a17c6149cb239bc1b06e"},{"file":"apps/internal-client/static/blog/2021-09-19-blog.md","hash":"238e326d005a8c7f82a8552c65cc10d6093047dc"},{"file":"apps/internal-client/static/blog/building-a-github-template-repo.md","hash":"0248a64b9323809058cb1d9f976fe29b8732649b"},{"file":"apps/internal-client/static/blog/clojure-update-1.md","hash":"f3b0b744ecec8d31790e0d8985ebabcabc83d013"},{"file":"apps/internal-client/static/blog/dogfight-game-remake-and-updates.md","hash":"6010c4997db92d4dd281fa6ebb53c4e122908d78"},{"file":"apps/internal-client/static/blog/hello-world.md","hash":"83f261acef5aad9ae6cb3f399527e860c13970d9"},{"file":"apps/internal-client/static/blog/new-blog-generation.md","hash":"41281d8d20ce93745e540bd28a39cece279a2c7c"},{"file":"apps/internal-client/static/blog/new-script-ng-13.md","hash":"1745c7b4722df19fa92e02555169713676c56e5a"},{"file":"apps/internal-client/static/blog/new-year-same-stuff.md","hash":"f72e1c7dc115ecfe3c9893038cb3b29c250aa40f"},{"file":"apps/internal-client/static/blog/re-learning-clojure.md","hash":"9ae7e649c24e69c163a37bb9dc0a07db47743e20"},{"file":"apps/internal-client/static/blog/struggles-with-scully.md","hash":"2a0f84bcce5e7d85df0df3131c505044c0abffb9"},{"file":"apps/internal-client/static/blog/the-halloween-edition.md","hash":"3fcc48be063e204c6b0abe42d200b82fe988c12a"},{"file":"apps/internal-client/static/blog/utf-8-vs-utf-16.md","hash":"9aec3fa5300f4c4399e173307b40f71de34c9a36"},{"file":"apps/internal-client/static/projects/bomb-defuse-utils.md","hash":"46d0d4009b846fefc7421d2885afcaa712fdb98a"},{"file":"apps/internal-client/static/projects/chrome-neo.md","hash":"b7789348372b2f2f59e9eacc9981f7f5435222cc"},{"file":"apps/internal-client/static/projects/codewars-node-api.md","hash":"0203cce49ea7e9ab34f9f7e20056df5be8794fd9"},{"file":"apps/internal-client/static/projects/dynamic-app-builder.md","hash":"3ad915604820e181705dd158f0bd0af700d2b10f"},{"file":"apps/internal-client/static/projects/es6-timed-map.md","hash":"cc6bb38b0f1bbde409104c3c3e91eb86a143981e"},{"file":"apps/internal-client/static/projects/fcc-calculator.md","hash":"9a6abe137192f2dff29e9c349aca1ca0c1514e48"},{"file":"apps/internal-client/static/projects/fcc-markdown-previewer.md","hash":"a41592ea9385e8ee8466c98efe2d9be8f3dad890"},{"file":"apps/internal-client/static/projects/free-code-camp-discord-bot.md","hash":"0fd7a1363254b57d01f31360ab87464d51c1462c"},{"file":"apps/internal-client/static/projects/go-toros-bank.md","hash":"d7746438ce8eeb9484114b6d966411d141d32978"},{"file":"apps/internal-client/static/projects/health-portal-app.md","hash":"93a6148e5d60c84ec6d061ca7813781bbbea981f"},{"file":"apps/internal-client/static/projects/ims-room-renter.md","hash":"1d023a0cd8e4b1a12ed82068a82b1b82d11aecfb"},{"file":"apps/internal-client/static/projects/intercept-game.md","hash":"8a1c203611acf4abf44848d469b6898e41721fbc"},{"file":"apps/internal-client/tsconfig.json","hash":"cadb8cda700070fec16641a4c734213862573c1c"},{"file":"apps/internal-client/tsconfig.spec.json","hash":"14b06c6a5bf51709abab64ca3e8e0b35b5e52a43"},{"file":"apps/internal-client/utils/error-boundary.tsx","hash":"4161c0a441f243000863aec46520b474df8a3526","deps":["npm:react"]},{"file":"apps/internal-client/utils/get-blog-post-meta-data.ts","hash":"56902425eb72c9995560200a0e77e20e2620eb5f","deps":["npm:front-matter"]},{"file":"apps/internal-client/utils/get-markdown-files.ts","hash":"8012e6a16aabef2d780ef4f217e4c92c6c482641","deps":["npm:fs-extra"]},{"file":"apps/internal-client/utils/get-markdown.ts","hash":"8f4b755015dfa2acb618a7a8bce50e72100c516c","deps":["npm:dompurify","npm:jsdom","npm:marked"]},{"file":"apps/internal-client/utils/get-project-meta-data.ts","hash":"fec215ee75cb4d95cfca711e068792e71701f1fa","deps":["npm:front-matter"]},{"file":"apps/internal-client/utils/logger.tsx","hash":"c716af5f9abd784bcc1dcc2aecc5c1e68e4e2879","deps":["common-react","npm:@sentry/nextjs"]},{"file":"apps/internal-client/utils/props-and-validators.ts","hash":"67a419715f46384b9e2d22db3e52a1525b9cf41c"},{"file":"apps/internal-client/utils/theme-context.tsx","hash":"b744a97ee36cfb8344ebdcb6f160c56a2ee77b47","deps":["common-react"]},{"file":"apps/internal-client/utils/with-headers.ts","hash":"31e838a0d976cf60c977bfb2acf2d9389817baca","deps":["npm:@octokit/auth-token"]}]}},{"name":"common-react","type":"lib","data":{"tags":[],"root":"libs/common-react","files":[{"file":"libs/common-react/.babelrc","hash":"ccae900be42788285eb6e1b3a2af4b81f56f14fe"},{"file":"libs/common-react/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/common-react/.storybook/main.js","hash":"b17a4cd6ebe5e3b9bf8f3b47328cfa969bc0fef5"},{"file":"libs/common-react/.storybook/tsconfig.json","hash":"a33db61008e5c3b0872a277348574e07dcf7b6d7"},{"file":"libs/common-react/jest.config.ts","hash":"607a2c9467c4e24dff219ae919f1d4a544add75b"},{"file":"libs/common-react/package.json","hash":"c99762c7de6ff4d0ee3b0f36d17f0468cf903f14"},{"file":"libs/common-react/project.json","hash":"f9f86f09e65a8d8bfb90aaf65f9d5d4ee6a4468d"},{"file":"libs/common-react/README.md","hash":"f351f7ff8075ea3a997a7e45950bfe94141af6df"},{"file":"libs/common-react/src/index.ts","hash":"e07c97f79c8a865a189e1e481d53d0d72fb46479"},{"file":"libs/common-react/src/lib/components/google-analytics/google-analytics.tsx","hash":"df4d1326d02425b0b183a7403f144af54705b292"},{"file":"libs/common-react/src/lib/hooks/index.ts","hash":"c9de6b8cd0991b5fa0a11dc058cc3dcc994726ef"},{"file":"libs/common-react/src/lib/hooks/theme-context-factory.ts","hash":"a81c5364f26300b112af6564d50dabb009c736ed","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-config.spec.tsx","hash":"1f9f49eb35a0106687d5d4d2b91ffb8ad3c00a39","deps":["npm:@testing-library/react"]},{"file":"libs/common-react/src/lib/hooks/use-config.ts","hash":"efa4f7020ac3596a8f224848a666d7f1d252e30b","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-fuse.ts","hash":"d0903db8aeef0e476cf93e4acc213aaccf04d079","deps":["npm:react","npm:fuse.js"]},{"file":"libs/common-react/src/lib/hooks/use-has-mounted.ts","hash":"8c5a640052c84272687efc331c9ed7e62dedebdf","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-local-collection.spec.tsx","hash":"c18bad0a5afeba56d0ce90e46f38fc9b12b6eef2","deps":["npm:@testing-library/react","npm:@testing-library/jest-dom"]},{"file":"libs/common-react/src/lib/hooks/use-local-collection.ts","hash":"344e67e95b05de0aa0c2a6e507e47019fb28a46f","deps":["npm:fuse.js","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-local-forage.ts","hash":"145b7cabbc42d258f2690578ac911d889708d094","deps":["npm:localforage","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-logger.ts","hash":"6b96e68d73732e8feccd2a88a4b16140c76b4dcf","deps":["common","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-nx-graph.ts","hash":"36c11fd630a96b4ded3d5c8784541b7d97bc8965","deps":["npm:@nrwl/devkit","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-script.ts","hash":"8b5bf160ac1ea391287b718cedff8444e9426d6a","deps":["npm:react"]},{"file":"libs/common-react/src/lib/types/base-config.ts","hash":"5648d8afc499d735be0b82653fd3120e882276a3"},{"file":"libs/common-react/src/lib/types/index.ts","hash":"5161f4c99558ace611f07d674479df81aab171eb"},{"file":"libs/common-react/src/lib/types/themes.ts","hash":"98fae24608f74841f42fed968d272405b1702ee3"},{"file":"libs/common-react/src/lib/utils/combine-components.tsx","hash":"6e13194af9442ef6c8e506b8240596ee89c73deb","deps":["npm:react"]},{"file":"libs/common-react/src/lib/utils/get-config.ts","hash":"e1c5b38b333ee58223fe8bc99610e4ca0237f663"},{"file":"libs/common-react/src/lib/utils/get-nx-graph.ts","hash":"9c87613999586cf84dd4dcfdfa6ebb6fcb5e79e8","deps":["npm:@nrwl/devkit"]},{"file":"libs/common-react/src/lib/utils/get-projects-by-target.spec.ts","hash":"573db404eb241631ca259c521bf5a906dd8b520d","deps":["npm:@nrwl/devkit"]},{"file":"libs/common-react/src/lib/utils/get-projects-by-target.ts","hash":"0b8a3e7fdb9092e8827c2f6c96b8d4b62487ef6f","deps":["npm:@nrwl/devkit"]},{"file":"libs/common-react/src/lib/utils/index.ts","hash":"d39a90a988a6155d294de5e57515d1c88e58991d"},{"file":"libs/common-react/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/common-react/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/common-react/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/common-react/typedoc.json","hash":"0df9bd3ed0bb9c9319f89ab55b71985fcba330f7"}]}},{"name":"storybook","type":"lib","data":{"tags":[],"root":"libs/storybook","files":[{"file":"libs/storybook/.babelrc","hash":"ccae900be42788285eb6e1b3a2af4b81f56f14fe"},{"file":"libs/storybook/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/storybook/.storybook/main.js","hash":"b274f2bef88b29d7aa5fc0f4b63c1fb83b8aba96"},{"file":"libs/storybook/.storybook/preview-head.html","hash":"31db416a9aabb1122a1a6e59418a61272abebc0c"},{"file":"libs/storybook/.storybook/tsconfig.json","hash":"bad38c5bb45877d16e33a1ca64e49bb11aae7eb4"},{"file":"libs/storybook/jest.config.ts","hash":"7c61a2bf538e00a86344276bfad3211a1778c387"},{"file":"libs/storybook/package.json","hash":"c37f61b012a34ae809b0aaf2511b068823d0a473"},{"file":"libs/storybook/project.json","hash":"6380cd8dcfeb4ef477cb4e4cf14b449be1603750"},{"file":"libs/storybook/README.md","hash":"65c8f417cde63355572b6b15b6a59deef8e61c49"},{"file":"libs/storybook/src/index.ts","hash":"fb1481ec27960d4ff8714ef327c02b3939c32312"},{"file":"libs/storybook/src/lib/storybook-landing.spec.tsx","hash":"cf98d24b844457a1a5d303f3d685a8cbf561d14d","deps":["npm:@testing-library/react"]},{"file":"libs/storybook/src/lib/storybook-landing.stories.tsx","hash":"b100572a7424a50877c0de75dcfc8676bf366470","deps":["npm:@primer/react","npm:@storybook/react"]},{"file":"libs/storybook/src/lib/storybook-landing.tsx","hash":"447dae71200f0aaafd89bd8b0ad0a7f7efb3e8e6","deps":["npm:@primer/react","npm:react"]},{"file":"libs/storybook/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/storybook/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/storybook/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/storybook/typedoc.json","hash":"85163ace684abcf02f209f2c1db480fd9beecaeb"}]}},{"name":"markdown","type":"lib","data":{"tags":[],"root":"libs/markdown","files":[{"file":"libs/markdown/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/markdown/.eslintrc.json","hash":"9d9c0db55bb1e91c5f2e7b64a02bc6bf69fc7cb5"},{"file":"libs/markdown/jest.config.ts","hash":"68c80783135304cb96fe208491c7647fabd0a8d1"},{"file":"libs/markdown/project.json","hash":"5f045d338eabf7f5130deb60348269138f2748ab"},{"file":"libs/markdown/README.md","hash":"10913a384fa701835c658c3d0590b5e58ee203ba"},{"file":"libs/markdown/src/index.ts","hash":"26ce92b1897c77a648e1f83054b704fba085ac46"},{"file":"libs/markdown/src/lib/markdown.spec.ts","hash":"b18b914b2d4a346cb62a213ecc0ea75a8b1e057e"},{"file":"libs/markdown/src/lib/markdown.ts","hash":"83ed644f1a56ebb9ab14a28238a24ad46616db40"},{"file":"libs/markdown/tsconfig.json","hash":"62ebbd946474cea997e774d20fffc4d585c184f3"},{"file":"libs/markdown/tsconfig.lib.json","hash":"0e2a172abd561482f8c5e4d9ad900e03a9e48260"},{"file":"libs/markdown/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"}]}},{"name":"common","type":"lib","data":{"tags":[],"root":"libs/common","files":[{"file":"libs/common/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/common/.eslintrc.json","hash":"9d9c0db55bb1e91c5f2e7b64a02bc6bf69fc7cb5"},{"file":"libs/common/jest.config.ts","hash":"43acc9da0efabd776fc72123e32ef2199372a264"},{"file":"libs/common/package.json","hash":"b1e154e88e13334f143ace9a26d89da97a56a948"},{"file":"libs/common/project.json","hash":"636354f61aa644cadde67b2d35e6671afede7207"},{"file":"libs/common/README.md","hash":"0246461f2c49545e5963fdbb5798244091246ac2"},{"file":"libs/common/src/index.ts","hash":"efb36b5cbe0761ecb2c5317b79268e110d295175"},{"file":"libs/common/src/lib/models/document-with-id.ts","hash":"2e9e79933c5773b6e0422aff32ac7b94acbbac43"},{"file":"libs/common/src/lib/models/index.ts","hash":"dbc33d1d2e816fe7dcb1493604af1b4d9f597b7f"},{"file":"libs/common/src/lib/utils/common-logger.spec.ts","hash":"22f06f1c9eef62f3606def8be8d85781d29c36ca"},{"file":"libs/common/src/lib/utils/common-logger.ts","hash":"fde9fcff48dc13f65b4c6f88bbb2d5ceb2a16e92"},{"file":"libs/common/src/lib/utils/index.ts","hash":"97e7cd56dd8a44356ad42e260984b5ba73cd2efe"},{"file":"libs/common/tsconfig.json","hash":"e258886ffc933cca0326ceb2ee4fde881378131b"},{"file":"libs/common/tsconfig.lib.json","hash":"0e2a172abd561482f8c5e4d9ad900e03a9e48260"},{"file":"libs/common/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/common/typedoc.json","hash":"f17b64fe6c15fb08a2b83fc32b966310866c0297"}]}}],"dependencies":{"internal-client-e2e":[{"source":"internal-client-e2e","target":"internal-client","type":"implicit"}],"internal-client":[{"source":"internal-client","target":"common-react","type":"static"}],"common-react":[{"source":"common-react","target":"common","type":"static"}],"storybook":[],"markdown":[],"common":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};