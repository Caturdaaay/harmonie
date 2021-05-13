module.exports = {
    module: {
        rules: [
            {
                test: /\.mp3$/,
                loader: 'url-loader',
                options: {
                    limit: inlineLimit,
                    name: `assets/img/[name].[hash:8].[ext]`
                }
            }
        ],
    },
};