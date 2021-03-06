import { StyleSheet, Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Header } from 'react-navigation';
import { containerPadding, lineThickness, lineColor, lineSpace, lineViewHorizontalPadding, lineViewLeftPadding } from '../src/components/screens/ScheduleSelection';
import { containerPaddingDetails } from '../src/components/screens/ScheduleSelectionDetails';
import { deviceWidth, deviceHeight } from './services/helper';

export const white = '#FFFFFF';
export const black = '#000000';
export const blue = '#153d73';
export const lightBlue = '#43638f';
export const statusBlueColor = '#00000040';
export const dark_blue = '#153d73';
export const red = '#FF0000';
export const darkRed = '#B80000';
export const statusBarDark = '#00000050';
export const statusBarLightPopover = '#000000A0';
export const statusBarPopover = '#000000D0';
export const gray = '#565454';
export const whiteRipple = '#DDDDDD';
export const blueRipple = dark_blue + '50';
export const semiTransparentWhite = '#ffffffa0';

export const snackbarStyle = StyleSheet.create({
	snackbar: {
		bottom: Dimensions.get('screen').height - getStatusBarHeight() - Header.HEIGHT - (Platform.OS === 'ios' ? 90 : Header.HEIGHT + 10), 
		marginHorizontal: '5%'
	}
});

export const bottomButtonsStyles = StyleSheet.create({
	buttons: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20
	},

	button: {
		backgroundColor: lightBlue,
		color:'white',
		width: '48%',
		padding: 5,
		borderRadius: 5,
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.3,
				shadowRadius: 3,    
			},
			android: {
				elevation: 4,
			},
		}),
	},

	buttonNext: {
		marginLeft: '4%',
		backgroundColor: dark_blue
	},	

	buttonText: {
		padding: 8,
		fontFamily: 'Raleway-SemiBold',
		fontSize: 15,
		color: white,
		textAlign: 'center'
	},
});

export const loadingStyles = StyleSheet.create({
	container: {
		flex: 1,
	},

	animView: {
		position:'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		height:'100%',
		width:'100%'
	},
	
	anim: {
		height:350, 
		width:350,
		flex: 1,
		alignSelf:'center' 
	}
});

export const welcomeStyles = StyleSheet.create({
	mainContent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		height: deviceHeight + getStatusBarHeight(),
		width: deviceWidth
	},

	image: {
		width: 320,
		height: 320
	},

	text: {
		fontSize: 16,
		color: 'rgba(255, 255, 255, 0.8)',
		backgroundColor: 'transparent',
		textAlign: 'center',
		paddingHorizontal: 16,
		fontFamily: 'Raleway-Regular',
		textShadowColor: 'rgba(0, 0, 0, 0.40)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 10 
	},

	title: {
		fontSize: 24,
		color: white,
		backgroundColor: 'transparent',
		textAlign: 'center',
		marginBottom: 16,
		fontFamily: 'Raleway-Bold',
		textShadowColor: 'rgba(0, 0, 0, 0.40)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 10 
	},

	buttonCircle: {
		width: 40,
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, .2)',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},

	icon: {
		backgroundColor: 'transparent', 
		textShadowColor: 'rgba(0, 0, 0, 0.20)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 20 
	},

	ionicons: { 
		backgroundColor: 'transparent'
	},
	
	container: {
		flex: 1
	}
});

export const homeStyles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '130%' /*Fixes pattern bug*/
	},

	content: {
		flex: 1,
		alignItems: 'center'
	},

	logo: {
		height: '30%'
	},

	topSection: {
		flexGrow: 3,
		justifyContent: 'center',
		marginTop: getStatusBarHeight(),
		paddingLeft: 25,
		paddingRight: 25
	},

	bottomSection: {
		flexGrow: 1,
		alignItems: 'center',
		backgroundColor: '#0000003C',
		width: '100%'
	},

	signInSection: {
		flexGrow: 2,
		justifyContent: 'center'
	},

	signInButton: {
		width: 312,
		height: 48
	},

	cdhSection: {
		flexGrow: 1,
		width: '100%',
		paddingVertical: 5,
		backgroundColor: '#00000060',
		justifyContent: 'center'
	},

	cdhSectionText: {
		color: white,
		textAlign: 'center'
	},

	cdhText: {
		fontFamily: 'Raleway-Regular'
	},

	cdhLink: {
		fontFamily: 'Raleway-SemiBold'
	}
});

export const schoolScheduleStyles = StyleSheet.create({
	container: {
		flex: 1
	},

	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20
	},

	instruction: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 50
	},

	text: {
		width: 190,
		paddingLeft: 15,
		fontFamily: 'Raleway-Regular',
		color: gray,
		fontSize: 20
	},

	button: {
		alignItems: 'center'
	},

	buttonSelect: {
		borderRadius: 12,
		padding: 20,
		backgroundColor: dark_blue,
		alignItems: 'center',
		width: 300,
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.4,
				shadowRadius: 3
			},
			android: {
				elevation: 4
			},
		}),
	},

	buttonSelectText: {
		fontFamily: 'Raleway-SemiBold',
		fontSize: 15,
		color: white,
		textTransform: 'uppercase'
	},

	buttonTake: {
		borderRadius: 12,
		backgroundColor: lightBlue,
		padding: 20,
		alignItems: 'center',
		marginTop: 20,
		width: 300,
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.4,
				shadowRadius: 3
			},
			android: {
				elevation: 4
			},
		}),
	},

	buttonTakeText: {
		fontFamily: 'Raleway-SemiBold',
		fontSize: 15,
		color: white,
		textTransform: 'uppercase'
	},

	manual: {
		flexDirection: 'row',
		justifyContent: 'center',
		textAlign: 'center',
		marginTop: 40
	},

	textManual: {
		fontFamily: 'Raleway-Regular',
		color: gray,
		fontSize: 16
	},

	buttonManual: {
		fontFamily: 'Raleway-SemiBold',
		color: gray,
		fontSize: 16
	}
});

export const selectPictureStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: dark_blue
	},

	imageGrid: {
		padding: 5,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		paddingBottom: 88 + 5,
		paddingTop: getStatusBarHeight() + Header.HEIGHT
	},

	fab: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: 0
	},

	content: {
		flex: 1
	},

	emptyText: {
		color: white, 
		padding: 20, 
		fontFamily: 'Raleway-Regular', 
		fontSize: 17, 
		textAlign: 'center'
	},
	
	emptyView: {
		alignItems: 'center', 
		padding: 20, 
		height: Dimensions.get('window').height * 0.85, 
		justifyContent: 'center'
	}
});

export const cameraRollImageStyles = StyleSheet.create({
	image: {
		width: Dimensions.get('window').width/3 - 14,
		height: Dimensions.get('window').width/3 - 14,
		borderRadius: 5,
		backgroundColor: black
	},

	touch: {
		backgroundColor:'#232323',
		margin: 5,
		borderRadius: 5,
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.5,
				shadowRadius: 5
			},
			android: {
				elevation: 3
			},
		}),
	},

	circleIcon: {
		position: 'absolute', 
		bottom: -15, 
		right: -15, 
		padding: 5,
		textShadowColor: 'rgba(0, 0, 0, 0.40)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 20
	},

	checkIcon: {
		position: 'absolute', 
		bottom: -10, 
		right: -10, 
		padding: 5
	},

	shadow : {
		backgroundColor: '#232323',
		position: 'absolute', 
		opacity: 0.4
	}
});

export const takePictureStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: black
	},

	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},

	capture: {
		flex: 0,
		padding: 15,
		borderRadius: 50,
		margin: 20,
		alignSelf: 'center',
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.8,
				shadowRadius: 2  
			},
			android: {
				elevation: 5
			},
		}),
	},

	icon: {
		textShadowColor: 'rgba(0, 0, 0, 0.40)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 10
	}, 
	
	buttonContainer: { 
		justifyContent: 'center', 
		alignItems: 'center',
		position: 'absolute',
		right: 0,
		left: 0,
		bottom: 0 
	},
});

export const schoolScheduleCreationStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: dark_blue
	},

	surface: {
		padding: 8,
		height: 100,
		width: Dimensions.get('window').width * 0.8,
		borderRadius: 4,
		justifyContent: 'center',
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.4,
				shadowRadius: 3
			},
			android: {
				elevation: 3
			},
		}),
	},

	title: {
		fontSize: 20,
		fontFamily: 'Raleway-Regular',
		textAlign: 'center'
	},

	subtitle: {
		fontFamily: 'Raleway-Regular',
		textAlign: 'center',
		paddingTop: 5,
		paddingBottom: 10
	}
});

export const courseStyles = StyleSheet.create({
	container: {
		flex: 1
	},

	content: {
		flex: 1,
		justifyContent: 'space-evenly',
		paddingHorizontal: 20
	},

	instruction: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	text: {
		width: 185,
		paddingRight: 15,
		fontFamily: 'Raleway-Regular',
		color: gray,
		fontSize: 20,
		textAlign: 'right'
	},

	errorCourseCode: {
		fontFamily: 'Raleway-Regular',
		color: red,
		fontSize: 12,
		marginLeft: 45
	},

	textInput: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginRight: 5,
		paddingVertical: 5
	},

	textInputText: {
		fontFamily: 'OpenSans-Regular',
		fontSize: 15,
		color: gray,
		paddingBottom: 0
	},

	textInputBorder: {
		borderBottomColor: '#D4D4D4',
		borderBottomWidth: 1,
		width: '87%',
		marginLeft: 10
	},

	dayOfWeekSection: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		marginLeft: 5
	},

	dayOfWeekBorder: {
		borderBottomColor: 'lightgray',
		borderBottomWidth: 1,
		width: 130,
		marginLeft: 5
	},

	dayOfWeekTitle: {
		color: dark_blue,
		fontFamily: 'Raleway-SemiBold',
		fontSize: 17,
		marginRight: 5
	},

	blueTitle: {
		color: dark_blue,
		fontFamily: 'Raleway-SemiBold',
		fontSize: 17,
		width: 93
	},

	dayOfWeekValues: {
		color: gray,
		height: 40,
		width: '110%',
		marginLeft: -5,
		marginBottom:-8
	},

	dayOfWeekText: {
		padding: 1
	},

	arrow: {
		position: 'absolute',
		right: 0
	},

	time: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 5
	},

	...snackbarStyle
});

export const fixedEventStyles = StyleSheet.create({
	container: {
		flex: 1
	},

	content: {
		flex: 1,
		justifyContent: 'space-evenly',
		paddingHorizontal: 20
	},

	instruction: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	errorTitle: {
		fontFamily: 'Raleway-Regular',
		color: red,
		fontSize: 12,
		marginLeft: 45
	},

	text: {
		width: 220,
		paddingRight: 15,
		fontFamily: 'Raleway-Regular',
		color: gray,
		fontSize: 20,
		textAlign: 'right'
	},

	textInput: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginRight: 5,
		paddingVertical: 5
	},
	
	textInputText: {
		fontFamily: 'OpenSans-Regular',
		fontSize: 15,
		color: gray,
		paddingBottom: 0
	},

	textInputBorder: {
		borderBottomColor: '#D4D4D4',
		borderBottomWidth: 1,
		width: '87%',
		marginLeft: 10
	},

	blueTitle: {
		width: 70,
		color: dark_blue,
		fontFamily: 'Raleway-SemiBold',
		fontSize: 16,
		marginRight: -20
	},

	blueTitleAllDay: {
		color: dark_blue,
		fontFamily: 'Raleway-SemiBold',
		fontSize: 16,
		marginLeft: 11,
		marginRight: 20
	},

	switch: {
		width: 150,
		alignItems: 'flex-start',
		marginLeft: 45
	},

	empty: {
		width:65.8,
		opacity: 0
	},
	
	timeSection: {
		alignItems: 'center',
		marginTop: 10,
		marginRight: 20
	},

	allDay: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 30
	},

	rowTimeSection: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingLeft: 30
	},

	recurrence:{
		width: '105%',
		marginLeft: -5,
		marginBottom: -8,
		color: gray
	},

	recurrenceText: {
		padding: 1
	},

	arrow: {
		position: 'absolute',
		right: 0
	},

	...snackbarStyle
});

export const nonFixedEventStyles = StyleSheet.create({
	container: {
		flex: 1
	},

	content: {
		flex: 1,
		justifyContent:'space-evenly',
		paddingHorizontal: 20,
		marginVertical: 20
	},

	instruction: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	instructionText: {
		width: 190,
		marginLeft: 15,
		fontFamily: 'Raleway-Regular',
		color: gray,
		fontSize: 20
	},

	errorTitle: {
		fontFamily: 'Raleway-Regular',
		color: red,
		fontSize: 12,
		marginLeft: 45,
		paddingBottom: 5
	},

	errorDuration: {
		fontFamily: 'Raleway-Regular',
		color: red,
		fontSize: 12,
		paddingBottom: 5
	},
	textInput: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		marginRight: 5,
		paddingVertical: 5
	},

	textInputText: {
		fontFamily: 'OpenSans-Regular',
		fontSize: 15,
		color: gray,
		paddingBottom: 0
	},

	textInputBorder: {
		borderBottomColor: 'lightgray',
		borderBottomWidth: 1,
		width: '87%',
		marginLeft: 10
	},

	sectionTitle: {
		fontFamily: 'Raleway-Medium',
		fontSize: 19,
		color: '#0A2239',
		marginBottom: 5,
		marginTop: 20
	},

	blueTitle: {
		color: dark_blue,
		fontFamily: 'Raleway-SemiBold',
		fontSize: 17
	},

	optionDate: {
		fontFamily: 'Raleway-Regular',
		fontSize: 15,
		color: gray
	},

	timeSection: {
		marginLeft: 10
	},

	dateRange: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 5
	},

	dateRangeCol: {
		flexDirection: 'column'
	},

	date: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	questionLayout: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 5
	},

	duration: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 5
	},

	timePicker: {
		flexDirection: 'column',
		alignItems: 'center'
	},

	switch:{
		flexDirection:'row',
		alignItems:'center',
		paddingVertical: 5
	},

	optionsText: {
		color: gray,
		fontFamily: 'OpenSans-Regular'
	},

	...snackbarStyle
});

export const unavailableHoursStyles = StyleSheet.create({
	container: {
		flex: 1
	},

	content: {
		flex: 1,
		paddingHorizontal: 20,
		marginTop: getStatusBarHeight()
	},

	instruction: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	hoursView: {
		paddingVertical: 20
	},

	text: {
		width: 200,
		paddingRight: 15,
		fontFamily: 'Raleway-Regular',
		color: gray,
		fontSize: 20,
		textAlign: 'right'
	},

	blueTitle: {
		color: dark_blue,
		fontFamily: 'Raleway-SemiBold',
		fontSize: 18,
		paddingVertical: 10,
		paddingLeft: 10
	},

	rowContent: {
		flexDirection:'row',
		justifyContent:'space-evenly'
	},

	colContent: {
		flexDirection:'column',
		alignItems: 'center'
	},

	row: {
		flexDirection:'row',
		alignItems: 'center'
	},

	rowTime: {
		flexDirection:'row',
		alignItems: 'center',
		width: 155
	},

	type: {
		fontSize: 15,
		fontFamily: 'Raleway-SemiBold',
		paddingRight: 5
	},

	timeWidth: {
		width: 70
	},

	manual: {
		flexDirection: 'row',
		justifyContent: 'center',
		textAlign:'center'
	},

	textManual: {
		fontFamily: 'Raleway-Regular',
		color: gray,
		fontSize: 15
	},

	buttonManual: {
		fontFamily: 'Raleway-SemiBold',
		color: gray,
		fontSize: 15
	},

	...bottomButtonsStyles
});

export const reviewEventStyles = StyleSheet.create({
	container: {
		flex: 1
	},

	scrollView: {
		flex: 1
	},

	content: {
		flex:1,
		paddingHorizontal: 20,
		paddingBottom: 80
	},

	section: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		width: '100%',
		alignItems: 'flex-end'
	},

	sectionTitle: {
		color: dark_blue,
		fontFamily: 'Raleway-SemiBold',
		fontSize: 17,
		marginTop: 20,
		marginBottom: 5
	},

	fab: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: 0
	},

	textNoData: {
		color: gray,
	},

	tooltipText: {
		fontFamily: 'Raleway-Regular'
	},

	tooltipView: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: {
					width: 0,
					height: 3,
				},
				shadowOpacity: 0.29,
				shadowRadius: 4.65,
			},
			android: {
				elevation: 4
			},
		}),
	},
});

export const deleteModalStyles = StyleSheet.create({
	modalContent : {
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignContent: 'center', 
		borderRadius: 5, 
		backgroundColor: white, 
		padding: 15,
		marginHorizontal: '7.5%',
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.4,
				shadowRadius: 3
			},
			android: {
				elevation: 3
			},
		}),
	},

	dialogMainRow: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	dialogRightCol: {
		paddingRight: 5,
		paddingTop: 3,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},

	dialogQuestion: {
		fontFamily: 'Raleway-Medium', 
		color: dark_blue, 
		fontSize: 20, 
	},

	dialogOptions: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},

	dialogCancel: {
		fontFamily: 'Raleway-Regular', 
		color: gray, 
		fontSize: 16, 
	},

	dialogYes: {
		fontFamily: 'Raleway-Bold', 
		color: red, 
		fontSize: 16, 
		marginLeft: 20
	},

	icon: {
		marginBottom: -8,
	}
});

export const eventOverviewStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: 70,
		marginVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 8,
		backgroundColor: white,
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.3,
				shadowRadius: 3  
			},
			android: {
				elevation: 4
			},
		}),
	},

	info: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	category: {
		width: 20,
		height: 70,
		marginLeft: -10,
		marginRight: 10,
		borderBottomLeftRadius: 8, 
		borderTopLeftRadius: 8
	},

	actions: {
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: '100%',
		height: '100%'
	},

	eventTitle: {
		width: 180,
		fontFamily: 'OpenSans-SemiBold',
		fontSize: 15,
		color: gray
	},

	eventInfo: {
		width: 180,
		fontFamily: 'OpenSans-Regular',
		color: gray
	},

	modalDetailView: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center'
	},

	modalDetailsTitle: {
		fontSize: 16,
		textDecorationLine: 'underline',
		fontFamily: 'Raleway-SemiBold',
		paddingVertical: 1,
		color: white
	},
	
	modalDetailsSubtitle: {
		fontSize: 15,
		fontFamily: 'Raleway-SemiBold',
		paddingVertical: 1,
		color: white
	},

	modalDetailsText: {
		fontSize: 15,
		fontFamily: 'OpenSans-Regular',
		paddingVertical: 1,
		color: white
	}
});

export const scheduleSelectionStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: dark_blue,
	},

	content: {
		paddingHorizontal: containerPadding,
		marginTop: 10,
		paddingBottom: 10,
		paddingTop: getStatusBarHeight() + Header.HEIGHT
	},

	description: {
		color: white,
		fontFamily: 'Raleway-Regular',
		marginLeft: 5
	},

	legendRow: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 10,
		flexWrap: 'wrap',
	},

	singleLegend: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 10
	},

	legendColor: {
		borderRadius: 5,
		borderWidth: 2,
		width: 20,
		height: 20,
		marginRight: 5
	},

	legendText: {
		fontFamily: 'Raleway-Regular',
		color: white,
		fontSize: 12
	},

	hoursTextContainer: {
		flexDirection: 'column', 
		justifyContent: 'space-between', 
		position: 'absolute',
		paddingBottom: 10,
		marginTop: -13.5,
		marginLeft: -22.5,
		alignItems: 'center'
	},

	hoursText: {
		paddingVertical: Platform.OS === 'ios' ? 4.6 : 3.4, 
		opacity: 0.5
	}, 

	thickLine: {
		borderBottomColor: lineColor,
		borderBottomWidth: lineThickness
	},

	weekLetters: {
		fontFamily: 'Raleway-Medium', 
		fontSize: 17, 
		color: gray
	}, 

	weekLetterContainer: {
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		padding: 5, 
		paddingHorizontal: 20 
	},

	card: {
		backgroundColor: white, 
		borderRadius: 3, 
		paddingTop: 5, 
		paddingHorizontal: lineViewHorizontalPadding,
		paddingLeft: lineViewHorizontalPadding + lineViewLeftPadding
	},

	title: {
		fontFamily: 'Raleway-Medium', 
		color: white, 
		fontSize: 18, 
		marginBottom: 10
	}, 

	scheduleContainer: {
		paddingTop: 20
	},

	line: {
		borderBottomColor: lineColor,
		borderBottomWidth: lineThickness,
		opacity: 0.3,
		marginTop: lineSpace
	}
});

export const scheduleSelectionDetailsStyle = StyleSheet.create({
	container: {
		width: '100%', 
		height: '100%'
	},

	fab: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: 0
	},
	
	content: {
		padding: containerPaddingDetails,
		paddingBottom: 80
	},

	dayContainer: {
		marginBottom: 15
	},

	dayTitle: {
		fontFamily: 'Raleway-SemiBold',
		fontSize: 20,
		marginVertical: 7,
		color: dark_blue
	},

	eventContainer: {
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.3,
				shadowRadius: 3
			},
			android: {
				elevation: 5
			},
		}),
		backgroundColor: white, 
		borderRadius: 5, 
		marginVertical: 7,
		display: 'flex',
		flexDirection: 'row'
	},

	eventData: {
		padding: 7
	},

	eventTitle: {
		fontFamily: 'OpenSans-Bold',
		color: gray
	},

	eventTime : {
		color: gray
	},

	eventLocation : {
		color: gray
	},

	scheduleEventColor: {
		width: 20,
		borderBottomLeftRadius: 5,
		borderTopLeftRadius: 5
	}
});

const DashboardButton = StyleSheet.create({
	button: {
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.4,
				shadowRadius: 2
			},
			android: {
				elevation: 4
			},
		}),
		backgroundColor: blue, 
		padding: 5, 
		borderRadius: 5, 
		marginBottom: 10
	},

	buttonText: {
		fontSize: 16,
		color: white,
		padding: 4
	}
});

export const dashboardStyles = StyleSheet.create({
	container: {
		flex:1
	},

	content: {
		width: '100%',
		height: '100%',
		paddingTop: getStatusBarHeight()
	},

	calendar: {
		width: '100%',
		height: '100%'
	},

	fab: {
		position: 'absolute',
		right: 15,
		bottom: 15
	},

	closeCalendarView: {
		alignItems: 'center',
	},

	closeCalendarFab: {
		position: 'absolute',
		bottom: 0,
		marginBottom: 15
	},

	rowItem: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	item: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
		width: '95%',
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginVertical: 5,
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.3,
				shadowRadius: 3,    
			},
			android: {
				elevation: 4,
			},
		}),
	},

	itemText: {
		fontFamily: 'OpenSans-Regular',
		fontSize: 16,
		color: gray
	},

	noEvents: {
		justifyContent: 'center'
	},

	noEventsText: {
		fontFamily: 'Raleway-Regular',
		fontSize: 16,
		color: gray,
		paddingTop: 15
	},

	emptyDate: {
		height: 15,
		flex:1,
		paddingTop: 30
	},

	eventsDayTitle: {
		fontFamily: 'Raleway-SemiBold',
		fontSize: 18,
		color: dark_blue,
		marginTop : 20,
		paddingBottom: 10
	},

	tooltipText: {
		fontFamily: 'Raleway-Regular'
	},

	tooltipContainer: {
	},

	tooltipView: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: {
					width: 0,
					height: 3,
				},
				shadowOpacity: 0.29,
				shadowRadius: 4.65,
			},
			android: {
				elevation: 4
			},
		}),
	},

	calendarBack: {
		backgroundColor: white,
		justifyContent: 'center'
	},
	
	calendarBackText: {
		fontFamily: 'Raleway-SemiBold',
		fontSize: 18,
		color: dark_blue,
		textAlign: 'center',
		paddingTop: 10
	},

	createButton: {
		position: 'absolute',
		bottom: 13,
		right: 10,
		borderRadius: 22.5 
	},

	createContent: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 45,
		width: 110,
		backgroundColor: dark_blue,
		borderRadius: 22.5, 
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.3,
				shadowRadius: 3,    
			},
			android: {
				elevation: 4,
			},
		})
	},

	createText: {
		color: white,
		fontFamily: 'Raleway-Bold',
		marginRight: 5
	},

	iconPopover: {
		top:-2.5,
		right: -2.5,
		justifyContent: 'flex-end'
	},

	...DashboardButton,
});

export const modalEventStyles = StyleSheet.create({
	modalContent: {
		justifyContent: 'space-between',
		backgroundColor: white,
		borderRadius: 8,
		marginHorizontal: 20,
		width: '95%',
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.6,
				shadowRadius: 7  
			},
		}),
	},

	closeModal: {
		justifyContent:'flex-end',
		paddingHorizontal: 15,
		paddingTop: 10,
		flex:1
	},

	modalTitle: {
		paddingHorizontal: 20,
		paddingBottom: 5,
		flexWrap: 'wrap',
		fontSize: 18,
		fontFamily: 'OpenSans-SemiBold',
		color: white
	},

	modalInfoView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		marginTop: 5
	},

	modalInfoDate: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},

	modalInfoTime: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap'
	},

	modalInfoTitle: {
		fontFamily: 'Raleway-SemiBold',
		fontSize: 16,
		paddingVertical: 3,
		color: white
	},

	modalInfoText: {
		fontSize: 15,
		fontFamily: 'OpenSans-Regular',
		paddingVertical: 3,
		color: white
	},

	modalDetailsView: {
		paddingHorizontal: 20
	},

	actionsModal: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 5,
		marginBottom: 10
	},

	actionIconModal: {
		margin: 5
	}

});

export const calendarShareButtons = StyleSheet.create({
	sideButton: {
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 8,
		...Platform.select({
			ios: {
				shadowColor: '#000000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.3,
				shadowRadius: 3,    
			},
			android: {
				elevation: 4,
			},
		})
	},

	sideButtonText: {
		fontFamily: 'Raleway-Regular', 
		color: gray
	},

	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10, 
		marginTop: 0
	},

	availabilityButton: {
		marginHorizontal: 10,
		backgroundColor: dark_blue,
		borderRadius: 5,
		padding: 8,
		...Platform.select({
			ios: {
				shadowColor: '#000000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.3,
				shadowRadius: 3,    
			},
			android: {
				elevation: 4,
			},
		})
	},

	availabilityButtonText: {
		fontFamily: 'Raleway-Regular', 
		color: white,
	},

	tooltipText: {
		fontFamily: 'Raleway-Regular'
	},

	tooltipView: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: {
					width: 0,
					height: 3,
				},
				shadowOpacity: 0.29,
				shadowRadius: 4.65,
			},
			android: {
				elevation: 4
			},
		}),
	},
});

export const calendarPermissionStyles = StyleSheet.create({
	...calendarShareButtons,

	content: {
		padding: 10,
		flex: 1, 
		width: '100%',
		height: '100%'
	},

	title: {
		fontFamily: 'Raleway-SemiBold',
		fontSize: 18,
		color: dark_blue,
	},

	emptyContainer: {
		height: Dimensions.get('window').height - 2 * (getStatusBarHeight() + Header.HEIGHT) - 50, 
		justifyContent: 'center', 
		alignItems: 'center'
	},

	emptyTitle: {
		fontFamily: 'Raleway-Bold', 
		color: gray
	},
	
	emptyDescription: {
		fontFamily: 'Raleway-Regular', 
		color: gray
	},

	list: {
		flex: 1
	},

	activityIndicatorContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	},

	buttons: {
		...calendarShareButtons.buttons,
		justifyContent: 'flex-end',
		marginHorizontal: 0
	},
	
	snackbar: {
		width: '100%'
	}
});

export const calendarPermissionItemStyles = StyleSheet.create({
	calendarItem: {
		flexDirection: 'row', 
		alignItems: 'center'
	},

	calendarItemTouch: {
		flexDirection: 'row', 
		alignItems: 'center'
	},

	calendarItemImageContainer: {
		borderRadius: 20,
		marginVertical: 8,
		backgroundColor: 'black',
		...Platform.select({
			ios: {
				shadowColor: '#000000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.4,
				shadowRadius: 3,    
			},
			android: { 
				elevation: 7,
			}
		})
	},

	calendarItemImage: {
		height: 40,
		width: 40, 
		borderRadius: 20
	},

	calendarItemName: {
		fontFamily: 'Raleway-Regular', 
		color: gray, 
		width: '82%', 
		paddingLeft: 10
	},
});

export const compareScheduleStyles = StyleSheet.create({
	content: {
		width: '100%',
		height: '100%',
		flex: 1,
		paddingTop: getStatusBarHeight() + 10
	},

	item: {
		backgroundColor: white,
		borderRadius: 5,
		width: '95%',
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginVertical: 5,
		flexDirection: 'row',
		...Platform.select({
			ios: {
				shadowColor: '#000000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.3,
				shadowRadius: 3,    
			},
			android: {
				elevation: 4,
			},
		}),
	},

	itemText: {
		fontFamily: 'OpenSans-Regular',
		fontSize: 16,
		color: gray
	},

	itemTextAMPM: {
		fontFamily: 'OpenSans-Bold',
		fontSize: 16,
		color: black
	},

	noEvents: {
		justifyContent: 'center'
	},

	noEventsText: {
		fontFamily: 'Raleway-Regular',
		fontSize: 16,
		color: gray,
		paddingTop: 15
	},

	emptyDate: {
		height: 70
	},

	eventsDayTitle: {
		fontFamily: 'Raleway-SemiBold',
		fontSize: 18,
		color: dark_blue,
		marginTop : 20,
	},

	modalTitle: {
		fontFamily: 'Raleway-Medium', 
		color: dark_blue, 
		fontSize: 20, 
	}, 

	modalContent: {
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignContent: 'center', 
		borderRadius: 5, 
		backgroundColor: white, 
		paddingVertical: 15, 
		paddingHorizontal: 20, 
	},

	modalAddText: {
		fontFamily: 'Raleway-Bold', 
		color: dark_blue, 
		fontSize: 16, 
	}, 

	modalCloseText: {
		fontFamily: 'Raleway-Regular', 
		color: gray, 
		fontSize: 16, 
		paddingRight: 25
	}, 

	title: {
		fontFamily: 'Raleway-Bold', 
		fontSize: 16, 
		color: gray
	},

	activityIndicatorContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	},

	flatList: {
		flexWrap: 'wrap', 
		paddingVertical: 10, 
		marginLeft: -7
	},

	emptyContainer: {
		height: 210, 
		justifyContent: 'center', 
		alignItems: 'center'
	},

	emptyTitle: {
		fontFamily: 'Raleway-Bold', 
		color: gray
	},
	
	emptyDescription: {
		fontFamily: 'Raleway-Regular', 
		color: gray,
		textAlign: 'center'
	},

	modalTextInput: {
		width: '100%', 
		backgroundColor: white, 
		marginVertical: 15,
		fontFamily: 'Raleway-Regular', 
		color: gray
	},

	modalButtons: {
		flexDirection: 'row', 
		justifyContent: 'flex-end'
	},

	peopleSelection: {
		padding: 10, 
		paddingHorizontal: 25
	},

	emptyData: {
		padding: 10, 
		paddingTop: 0
	},

	...calendarShareButtons
});

export const settingsStyles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		paddingTop: getStatusBarHeight()
	},

	content: {
		flex: 1,
		justifyContent: 'space-evenly',
		paddingHorizontal: 20
	},

	profileImage: {
		width: 100, 
		height: 100, 
		borderRadius: 50,
		marginTop: 20,
		marginBottom: 10,
	},

	profileIconContainer: {
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.4,
				shadowRadius: 3
			},
		}),
	},

	topProfileContainer: {
		alignItems: 'center',
		margin: 20
	},

	profileDescription: {
		fontFamily: 'Raleway-SemiBold', 
		color: Platform.OS === 'ios' ? black : gray, 
		fontSize: 17,
		textAlign: 'center'
	},

	titleRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 10,
		paddingTop: 20
	},

	title: {
		fontFamily: 'Raleway-SemiBold',
		fontSize: 18,
		color: dark_blue,
		paddingLeft: 10
	},

	button: {
		paddingLeft: 40,
		paddingVertical: 5
	},

	buttonText: {
		fontFamily: 'Raleway-Regular',
		fontSize: 16,
		color: blue
	},

	buttonLogOutText: {
		fontFamily: 'Raleway-Regular',
		fontSize: 16,
		color: red
	},

	version: {
		fontFamily: 'OpenSans-SemiBold',
		textAlign: 'center',
		paddingTop: 20,
		color: gray,
		paddingBottom: 5
	},

	privacyContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 30,
	},

	privacyText: {
		color: gray,
		fontFamily: 'Raleway-Regular',
		fontSize: 13
	},
	
	modalView: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00000080',
		...Platform.select({
			ios: {
				shadowColor: '#000000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.6,
				shadowRadius: 7  
			},
		}),
	},

	languageDialogContent: {
		backgroundColor: white,
		borderRadius: 8,
		justifyContent: 'space-between',
		padding: 10
	},

	languageDialogMainRow: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	languageDialogRightCol: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingVertical: 10,
		paddingRight: 10
	},

	languageDialogQuestion: {
		fontSize: 20,
		fontFamily: 'Raleway-SemiBold',
		marginLeft: 10,
		marginBottom: 10,
		color: gray
	},

	languageDialogOptions: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},

	languageDialogCancel: {
		fontFamily: 'Raleway-SemiBold',
		fontSize:16,
		color: gray
	},

	languageDialogYes: {
		fontFamily: 'Raleway-SemiBold',
		fontSize: 16,
		color: red,
		marginLeft: 20
	},
	
	modalContent : {
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignContent: 'center', 
		borderRadius: 5, 
		backgroundColor: white, 
		padding: 15
	},

});

export const cleanReducersStyles = StyleSheet.create({
	content: {
		width: '100%',
		height: '100%',
		padding: 10
	},

	...DashboardButton
});

export const schoolInformationStyles = StyleSheet.create({
	container: {
		flex: 1
	},

	content: {
		flex: 1,
		paddingHorizontal: 20,
		marginVertical: -15,
		justifyContent: 'space-evenly'
	},
	
	instruction: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	text: {
		width: 200,
		paddingRight: 15,
		fontFamily: 'Raleway-Regular',
		color: gray,
		fontSize: 20,
		textAlign: 'right'
	},

	school: {
		marginVertical: 10
	},
	
	subHeader: {
		fontFamily: 'Raleway-Medium',
		color: dark_blue,
		fontSize: 18,
		marginBottom: 10
	},
	
	radioButton: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	
	smallText: {
		fontFamily: 'Raleway-Regular',
		marginLeft: 5
	},

	otherInput: {
		borderBottomColor: '#D4D4D4',
		borderBottomWidth: 1,
		paddingBottom: -5,
		width: '90%',
		fontFamily: 'Raleway-Regular',
		height: 40
	},

	duration: {
		marginTop: 20
	},

	date: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	blueTitle: {
		width: 70,
		color: dark_blue,
		fontFamily: 'Raleway-Regular',
		fontSize: 16,
		marginLeft: 5
	},

	error: {
		fontFamily: 'Raleway-Regular',
		color: red,
		marginTop: 10,
		marginLeft: 10
	}

});

export const scheduleCreateStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: dark_blue
	},

	surface: {
		padding: 8,
		height: 110,
		width: Dimensions.get('window').width * 0.8,
		borderRadius: 4,
		justifyContent: 'center',
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.4,
				shadowRadius: 3
			},
			android: {
				elevation: 3
			},
		}),
	},

	title: {
		fontSize: 20,
		fontFamily: 'Raleway-Regular',
		textAlign: 'center'
	},

	subtitle: {
		fontFamily: 'Raleway-Regular',
		textAlign: 'center',
		paddingTop: 5,
		paddingBottom: 10
	},

	progressBar: {
		alignSelf:'center'
	}
});

export const eventsColorPickerStyles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	modalContent: {
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignContent: 'center', 
		borderRadius: 5, 
		backgroundColor: white, 
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.4,
				shadowRadius: 3
			},
			android: {
				elevation: 3
			},
		}),
	},

	modalTitle: {
		fontFamily: 'Raleway-Medium', 
		color: dark_blue, 
		padding: 15, 
		fontSize: 20, 
		paddingLeft: 20
	}, 

	viewPager: {
		height: 250,
		flexDirection: 'column-reverse'
	}, 

	button: {
		justifyContent: 'flex-end', 
		width: '100%', 
		flexDirection: 'row'
	}, 

	buttonText: {
		fontFamily: 'Raleway-Bold', 
		color: dark_blue, 
		fontSize: 16, 
		padding: 15, 
		paddingRight: 20,
		paddingTop: 0
	}, 

	circleColor: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		width: 50,
		margin: 5,
		height: 50,
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.3,
				shadowRadius: 3,
			},
			android: {
				elevation: 4,
			},
		}),
	}, 

	dimmedCircle: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00000040',
		borderRadius: 25,
		width: 50,
		height: 50,
	},

	circleContainer: {
		flexDirection: 'row', 
		flexWrap: 'wrap', 
		margin: 5, 
		width: Dimensions.get('window').width > 240 ? 240 : Dimensions.get('window').width
	},

	colorsSliderContainer: {
		justifyContent: 'center', 
		alignItems: 'center'
	}, 

	pager: {
		backgroundColor: 'white',
		height: 48
	}, 

	pagerText: {
		color: gray, 
		fontFamily: 'Raleway-Medium'
	}, 

	pagerSelectedBorder: {
		height: 3,
		backgroundColor: dark_blue
	}, 

	pagerSelectedText: {
		color: dark_blue, 
		fontFamily: 'Raleway-Bold'
	}
});

export const languageSwitcherStyles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	modalContent : {
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignContent: 'center', 
		borderRadius: 5, 
		backgroundColor: white, 
		padding: 15,
		marginHorizontal: '7.5%',
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.4,
				shadowRadius: 3
			},
			android: {
				elevation: 3
			},
		}),
	},

	languageDialogMainRow: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	languageDialogRightCol: {
		paddingRight: 5,
		paddingVertical: 3,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},

	languageDialogQuestion: {
		fontFamily: 'Raleway-Medium', 
		color: dark_blue, 
		fontSize: 20, 
	},

	languageDialogOptions: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},

	languageDialogCancel: {
		fontFamily: 'Raleway-Regular', 
		color: gray, 
		fontSize: 16, 
	},

	languageDialogYes: {
		fontFamily: 'Raleway-Bold', 
		color: dark_blue, 
		fontSize: 16, 
		marginLeft: 20
	}
});

export const importCalendarStyles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	modalContent : {
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignContent: 'center', 
		borderRadius: 5, 
		backgroundColor: white, 
		padding: 15,
		...Platform.select({
			ios: {
				shadowColor: black,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.4,
				shadowRadius: 3
			},
			android: {
				elevation: 3
			},
		}),
	},

	itemView: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	itemText: {
		fontFamily: 'Raleway-Regular',
		color: gray
	},

	title: {
		fontFamily: 'Raleway-Medium', 
		color: dark_blue, 
		fontSize: 20, 
	},

	buttons: {
		justifyContent: 'flex-end', 
		width: '100%', 
		flexDirection: 'row'
	}, 

	buttonText: {
		fontFamily: 'Raleway-Bold', 
		color: dark_blue, 
		fontSize: 16, 
		marginLeft: 20
	}, 

	buttonCancelText: {
		fontFamily: 'Raleway-Regular', 
		color: gray, 
		fontSize: 16, 
	}, 

	flatlist: {
		paddingVertical: 5,
		marginVertical: 5,
		marginLeft: -7,
		maxHeight: 180,
	},
	
	description: {
		fontFamily: 'Raleway-Regular', 
		color: gray, 
		marginTop: 5
	},

	activityIndicatorContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 180,
		paddingVertical: 5,
		marginVertical: 5,
	},

	emptyContainer: {
		height: 180, 
		justifyContent: 'center', 
		alignItems: 'center'
	},

	emptyTitle: {
		fontFamily: 'Raleway-Bold', 
		color: gray
	},

	emptyDescription: {
		fontFamily: 'Raleway-Regular', 
		color: gray
	},

	progressModalDescription: {
		fontFamily: 'OpenSans-Regular', 
		color: gray, 
		paddingVertical: 10
	},

	progressModalFinished: {
		fontFamily: 'Raleway-Regular', 
		color: gray, 
		paddingTop: 10
	}
});