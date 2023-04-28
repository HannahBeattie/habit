import { VStack } from 'native-base'
import React, { PropsWithChildren, ReactComponentElement } from 'react'
interface Props {
	children: any
	bg?: any
}

const CenterWrapper: React.FC<Props> = ({ children, bg }) => {
	const col = bg ? bg : '#aca5ae'
	return (
		<VStack
			bg={col}
			px={8}
			flex={1}
			alignItems={'stretch'}
			justifyItems={'center'}
			alignContent={'center'}
			justifyContent={'center'}
		>
			{children}
		</VStack>
	)
}

export default CenterWrapper
