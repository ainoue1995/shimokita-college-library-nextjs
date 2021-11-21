module.exports = {
  reactStrictMode: false,
  trailingSlash: true,
  target: 'serverless',
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: '/:any*',
        destination: '/',
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: { allowTsInNodeModules: true },
    })

    return config
  },
}
