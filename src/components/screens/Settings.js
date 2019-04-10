import React from 'react';
import { StatusBar, View , TouchableOpacity, Text, Platform, Image, ScrollView, Dimensions, Alert, Modal, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { IconButton, Snackbar } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNRestart from 'react-native-restart';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomTabs } from 'react-native-custom-tabs';
import { Header } from 'react-navigation';
import { LoginNavigator, UnavailableRoute, SchoolInformationRoute, CleanReducersRoute, CalendarPermissionRoute } from '../../constants/screenNames';
import { settingsStyles as styles, blue, dark_blue, gray } from '../../styles';
import updateNavigation from '../NavigationHelper';
import { deleteEvent, listEvents } from '../../services/google_calendar';
import { googleSignOut } from '../../services/google_identity';
import { clearEveryReducer, getStrings } from '../../services/helper';
import { setLanguage } from '../../actions';
import EventsColorPicker from '../EventsColorPicker';

import SafariView from 'react-native-safari-view';

const viewHeight = 669.1428833007812;

class Settings extends React.PureComponent {

	strings = getStrings().Settings;

	static navigationOptions = ({navigation}) => ({
		headerRight: (__DEV__ ? <IconButton
			icon="delete"
			onPress={() => navigation.navigate(CleanReducersRoute)}
			size={20}
			color={blue}/> : null)
	});

	constructor(props) {
		super(props);

		let containerHeightTemp = Dimensions.get('window').height - Header.HEIGHT;
		let containerHeight = viewHeight < containerHeightTemp ? containerHeightTemp : null;

		this.state = {
			containerHeight, 
			showEventsColorPicker: false,
			snackbarVisible: false,
			snackbarText: '',
			snackbarTime: 3000,
			containerHeight,
			languageDialogVisible: false,
			showEventsColorPicker: false
		};

		// Updates the navigation location in redux
		updateNavigation('Settings', props.navigation.state.routeName);
	}

	dismiss = () => {
		this.setState({showEventsColorPicker: false});
	}

	showWebsite = (url) => {
		if (Platform.OS === 'ios') {
			this.openSafari(url);
		} else {
			this.openChrome(url);
		}
	}

	openSafari = (url) => {
		SafariView.isAvailable()
			.then(SafariView.show({url,
				tintColor: dark_blue,
				barTintColor: '#fff',
				fromBottom: true }))
			.catch(() => this.openChrome(url));
	}

	openChrome = (url) => {
		CustomTabs.openURL(url, {
			toolbarColor: dark_blue,
			enableUrlBarHiding: true,
			showPageTitle: true,
			enableDefaultShare: true,
			animations: {
				startEnter: 'slide_in_bottom',
				startExit: 'slide_out_bottom',
				endEnter: 'slide_in_bottom',
				endExit: 'slide_out_bottom',
			},
			forceCloseOnRedirection: true,
		});
	}

	logout = () => {
		googleSignOut();
		clearEveryReducer();
		this.props.navigation.navigate(LoginNavigator);
	}

	render() {
		const { containerHeight, showEventsColorPicker, snackbarText, snackbarTime, snackbarVisible } = this.state;

		return(
			<View style={styles.container}>
				<StatusBar translucent={true} 
					barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
					backgroundColor={'#166489'} />
				
				<EventsColorPicker visible={showEventsColorPicker}
					dismiss={() => this.dismiss()}/>

				<ScrollView>
					<View style={[styles.content, {height: containerHeight}]}>
						<View style={styles.topProfileContainer}>
							<View style={styles.profileIconContainer}>
								<Image style={styles.profileImage}
									source={{uri: this.props.profileImage}} />
							</View>

							<Text style={styles.profileDescription}>
								{this.props.userName}
							</Text>
						</View>

						<View style={styles.titleRow}>
							<MaterialIcons name="person-outline"
								size={30}
								color={blue} />
								
							<Text style={styles.title}>{this.strings.profile}</Text>
						</View>

						<TouchableOpacity style={styles.button}
							onPress={() => {
								this.props.navigation.navigate(UnavailableRoute, {title: getStrings().UnavailableHours.title});
							}}>
							<Text style={styles.buttonText}>{this.strings.unavailableHours}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button}
							onPress={() => {
								this.props.navigation.navigate(SchoolInformationRoute, {title: getStrings().SchoolInformation.title});
							}}>
							<Text style={styles.buttonText}>{this.strings.schoolInformation}</Text>
						</TouchableOpacity>

						<View style={styles.titleRow}>
							<MaterialCommunityIcons name="account-heart-outline"
								size={30}
								color={blue} />

							<Text style={styles.title}>{this.strings.preferences}</Text>
						</View>

						<TouchableOpacity style={styles.button}
							onPress={() => this.setState({languageDialogVisible: true})}>
							<Text style={styles.buttonText}>{this.props.language === 'en' ? 'Français' : 'English'}</Text>
						</TouchableOpacity>

						<Modal visible={this.state.languageDialogVisible}
							transparent={true}
							onRequestClose={() => {
								//do nothing;
							}}
							animationType={'none'}>
							<TouchableOpacity style={styles.modalView} 
								onPress={() => this.setState({languageDialogVisible: false})}
								activeOpacity={1}>
								<TouchableWithoutFeedback>
									<View style={styles.languageDialogContent}>
										<View style={styles.languageDialogMainRow}>
											<MaterialIcons name="language"
												size={80}
												color={gray} />

											<View style={styles.languagerDialogRightCol}>
												<Text style={styles.languageDialogQuestion}>{this.strings.changeLanguage}</Text>

												<View style={styles.languageDialogOptions}>
													<TouchableOpacity onPress={() => this.setState({languageDialogVisible: false})}>
														<Text style={styles.languageDialogCancel}>{this.strings.cancel}</Text>
													</TouchableOpacity>

													<TouchableOpacity onPress={() => {
														this.props.dispatch(setLanguage(this.props.language === 'en' ? 'fr' : 'en'));

														this.setState({languageDialogVisible: false});

														setTimeout(() => { 
															RNRestart.Restart();
														}, 50);
													}}>
														<Text style={styles.languageDialogYes}>{this.strings.yes}</Text>
													</TouchableOpacity>
												</View>
											</View>
										</View>
									</View>
								</TouchableWithoutFeedback>
							</TouchableOpacity>
						</Modal>

						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>{this.strings.notifications}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button}
							onPress={() => this.props.navigation.navigate(CalendarPermissionRoute)}>
							<Text style={styles.buttonText}>Modify who can see your calendar</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button}
							onPress={() => this.setState({showEventsColorPicker: true})}>
							<Text style={styles.buttonText}>{this.strings.theme}</Text>
						</TouchableOpacity>

						<View style={styles.titleRow}>
							<MaterialCommunityIcons name="cellphone-settings-variant"
								size={30}
								color={blue} />

							<Text style={styles.title}>{this.strings.general}</Text>
						</View>

						<TouchableOpacity style={styles.button}
							onPress={() => {
								this.showWebsite('https://github.com/CDH-Studio/Kalend/wiki/FAQ');
							}}>
							<Text style={styles.buttonText}>{this.strings.help}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>{this.strings.tutorial}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button}
							onPress={() => {
								Alert.alert(
									'Modify Calendar',
									'To delete every events in your calendar, you can clear you calendar, or if you want to remove the Kalend calendar, you can delete it.',
									[
										{text: 'Cancel', style: 'cancel'},
										{text: 'Clear Calendar', onPress: async () => {
											let events = await listEvents(this.props.calendarId);
											events = events.items.reduce((acc, event) => {
												acc.push(event.id);

												return acc;
											}, []);

											// Deletes the calendar
											console.log(events);

											this.setState({
												snackbarVisible: true,
												snackbarText: 'Calendar has been successfully cleared',
											});
										}},
										{text: 'Delete Calendar', onPress: () => {
											Alert.alert(
												'Warning',
												'You will be logged out of the application if you continue',
												[
													{text: 'Cancel', style: 'cancel'},
													{text: 'Ok', onPress: async () => {
														// Deletes the calendar
														this.logout();
													}},
												],
												{cancelable: false}
											);
										}}
									],
									{cancelable: true}
								);
							}}>
							<Text style={styles.buttonText}>{this.strings.deleteCalendar}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button} 
							onPress={()=>{
								this.showWebsite('https://cdhstudio.ca/');
							}}>
							<Text style={styles.buttonText}>{this.strings.cdhStudio}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonLogOutText}>Delete Account</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button}
							onPress={this.logout}>
							<Text style={styles.buttonLogOutText}>{this.strings.logout}</Text>
						</TouchableOpacity>

						<Text style={styles.version}>{this.strings.version}</Text>

						<View style={styles.privacyContainer}>
							<TouchableOpacity style={styles.privacy}
								onPress={() => {
									this.showWebsite('https://github.com/CDH-Studio/Kalend/wiki/Privacy-Policy');
								}}>
								<Text style={styles.privacyText}>{this.strings.privacyPolicy}</Text>
							</TouchableOpacity>

							<Text style={styles.privacyText}>   |   </Text>

							<TouchableOpacity style={styles.privacy}
								onPress={() => {
									this.showWebsite('https://github.com/CDH-Studio/Kalend/wiki/Terms-of-Service');
								}}>
								<Text style={styles.privacyText}>Terms of Service</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>

				<Snackbar
					visible={snackbarVisible}
					onDismiss={() => this.setState({ snackbarVisible: false })} 
					style={styles.snackbar}
					duration={snackbarTime}>
					{snackbarText}
				</Snackbar>
			</View>
		);
	}
}

let mapStateToProps = (state) => {
	const { HomeReducer, CalendarReducer, SettingsReducer } = state;

	let hasUserInfo = HomeReducer.profile != null;

	return {
		profileImage: hasUserInfo ? HomeReducer.profile.profile.user.photo : `https://api.adorable.io/avatars/285/${new Date().getTime()}.png`,
		userName: hasUserInfo ? HomeReducer.profile.profile.user.name : 'Unkown user',
		calendarId: CalendarReducer.id,
		language: SettingsReducer.language
	};
};

export default connect(mapStateToProps, null)(Settings);
