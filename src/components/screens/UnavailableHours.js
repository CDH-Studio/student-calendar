import React from 'react';
import { Platform, Dimensions, ScrollView, StatusBar, Text, View, Switch, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header } from 'react-navigation';
import updateNavigation from '../NavigationHelper';
import { TutorialUnavailableHours, TutorialUnavailableFixed, TutorialReviewEvent, DashboardUnavailableHours, DashboardUnavailableFixed } from '../../constants/screenNames';
import { connect } from 'react-redux';
import { unavailableHoursStyles as styles, white, blue, gray, lightOrange, orange, statusBlueColor } from '../../styles';
import TutorialStatus, { HEIGHT, onScroll } from '../TutorialStatus';

const viewHeight = 688.3809814453125;

/**
 * Permits the user to input the hours they are not available or don't want to have anything booked
 */
class UnavailableHours extends React.Component {

	static navigationOptions = ({navigation}) => ({
		title: navigation.state.routeName === TutorialUnavailableHours || navigation.state.routeName === DashboardUnavailableHours ? 'Add Unavailable Hours' : 'Edit Unavailable Hours',
		headerTintColor: white,
		headerTitleStyle: {fontFamily: 'Raleway-Regular'},
		headerTransparent: true,
		headerStyle: {
			backgroundColor: blue,
			marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
		}
	});

	constructor(props) {
		super(props);

		let containerHeightTemp = Dimensions.get('window').height - Header.HEIGHT;
		let containerHeight = null;
		
		if (viewHeight < containerHeightTemp) {
			containerHeight = containerHeightTemp;
		}

		this.state = { 
			containerHeight,
			eventID: Date.now(),
			showTutShadow: true,

			initialAmPm: this.getAmPm(),

			sleepWeek: false,
			startSleepWeek: new Date().toLocaleTimeString(),
			endSleepWeek: new Date().toLocaleTimeString(),
			disabledEndSleepWeek: true,
			endSleepWeekValidated: true,
			sleepWeekEnd: false,
			startSleepWeekEnd: new Date().toLocaleTimeString(),
			endSleepWeekEnd: new Date().toLocaleTimeString(),
			disabledEndSleepWeekEnd: true,
			endSleepWeekEndValidated: true,

			commutingWeek: false,
			startCommutingWeek: new Date().toLocaleTimeString(),
			endCommutingWeek: new Date().toLocaleTimeString(),
			disabledEndCommutingWeek: true,
			endCommutingWeekValidated: true,
			commutingWeekEnd: false,
			startCommutingWeekEnd: new Date().toLocaleTimeString(),
			endCommutingWeekEnd: new Date().toLocaleTimeString(),
			disabledEndCommutingWeekEnd: true,
			endCommutingWeekEndValidated: true,

			eatingWeek: false,
			startEatingWeek: new Date().toLocaleTimeString(),
			endEatingWeek: new Date().toLocaleTimeString(),
			disabledEndEatingWeek: true,
			endEatingWeekValidated: true,
			eatingWeekEnd: false,
			startEatingWeekEnd: new Date().toLocaleTimeString(),
			endEatingWeekEnd: new Date().toLocaleTimeString(),
			disabledEndEatingWeekEnd: true,
			endEatingWeekEndValidated: true,

			otherWeek: false,
			startOtherWeek: new Date().toLocaleTimeString(),
			endOtherWeek: new Date().toLocaleTimeString(),
			disabledEndOtherWeek: true,
			endOtherWeekValidated: true,
			otherWeekEnd: false,
			startOtherWeekEnd: new Date().toLocaleTimeString(),
			endOtherWeekEnd: new Date().toLocaleTimeString(),
			disabledEndOtherWeekEnd: true,
			endOtherWeekEndValidated: true,
		};
		
		updateNavigation(this.constructor.name, props.navigation.state.routeName);
	}

	/**
	 * Returns the time formatted with the AM/PM notation
	 * 
	 * @param {String} time The time expressed in the 24 hours format
	 */
	getTwelveHourTime(time) {
		let temp = time.split(' ');
		let amOrPm = temp[1];

		let info = time.split(':');
		time = new Date();

		time.setHours(parseInt(info[0]));
		time.setMinutes(parseInt(info[1]));

		let currentHour = time.getHours();
		let currentMinute = time.getMinutes();

		if (currentHour > 12) {
			currentHour = currentHour % 12;
			time.setHours(currentHour);
		}

		if (currentMinute < 10) {
			currentMinute = '0' + currentMinute;
		}

		return time.getHours() + ':' + currentMinute + ' ' + amOrPm;
	}

	/**
	 * Gets the current time AM or PM
	 */
	getAmPm() {
		let hours = new Date().getHours();
		return (hours >= 12) ? ' PM' : ' AM';
	}

	/**
	 * Enables endTime and sets it to the startTime
	 */
	enableEndTime(disabledEndTime, startTime, endTime) {
		if (this.state[disabledEndTime] === true) {
			this.setState({[endTime]: this.state[startTime]});
			return false;
		} else {
			//do nothing
		}
	}

	/**
	 * Analyzes the input times and make sure the ranges make sense
	 * 
	 * @param {String} startTime The start time received from the time dialog
	 * @param {String} endTime The end time received from the time dialog
	 */
	beforeStartTime = (startTime, endTime) => {
		let startCheck = true;

		// Check if an end time has been specified, if not, use the state end time
		if (endTime === undefined) {
			endTime = this.state[endTime];
		}

		// Check if an start time has been specified, if not, use the state start time
		// and specify that the startTime wasn't given by changing the variable startCheck
		if (startTime === undefined) {
			startTime = this.state[startTime];
			startCheck = false;
		}

		// Fix the undefined bug if you haven't set the end time (since the seconds are included in the time)
		if (endTime.split(':').length === 3) {
			let endTimeSplit = endTime.split(':');
			let endTimeSplitSpace = endTime.split(' ');

			endTime = endTimeSplit[0] + ':' + endTimeSplit[1] + ' ' + endTimeSplitSpace[1];
		}

		// Analyzes the start time, and converts it to a date
		let start = this.getDateObject(startTime);

		// End Time
		let end = this.getDateObject(endTime);

		// Comparing start and end time
		if (startCheck) {
			if (start > end) {
				return startTime;
			} else {
				return endTime;
			}
		} else {
			if (end < start) {
				return endTime;
			} else {
				return startTime;
			}
		}
	}

	/**
	 * Converts a string formatted like ##:## PM or AM to a JavaScript object
	 * 
	 * @param {String} time The string representing the time
	 * 
	 * @returns {Date} The JavaScript date object equivalent of the string
	 */
	getDateObject = (time) => {
		// Gets the AM/PM
		let tempTime = time.split(' ');
		let isPm = tempTime[1].trim().toLowerCase() === 'pm';

		// Gets the hours and minutes
		let timeContent = tempTime[0].split(':');
		let hours = parseInt(timeContent[0]);
		let minutes = parseInt(timeContent[1]);

		// Adds 12 hours if its PM and not equal to 12
		if (isPm && hours !== 12) {
			hours += 12;
		}

		// Creates a JavaScript object
		let date = new Date();
		date.setHours(hours, minutes);

		return date;
	}

	/**
	 * To go to the appropriate Fixed Event screen according to the current route
	 */
	manualImport() {
		if (this.props.navigation.state.routeName === TutorialUnavailableHours) {
			this.props.navigation.navigate(TutorialUnavailableFixed, {update:false});
		} else {
			this.props.navigation.navigate(DashboardUnavailableFixed, {update:false});
		}
	}


	/**
	 * To go to the next screen without entering any information
	 */
	skip = () => {
		this.props.navigation.navigate(TutorialReviewEvent);
	}
	
	render() {
		const { containerHeight, showTutShadow } = this.state;
		let tutorialStatus;
		let paddingBottomContainer = HEIGHT;

		/**
		 * In order to show components based on current route
		 */
		if (this.props.navigation.state.routeName === TutorialUnavailableHours) {
			tutorialStatus = <TutorialStatus active={5}
				color={blue}
				backgroundColor={'#ffffff'}
				skip={this.skip}
				showTutShadow={showTutShadow} />;
		} else {
			tutorialStatus = null;
			paddingBottomContainer = null;
		}

		return(
			<View style={styles.container}>
				<StatusBar translucent={true}
					backgroundColor={statusBlueColor} />

				<ScrollView style={styles.scrollView}>
					<View style={[styles.content, {height: containerHeight, paddingBottom: paddingBottomContainer + 20}]}>
						<View style={styles.instruction}>
							<Text style={styles.text}>Add the hours for which you're not available or you don't want anything to be booked.</Text>
							<MaterialCommunityIcons name="block-helper"
								size={130}
								color={blue}/>
						</View>

						<View>
							<View style={styles.row}>
								<MaterialCommunityIcons name="sleep"
									size={30}
									color={blue}/>

								<Text style={styles.blueTitle}>Sleeping Hours</Text>
							</View>
							<View>
								<View style={styles.rowContent}>
									<View style={styles.colContent}>
										<View style={styles.row}>
											<Text style={styles.type}>Week</Text>

											<Switch trackColor={{false: 'lightgray', true: lightOrange}}
												ios_backgroundColor={'lightgray'}
												thumbColor={this.state.sleepWeek ? orange : 'darkgray'}
												onValueChange={(sleepWeek) => this.setState({sleepWeek: sleepWeek})}
												value={this.state.sleepWeek} />
										</View>
										{this.state.sleepWeek ?
											<View style={styles.row}>
												<DatePicker showIcon={false} 
													date={this.state.startSleepWeek} 
													mode="time" 
													style={{width: 70}}
													customStyles={{
														dateInput:{borderWidth: 0}, 
														dateText:{
															fontFamily: 'OpenSans-Regular',
															color: gray
														}, 
														placeholderText:{color: !this.state.endSleepWeekValidated ? '#ff0000' : gray}
													}}
													placeholder={this.getTwelveHourTime(this.state.startSleepWeek.split(':')[0] + ':' + this.state.startSleepWeek.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel" 
													is24Hour={false}
													onDateChange={(startSleepWeek) => {
														this.setState({
															endSleepWeekValidated: true, 
															startSleepWeek, 
															endSleepWeek: this.beforeStartTime(this.getTwelveHourTime(startSleepWeek), this.state.endSleepWeek)
														});
														this.setState({disabledEndSleepWeek: false});
													}} />

												<Text> - </Text>

												<DatePicker showIcon={false} 
													date={this.state.endSleepWeek} 
													mode="time" 
													style={{width: 70}}
													disabled= {this.state.disabledEndSleepWeek}
													customStyles={{
														disabled:{backgroundColor: 'transparent'}, 
														dateInput:{borderWidth: 0}, 
														dateText:{fontFamily: 'OpenSans-Regular',
															color: !this.state.endSleepWeekValidated ? '#ff0000' : gray,
															textDecorationLine: this.state.disabledEndSleepWeek ? 'line-through' : 'none'}, 
													}}
													placeholder={this.getTwelveHourTime(this.state.endSleepWeek.split(':')[0] + ':' + this.state.endSleepWeek.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel"
													is24Hour={false}
													onDateChange={(endSleepWeek) => this.setState({endSleepWeek, startSleepWeek: this.beforeStartTime(this.state.startSleepWeek, this.getTwelveHourTime(endSleepWeek))})} />
											</View> : null}
									</View>

									<View style={styles.colContent}>
										<View style={styles.row}>
											<Text style={styles.type}>Week-End</Text>

											<Switch trackColor={{false: 'lightgray', true: lightOrange}}
												ios_backgroundColor={'lightgray'}
												thumbColor={this.state.sleepWeekEnd ? orange : 'darkgray'}
												onValueChange={(sleepWeekEnd) => this.setState({sleepWeekEnd: sleepWeekEnd})}
												value={this.state.sleepWeekEnd} />
										</View>

										{this.state.sleepWeekEnd ?
											<View style={styles.row}>
												<DatePicker showIcon={false} 
													date={this.state.startSleepWeekEnd} 
													mode="time" 
													style={{width: 70}}
													customStyles={{
														dateInput:{borderWidth: 0}, 
														dateText:{
															fontFamily: 'OpenSans-Regular',
															color: gray
														}, 
														placeholderText:{color: !this.state.endSleepWeekEndValidated ? '#ff0000' : gray}
													}}
													placeholder={this.getTwelveHourTime(this.state.startSleepWeekEnd.split(':')[0] + ':' + this.state.startSleepWeekEnd.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel" 
													is24Hour={false}
													onDateChange={(startSleepWeekEnd) => {
														this.setState({endSleepWeekEndValidated: true, startSleepWeekEnd, endSleepWeekEnd: this.beforeStartTime(this.getTwelveHourTime(startSleepWeekEnd), this.state.endSleepWeekEnd)});
														this.setState({disabledEndSleepWeekEnd: false});
													}} />

												<Text> - </Text>
													
												<DatePicker showIcon={false} 
													date={this.state.endSleepWeekEnd} 
													mode="time" 
													style={{width: 70}}
													disabled= {this.state.disabledEndSleepWeekEnd}
													customStyles={{
														disabled:{backgroundColor: 'transparent'}, 
														dateInput:{borderWidth: 0}, 
														dateText:{fontFamily: 'OpenSans-Regular'}, 
														placeholderText:{
															color: !this.state.endSleepWeekEndValidated ? '#ff0000' : gray,
															textDecorationLine: this.state.disabledEndSleepWeekEnd ? 'line-through' : 'none'}
													}}
													placeholder={this.getTwelveHourTime(this.state.endSleepWeekEnd.split(':')[0] + ':' + this.state.endSleepWeekEnd.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel"
													is24Hour={false}
													onDateChange={(endSleepWeekEnd) => this.setState({endSleepWeekEnd, startSleepWeekEnd: this.beforeStartTime(this.state.startSleepWeekEnd, this.getTwelveHourTime(endSleepWeekEnd))})} />
											</View> : null}
										
									</View>
								</View>
							</View>
						</View>

						<View>
							<View style={styles.row}>
								<MaterialCommunityIcons name="train-car"
									size={30}
									color={blue}/>

								<Text style={styles.blueTitle}>Commuting Hours</Text>
							</View>

							<View>
								<View style={styles.rowContent}>
									<View style={styles.colContent}>
										<View style={styles.row}>
											<Text style={styles.type}>Week</Text>

											<Switch trackColor={{false: 'lightgray', true: lightOrange}}
												ios_backgroundColor={'lightgray'}
												thumbColor={this.state.commutingWeek ? orange : 'darkgray'}
												onValueChange={(commutingWeek) => this.setState({commutingWeek: commutingWeek})}
												value={this.state.commutingWeek} />
										</View>

										{this.state.commutingWeek ?
											<View style={styles.row}>
												<DatePicker showIcon={false} 
													date={this.state.startCommutingWeek} 
													mode="time" 
													style={{width: 70}}
													customStyles={{
														dateInput:{borderWidth: 0}, 
														dateText:{
															fontFamily: 'OpenSans-Regular',
															color: gray
														}, 
														placeholderText:{color: !this.state.endCommutingWeekValidated ? '#ff0000' : gray}
													}}
													placeholder={this.getTwelveHourTime(this.state.startCommutingWeek.split(':')[0] + ':' + this.state.startCommutingWeek.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel" 
													is24Hour={false}
													onDateChange={(startCommutingWeek) => {
														this.setState({endCommutingWeekValidated: true, startCommutingWeek, endCommutingWeek: this.beforeStartTime(this.getTwelveHourTime(startCommutingWeek), this.state.endCommutingWeek)});
														this.setState({disabledEndCommutingWeek: false});
													}} />

												<Text> - </Text>
													
												<DatePicker showIcon={false} 
													date={this.state.endCommutingWeek} 
													mode="time" 
													style={{width: 70}}
													disabled= {this.state.disabledEndCommutingWeek}
													customStyles={{
														disabled:{backgroundColor: 'transparent'}, 
														dateInput:{borderWidth: 0}, 
														dateText:{fontFamily: 'OpenSans-Regular'}, 
														placeholderText:{
															color: !this.state.endCommutingWeekValidated ? '#ff0000' : gray,
															textDecorationLine: this.state.disabledEndCommutingWeek ? 'line-through' : 'none'}
													}}
													placeholder={this.getTwelveHourTime(this.state.endCommutingWeek.split(':')[0] + ':' + this.state.endCommutingWeek.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel"
													is24Hour={false}
													onDateChange={(endCommutingWeek) => this.setState({endCommutingWeek, startCommutingWeek: this.beforeStartTime(this.state.startCommutingWeek, this.getTwelveHourTime(endCommutingWeek))})} />
											</View> : null}
									
									</View>
									<View style={styles.colContent}>
										<View style={styles.row}>
											<Text style={styles.type}>Week-End</Text>

											<Switch trackColor={{false: 'lightgray', true: lightOrange}}
												ios_backgroundColor={'lightgray'}
												thumbColor={this.state.commutingWeekEnd ? orange : 'darkgray'}
												onValueChange={(commutingWeekEnd) => this.setState({commutingWeekEnd: commutingWeekEnd})}
												value={this.state.commutingWeekEnd} />
										</View>

										{this.state.commutingWeekEnd ?
											<View style={styles.row}>
												<DatePicker showIcon={false} 
													date={this.state.startCommutingWeekEnd} 
													mode="time" 
													style={{width: 70}}
													customStyles={{
														dateInput:{borderWidth: 0}, 
														dateText:{
															fontFamily: 'OpenSans-Regular',
															color: gray
														}, 
														placeholderText:{color: !this.state.endCommutingWeekEndValidated ? '#ff0000' : gray}
													}}
													placeholder={this.getTwelveHourTime(this.state.startCommutingWeekEnd.split(':')[0] + ':' + this.state.startCommutingWeekEnd.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel" 
													is24Hour={false}
													onDateChange={(startCommutingWeekEnd) => {
														this.setState({endCommutingWeekEndValidated: true, startCommutingWeekEnd, endCommutingWeekEnd: this.beforeStartTime(this.getTwelveHourTime(startCommutingWeekEnd), this.state.endCommutingWeekEnd)});
														this.setState({disabledEndCommutingWeekEnd: false});
													}} />

												<Text> - </Text>
													
												<DatePicker showIcon={false} 
													date={this.state.endCommutingWeekEnd} 
													mode="time" 
													style={{width: 70}}
													disabled= {this.state.disabledEndCommutingWeekEnd}
													customStyles={{
														disabled:{backgroundColor: 'transparent'}, 
														dateInput:{borderWidth: 0}, 
														dateText:{fontFamily: 'OpenSans-Regular'}, 
														placeholderText:{
															color: !this.state.endCommutingWeekEndValidated ? '#ff0000' : gray,
															textDecorationLine: this.state.disabledEndCommutingWeekEnd ? 'line-through' : 'none'}
													}}
													placeholder={this.getTwelveHourTime(this.state.endCommutingWeekEnd.split(':')[0] + ':' + this.state.endCommutingWeekEnd.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel"
													is24Hour={false}
													onDateChange={(endCommutingWeekEnd) => this.setState({endCommutingWeekEnd, startCommutingWeekEnd: this.beforeStartTime(this.state.startCommutingWeekEnd, this.getTwelveHourTime(endCommutingWeekEnd))})} />
											</View> : null}
									</View>
								</View>
							</View>
						</View>

						<View>
							<View style={styles.row}>
								<MaterialCommunityIcons name="food"
									size={30}
									color={blue}/>

								<Text style={styles.blueTitle}>Eating Hours</Text>
							</View>

							<View>
								<View style={styles.rowContent}>
									<View style={styles.colContent}>
										<View style={styles.row}>
											<Text style={styles.type}>Week</Text>

											<Switch trackColor={{false: 'lightgray', true: lightOrange}}
												ios_backgroundColor={'lightgray'}
												thumbColor={this.state.eatingWeek ? orange : 'darkgray'}
												onValueChange={(eatingWeek) => this.setState({eatingWeek: eatingWeek})}
												value={this.state.eatingWeek} />
										</View>

										{this.state.eatingWeek ?
											<View style={styles.row}>
												<DatePicker showIcon={false} 
													date={this.state.startEatingWeek} 
													mode="time"
													style={{width: 70}} 
													customStyles={{
														dateInput:{borderWidth: 0}, 
														dateText:{
															fontFamily: 'OpenSans-Regular',
															color: gray
														}, 
														placeholderText:{color: !this.state.endEatingWeekValidated ? '#ff0000' : gray}
													}}
													placeholder={this.getTwelveHourTime(this.state.startEatingWeek.split(':')[0] + ':' + this.state.startEatingWeek.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel" 
													is24Hour={false}
													onDateChange={(startEatingWeek) => {
														this.setState({endEatingWeekValidated: true, startEatingWeek, endEatingWeek: this.beforeStartTime(this.getTwelveHourTime(startEatingWeek), this.state.endEatingWeek)});
														this.setState({disabledEndEatingWeek: false});
													}} />

												<Text> - </Text>
													
												<DatePicker showIcon={false} 
													date={this.state.endEatingWeek} 
													mode="time" 
													style={{width: 70}}
													disabled= {this.state.disabledEndEatingWeek}
													customStyles={{
														disabled:{backgroundColor: 'transparent'}, 
														dateInput:{borderWidth: 0}, 
														dateText:{fontFamily: 'OpenSans-Regular'}, 
														placeholderText:{
															color: !this.state.endEatingWeekValidated ? '#ff0000' : gray,
															textDecorationLine: this.state.disabledEndEatingWeek ? 'line-through' : 'none'}
													}}
													placeholder={this.getTwelveHourTime(this.state.endEatingWeek.split(':')[0] + ':' + this.state.endEatingWeek.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel"
													is24Hour={false}
													onDateChange={(endEatingWeek) => this.setState({endEatingWeek, startEatingWeek: this.beforeStartTime(this.state.startEatingWeek, this.getTwelveHourTime(endEatingWeek))})} />
											</View> : null}
									
									</View>
									<View style={styles.colContent}>
										<View style={styles.row}>
											<Text style={styles.type}>Week-End</Text>

											<Switch trackColor={{false: 'lightgray', true: lightOrange}}
												ios_backgroundColor={'lightgray'}
												thumbColor={this.state.eatingWeekEnd ? orange : 'darkgray'}
												onValueChange={(eatingWeekEnd) => this.setState({eatingWeekEnd: eatingWeekEnd})}
												value={this.state.eatingWeekEnd} />
										</View>

										{this.state.eatingWeekEnd ?
											<View style={styles.row}>
												<DatePicker showIcon={false} 
													date={this.state.startEatingWeekEnd} 
													mode="time" 
													style={{width: 70}}
													customStyles={{
														dateInput:{borderWidth: 0}, 
														dateText:{
															fontFamily: 'OpenSans-Regular',
															color: gray
														}, 
														placeholderText:{color: !this.state.endEatingWeekEndValidated ? '#ff0000' : gray}
													}}
													placeholder={this.getTwelveHourTime(this.state.startEatingWeekEnd.split(':')[0] + ':' + this.state.startEatingWeekEnd.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel" 
													is24Hour={false}
													onDateChange={(startEatingWeekEnd) => {
														this.setState({endEatingWeekEndValidated: true, startEatingWeekEnd, endEatingWeekEnd: this.beforeStartTime(this.getTwelveHourTime(startEatingWeekEnd), this.state.endEatingWeekEnd)});
														this.setState({disabledEndEatingWeekEnd: false});
													}} />

												<Text> - </Text>
													
												<DatePicker showIcon={false} 
													date={this.state.endEatingWeekEnd} 
													mode="time" 
													style={{width: 70}}
													disabled= {this.state.disabledEndEatingWeekEnd}
													customStyles={{
														disabled:{backgroundColor: 'transparent'}, 
														dateInput:{borderWidth: 0}, 
														dateText:{fontFamily: 'OpenSans-Regular'}, 
														placeholderText:{
															color: !this.state.endEatingWeekEndValidated ? '#ff0000' : gray,
															textDecorationLine: this.state.disabledEndEatingWeekEnd ? 'line-through' : 'none'}
													}}
													placeholder={this.getTwelveHourTime(this.state.endEatingWeekEnd.split(':')[0] + ':' + this.state.endEatingWeekEnd.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel"
													is24Hour={false}
													onDateChange={(endEatingWeekEnd) => this.setState({endEatingWeekEnd, startEatingWeekEnd: this.beforeStartTime(this.state.startEatingWeekEnd, this.getTwelveHourTime(endEatingWeekEnd))})} />
											</View> : null}
									</View>
								</View>
							</View>
						</View>

						<View>
							<View style={styles.row}>
								<MaterialCommunityIcons name="timelapse"
									size={30}
									color={blue}/>

								<Text style={styles.blueTitle}>Other Unavailable Hours</Text>
							</View>

							<View>
								<View style={styles.rowContent}>
									<View style={styles.colContent}>
										<View style={styles.row}>
											<Text style={styles.type}>Week</Text>

											<Switch trackColor={{false: 'lightgray', true: lightOrange}}
												ios_backgroundColor={'lightgray'}
												thumbColor={this.state.otherWeek ? orange : 'darkgray'}
												onValueChange={(otherWeek) => this.setState({otherWeek: otherWeek})}
												value={this.state.otherWeek} />
										</View>

										{this.state.otherWeek ?
											<View style={styles.row}>
												<DatePicker showIcon={false} 
													date={this.state.startOtherWeek} 
													mode="time"
													style={{width: 70}} 
													customStyles={{
														dateInput:{borderWidth: 0}, 
														dateText:{
															fontFamily: 'OpenSans-Regular',
															color: gray
														}, 
														placeholderText:{color: !this.state.endOtherWeekValidated ? '#ff0000' : gray}
													}}
													placeholder={this.getTwelveHourTime(this.state.startOtherWeek.split(':')[0] + ':' + this.state.startOtherWeek.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel" 
													is24Hour={false}
													onDateChange={(startOtherWeek) => {
														this.setState({endOtherWeekValidated: true, startOtherWeek, endOtherWeek: this.beforeStartTime(this.getTwelveHourTime(startOtherWeek), this.state.endOtherWeek)});
														this.setState({disabledEndOtherWeek: false});
													}} />

												<Text> - </Text>
													
												<DatePicker showIcon={false} 
													date={this.state.endOtherWeek} 
													mode="time" 
													style={{width: 70}}
													disabled={this.state.disabledEndOtherWeek}
													customStyles={{
														disabled:{backgroundColor: 'transparent'}, 
														dateInput:{borderWidth: 0}, 
														dateText:{fontFamily: 'OpenSans-Regular'}, 
														placeholderText:{
															color: !this.state.endOtherWeekValidated ? '#ff0000' : gray,
															textDecorationLine: this.state.disabledEndOtherWeek ? 'line-through' : 'none'}
													}}
													placeholder={this.getTwelveHourTime(this.state.endOtherWeek.split(':')[0] + ':' + this.state.endOtherWeek.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel"
													is24Hour={false}
													onDateChange={(endOtherWeek) => this.setState({endOtherWeek, startOtherWeek: this.beforeStartTime(this.state.startOtherWeek, this.getTwelveHourTime(endOtherWeek))})} />
											</View> : null}
									
									</View>
									<View style={styles.colContent}>
										<View style={styles.row}>
											<Text style={styles.type}>Week-End</Text>

											<Switch trackColor={{false: 'lightgray', true: lightOrange}}
												ios_backgroundColor={'lightgray'}
												thumbColor={this.state.otherWeekEnd ? orange : 'darkgray'}
												onValueChange={(otherWeekEnd) => this.setState({otherWeekEnd: otherWeekEnd})}
												value={this.state.otherWeekEnd} />
										</View>

										{this.state.otherWeekEnd ?
											<View style={styles.row}>
												<DatePicker showIcon={false} 
													date={this.state.startOtherWeekEnd} 
													mode="time" 
													style={{width: 70}}
													customStyles={{
														dateInput:{borderWidth: 0}, 
														dateText:{
															fontFamily: 'OpenSans-Regular',
															color: gray
														}, 
														placeholderText:{color: !this.state.endOtherWeekEndValidated ? '#ff0000' : gray}
													}}
													placeholder={this.getTwelveHourTime(this.state.startOtherWeekEnd.split(':')[0] + ':' + this.state.startOtherWeekEnd.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel" 
													is24Hour={false}
													onDateChange={(startOtherWeekEnd) => {
														this.setState({endOtherWeekEndValidated: true, startOtherWeekEnd, endOtherWeekEnd: this.beforeStartTime(this.getTwelveHourTime(startOtherWeekEnd), this.state.endOtherWeekEnd)});
														this.setState({disabledEndOtherWeekEnd: false});
													}} />

												<Text> - </Text>
													
												<DatePicker showIcon={false} 
													date={this.state.endOtherWeekEnd} 
													mode="time" 
													style={{width: 70}}
													disabled= {this.state.disabledEndOtherWeekEnd}
													customStyles={{
														disabled:{backgroundColor: 'transparent'}, 
														dateInput:{borderWidth: 0}, 
														dateText:{fontFamily: 'OpenSans-Regular'}, 
														placeholderText:{
															color: !this.state.endOtherWeekEndValidated ? '#ff0000' : gray,
															textDecorationLine: this.state.disabledEndOtherWeekEnd ? 'line-through' : 'none'}
													}}
													placeholder={this.getTwelveHourTime(this.state.endOtherWeekEnd.split(':')[0] + ':' + this.state.endOtherWeekEnd.split(':')[1] +  this.state.initialAmPm)} 
													format="h:mm A" 
													confirmBtnText="Confirm" 
													cancelBtnText="Cancel"
													is24Hour={false}
													onDateChange={(endOtherWeekEnd) => this.setState({endOtherWeekEnd, startOtherWeekEnd: this.beforeStartTime(this.state.startOtherWeekEnd, this.getTwelveHourTime(endOtherWeekEnd))})} />
											</View> : null}
									</View>
								</View>
							</View>
						</View>

						<Text style={styles.manual}>
							<Text style={styles.textManual}>Want to add more specific unavailable hours? Add them as </Text>
							<Text style={styles.buttonManual} onPress={() => this.manualImport()}>Fixed Events</Text>
							<Text style={styles.textManual}>!</Text>
						</Text>
						
						<View style={styles.buttons}>
							<TouchableOpacity style={[styles.button, {width:'100%'}]}>
								<Text style={styles.buttonText}>NEXT</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>

				{tutorialStatus}
			</View>
		);
	}
}

export default UnavailableHours;