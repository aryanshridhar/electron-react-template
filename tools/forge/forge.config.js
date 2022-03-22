const path = require('path');
const root = process.cwd();

module.exports = {
  packagerConfig: {
    executableName: 'electron-react-template',
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'electron-react-template',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    [
      '@electron-forge/plugin-webpack',
      {
        mainConfig: path.join(root, 'tools/webpack/development/webpack.main.dev.config.js'),
        renderer: {
          config: path.join(root, 'tools/webpack/development/webpack.renderer.dev.config.js'),
          entryPoints: [
            {
              html: path.join(root, './src/renderer/index.html'),
              js: path.join(root, './src/renderer/renderer.tsx'),
              name: 'main_window',
              preload: {
                js: path.join(root, 'src/preload/preload.tsx'),
              },
            },
          ],
        },
      },
    ],
  ],
};
