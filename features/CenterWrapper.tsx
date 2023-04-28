import { VStack } from 'native-base'
import React, { PropsWithChildren, ReactComponentElement } from 'react'
interface Props {
	children: any
	bg?: any
	props?: any
}

const CenterWrapper: React.FC<Props> = ({ children, bg, props }) => {
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
			{...props}
		>
			{children}
		</VStack>
	)
}

export default CenterWrapper
