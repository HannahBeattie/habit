import { Stack } from 'expo-router'
import { StyleProvider } from '../theme/StyleProvider'
import React, { useState, useEffect } from 'react'

import {
	NotoSansSC_100Thin as bodyThin,
	NotoSansSC_300Light as bodyLight,
	NotoSansSC_400Regular as body,
	NotoSansSC_500Medium as bodyMedium,
	NotoSansSC_700Bold as bodyBold,
	NotoSansSC_900Black as bodyBlack,
} from '@expo-google-fonts/noto-sans-sc'
import {
	Aleo_300Light as aLight,
	Aleo_300Light_Italic as aItalic,
	Aleo_400Regular as aRegular,
	Aleo_400Regular_Italic as aRegItalic,
	Aleo_700Bold as aBold,
	Aleo_700Bold_Italic as aBoldItalic,
} from '@expo-google-fonts/aleo'
import { useFonts, Copse_400Regular as heading } from '@expo-google-fonts/copse'
import AppLoading from 'expo-app-loading'
function App() {
	let [fontsLoaded] = useFonts({
		heading,
		aLight,
		aItalic,
		aRegular,
		aRegItalic,
		aBold,
		aBoldItalic,
		bodyThin,
		body,
		bodyBold,
		bodyMedium,
		bodyLight,
		bodyBlack,
	})
	if (!fontsLoaded) {
		return <AppLoading />
	} else {
		return (
			<StyleProvider>
				<Stack screenOptions={{ headerShown: false }} />
			</StyleProvider>
		)
	}
}
export default function Layout() {
	return <App />
}
