module.exports = {
	devServer: {
        proxy: {
            '/': {
                target: 'http://13.125.245.250:3000/',
                changeOrigin: true
            }
        }
    }
}