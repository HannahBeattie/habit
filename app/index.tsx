import { VStack, Text, Spacer, Heading, Box } from 'native-base'
import React from 'react'
import CenterWrapper from '../features/CenterWrapper'

export default function Home() {
	const headingProps = {
		fontSize: '8xl',
		fontFamily: 'heading',
		color: '#2a2c31',
	}
	const bodyProps = {
		fontSize: '2xl',
		fontFamily: 'bodyBold',
		color: '#2a2c31',
	}
	return (
		<CenterWrapper>
			<Heading {...headingProps}>66</Heading>
			<Heading {...headingProps} mt={-6}>
				days
			</Heading>
			<Text pb={100} {...bodyProps}>
				To build a habit.
			</Text>
		</CenterWrapper>
	)
}
