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
		fontSize: '5xl',
		color: 'blueGray.700',
		pr: 12,
		fontFamily: 'aRegItalic',
		pb: 8,
	}

	return (
		<VStack flex={1} space={8} bg={'#dad0e2'}>
			<SafeAreaView style={{ flex: 1 }}>
				<VStack px={8} py={20} bg={'transparent'}>
					<Heading {...headingProps}>What should I call you?</Heading>
					<VStack space={6} shadow={4} bg={'transparent'}>
						<Input
							borderRadius={10}
							borderColor={'gray.200'}
							color={'gray.900'}
							borderWidth={3}
							bgColor={'blueGray.300'}
							p={2}
							fontSize={'2xl'}
							bg={'gray.100'}
							variant='filled'
							placeholderTextColor={'blueGray.300'}
							placeholder='hmmm ?'
						/>

						<HStack>
							<Spacer />
							<IconButton
								borderColor={'gray.200'}
								borderWidth={3}
								shadow={6}
								bg={'gray.900'}
								borderRadius={200}
								icon={<CheckIcon color={'gray.200'} size={8} />}
							/>
						</HStack>
					</VStack>
				</VStack>
			</SafeAreaView>
		</VStack>
	)
}
