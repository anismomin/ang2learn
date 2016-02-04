module.exports = function() {
	var config = {
		dev: './dev/',
		devTs: './dev/**/*.ts',
		devHtml: './dev/**/*.html',
		devImages: './dev/assets/images/**/*',
		devScss: './dev/assets/scss/**/*.scss',
		
		production: './app/',
		prodAssets: './app/assets/',
		prodImages: './app/assets/images/',
		prodScss: './app/assets/css/'  		
	};
	
	return config;
}