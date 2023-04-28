import { FC, PropsWithChildren } from 'react'
import { NativeBaseProvider } from 'native-base'
import { theme } from './theme'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'

export type StyleProviderProps = {}

export const StyleProvider: FC<PropsWithChildren<StyleProviderProps>> = ({ children }) => {
	return (
		<ThemeProvider value={DarkTheme}>
			<NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
		</ThemeProvider>
	)
}
