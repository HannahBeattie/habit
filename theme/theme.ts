import { extendTheme, theme as defaultTheme } from 'native-base'
export const theme = extendTheme({
	config: { useSystemColorMode: false, initialColorMode: 'dark' },
	fonts: {
		heading: 'heading',
	},
	components: {
		VStack: {
			abs: {
				position: 'absolute',
				left: '0',
				top: '0',
				right: '0',
				bottom: '0',
			},
			cnt: {
				bg: '#cbc4cd',
				px: 8,
				flex: 1,
				alignItems: 'stretch',
				justifyItems: 'center',
				alignContent: 'center',
				justifyContent: 'center',
			},
		},
	},
})
