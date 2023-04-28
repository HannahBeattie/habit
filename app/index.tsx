import {
	CheckIcon,
	CircleIcon,
	HStack,
	Heading,
	Icon,
	IconButton,
	InfoIcon,
	Input,
	PlayIcon,
	QuestionIcon,
	Spacer,
	Spinner,
	ThreeDotsIcon,
	VStack,
} from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'

export default function Home() {
	const headingProps = {
		fontSize: '6xl',
		color: 'gray.900',
		pb: 2,
	}

	return (
		<VStack flex={1} space={8} bg={'#dad0e2'}>
			<SafeAreaView style={{ flex: 1 }}>
				<VStack space={4} px={8} py={70} shadow={3} bg={'transparent'}>
					<Heading {...headingProps}>What should I call you?</Heading>
					<Input
						borderColor={'gray.200'}
						color={'gray.900'}
						borderWidth={3}
						bgColor={'blueGray.100'}
						p={2}
						fontSize={'2xl'}
						bg={'gray.100'}
						variant='filled'
						placeholder='hmmm ???'
					/>
					<HStack>
						<Spacer />
						<IconButton
							bg={'gray.900'}
							borderRadius={200}
							icon={<CheckIcon color={'gray.200'} size={8} />}
						/>
					</HStack>
				</VStack>
			</SafeAreaView>
		</VStack>
	)
}
