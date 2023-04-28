import {
	CheckIcon,
	CircleIcon,
	HStack,
	Heading,
	Icon,
	IconButton,
	Image,
	InfoIcon,
	Input,
	PlayIcon,
	QuestionIcon,
	Spacer,
	Spinner,
	Text,
	ThreeDotsIcon,
	VStack,
} from 'native-base'
import React from 'react'
import { SafeAreaView, useWindowDimensions } from 'react-native'

const image = require('../assets/grass.png')

export default function NameInput() {
	const { width } = useWindowDimensions()
	const headingProps = {
		fontSize: '4xl',
		color: 'blueGray.500',
		pr: 12,
		fontFamily: 'heading',
		pb: 8,
	}

	return (
		<VStack flex={1} space={8} bg={'#f3f0f4'}>
			<SafeAreaView style={{ flex: 1 }}>
				<HStack px={4} py={2}>
					<VStack>
						<Text fontSize={'xl'} fontFamily={'heading'} color={'gray.600'}>
							66 days
						</Text>
						<Text fontSize={'xs'} fontFamily={'body'} color={'gray.600'}>
							To build a habit
						</Text>
						<Spacer />
					</VStack>
				</HStack>
				<VStack px={8} flex={1} py={16}>
					<Heading {...headingProps}>What should I call you?</Heading>
					<VStack space={6} shadow={3} bg={'transparent'}>
						<VStack shadow={2} bgColor={'blueGray.200'} p={1} borderRadius={10}>
							<VStack shadow={0}>
								<Input
									borderRadius={20}
									borderColor={'gray.200'}
									color={'gray.900'}
									borderWidth={2}
									shadow={4}
									bgColor={'gray.200'}
									p={2}
									fontSize={'2xl'}
									bg={'gray.100'}
									variant='filled'
									placeholderTextColor={'gray.400'}
									placeholder='hmmm ?'
								/>
							</VStack>
						</VStack>

						<HStack>
							<Spacer />
							<IconButton
								borderColor={'gray.100'}
								borderWidth={3}
								bg={'gray.200'}
								borderRadius={200}
								icon={<CheckIcon color={'gray.100'} size={8} />}
							/>
						</HStack>
					</VStack>
					<Image
						maxH={300}
						position={'absolute'}
						bottom={-40}
						opacity={50}
						w={width}
						alt={'watercolor grass'}
						source={image}
					/>
				</VStack>
			</SafeAreaView>
		</VStack>
	)
}
