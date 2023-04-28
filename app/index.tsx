import {
	Box,
	Center,
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

const logo = require('../assets/66.png')
const image = require('../assets/grass.png')
export default function Home() {
	const { width } = useWindowDimensions()
	const headingProps = {
		fontSize: '4xl',
		color: 'blueGray.500',
		pr: 12,
		fontFamily: 'heading',
		pb: 8,
	}

	return (
		<VStack flex={1} space={8} bg={'#e7e4e8'}>
			<SafeAreaView style={{ flex: 1 }}>
				<VStack flex={1} space={8}>
					<SafeAreaView style={{ flex: 1 }}>
						<VStack
							shadow={8}
							p={4}
							bg={'gray.800'}
							w={90}
							h={90}
							borderRightRadius={200}
							borderColor={'gray.300'}
							borderWidth={2}
							borderLeftWidth={0}
						>
							<Heading fontSize={'lg'} fontFamily={'heading'} color={'gray.300'}>
								66
							</Heading>
							<Heading fontFamily={'heading'} fontSize={'lg'} color={'gray.300'}>
								days
							</Heading>
						</VStack>

						<VStack px={8} flex={1} py={20}>
							<Heading {...headingProps}>What should I call you?</Heading>
							<VStack space={6} shadow={3} bg={'transparent'}>
								<VStack shadow={2} bgColor={'blueGray.200'} p={1} borderRadius={10}>
									<VStack shadow={0}>
										<Input
											borderRadius={10}
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
						</VStack>
					</SafeAreaView>
				</VStack>
			</SafeAreaView>
		</VStack>
	)
}
