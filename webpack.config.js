import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import { dirname as pathDirname, join } from 'path';

const filename = fileURLToPath(import.meta.url);
const dirname = pathDirname(filename);

export default {
	entry: './src/index.js',
	mode: 'development',
	output: {
		path: join(dirname, 'dist'),
		filename: 'index_bundle.js',
		clean: true, // Cleans the output directory before each build
	},
	target: 'web',
	devServer: {
		port: 5000,
		static: {
			directory: join(dirname, 'public'),
		},
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg|gif|svg)$/, // Handle images
				type: 'asset/resource', // Replaces file-loader
				generator: {
					filename: 'images/[name][hash][ext]', // Custom output for images
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: join(dirname, 'public', 'index.html'),
			filename: 'index.html',
		}),
	],
};
