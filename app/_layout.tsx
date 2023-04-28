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
import { useFonts, Copse_400Regular as heading } from '@expo-google-fonts/copse'
import AppLoading from 'expo-app-loading'
function App() {
	let [fontsLoaded] = useFonts({
		heading,
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
