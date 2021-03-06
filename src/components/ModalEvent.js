import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import { IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { modalEventStyles as styles, white, semiTransparentWhite, statusBarPopover, statusBarDark } from '../styles';
import { getStrings, deviceHeight, deviceWidth } from '../services/helper';
import { calendarColors } from '../../config/config';
import DeleteModal from './DeleteModal';


class ModalEvent extends React.PureComponent {

	strings = getStrings().ModalEvent;

	constructor(props) {
		super(props);

		this.state = {
			modalVisible: false
		};
	}

	darkenStatusBar = () => {
		if (Platform.OS === 'android') {
			StatusBar.setBackgroundColor(statusBarPopover, true);
		}
	}

	restoreStatusBar = () => {
		if (Platform.OS === 'android') {
			StatusBar.setBackgroundColor(statusBarDark, true);
		}
	}

	componentWillReceiveProps(newProp) {
		if (newProp.visible) {
			this.darkenStatusBar();
		} else {
			this.restoreStatusBar();
		}

		this.setState({modalVisible: newProp.visible});
	}

	/**
	 * In order for the info modal to not stay open when on edit screen 
	 */
	navigateAndCloseModal = (editScreen) => {
		this.props.dismiss();
		this.props.navigateEditScreen(editScreen);
	}

	dismissModal = () => {
		this.setState({modalVisible: false});
		this.props.dismiss();
	}

	render() {
		return(
			<View>
				<Modal isVisible={this.state.modalVisible}
					deviceHeight={deviceHeight}
					deviceWidth={deviceWidth}
					onBackdropPress={this.dismissModal}
					style={{alignItems:'center'}}
					useNativeDriver
					onModalHide={() => {
						if (this.state.showDelete) {
							this.props.showDeleteModal(true);
							this.setState({showDelete: false});
						}
					}}>
					<View style={[styles.modalContent, {backgroundColor: this.props.categoryColor}]}>
						<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
							<View style={{flex: 10, maxHeight:70, marginTop: 10}}>
								<ScrollView>
									<TouchableOpacity activeOpacity={1}>
										<Text style={styles.modalTitle}>{this.props.eventTitle}</Text>
									</TouchableOpacity>
								</ScrollView>
							</View>

							<TouchableOpacity style={styles.closeModal}
								onPress={this.dismissModal}>
								<Feather name="x"
									size={30}
									color={semiTransparentWhite} />
							</TouchableOpacity>
						</View>	
						

						<View style={styles.modalInfoView}>
							<View>
								<View style={styles.modalInfoDate}>
									<Text style={styles.modalInfoTitle}>{this.strings.dates}</Text>

									<Text style={[styles.modalInfoText, {color: semiTransparentWhite}]}>{this.props.date}</Text>
								</View>
								<View style={styles.modalInfoTime}>
									<Text style={styles.modalInfoTitle}>{this.strings.time}</Text>
									
									<Text style={[styles.modalInfoText, {color: semiTransparentWhite}]}>{this.props.time}</Text>
								</View>
							</View>
						</View>

						{this.props.details ? <View style={styles.modalDetailsView}>
							<View style={{maxHeight:this.props.detailHeight}} onStartShouldSetResponder={() => true}>
								<ScrollView>
									<TouchableOpacity activeOpacity={1}>
										{this.props.details}
									</TouchableOpacity>
								</ScrollView>
							</View>
						</View> : null}
						
						<View style={[styles.actionsModal, {backgroundColor: this.props.categoryColor}]}>
							<View style={styles.actionIconModal}>
								<IconButton
									size={40}
									onPress={() => this.navigateAndCloseModal(this.props.editScreen)}
									color={white}
									icon={({ size, color }) => (
										<MaterialCommunityIcons
											name='square-edit-outline'
											size={size}
											color={color}
											style={{height: size, width: size}}
										/>
									)} />
							</View>
							<View style={styles.actionIconModal}>
								<IconButton
									size={40}
									onPress={() => {
										this.dismissModal();
										this.setState({showDelete: true});
									}}
									color={white}
									icon={({ size, color }) => (
										<MaterialCommunityIcons
											name='trash-can-outline'
											size={size}
											color={color}
											style={{height: size, width: size}}
										/>
									)} />
							</View>
						</View>
					</View>
				</Modal>

				<DeleteModal />
			</View>
		);
	}
}

let mapStateToProps = (state) => {
	let { fixedEventsColor, nonFixedEventsColor, courseColor } = state.CalendarReducer;
	
	for (let i = 0; i < calendarColors.length; i++) {
		let key = Object.keys(calendarColors[i])[0];
		let value = Object.values(calendarColors[i])[0];

		switch(key) {
			case fixedEventsColor:
				fixedEventsColor = value;
				break;
			
			case nonFixedEventsColor:
				nonFixedEventsColor = value;
				break;
				
			case courseColor:
				courseColor = value;
				break;
		}
	}

	return {
		fixedEventsColor,
		nonFixedEventsColor,
		courseColor
	};
};

export default connect(mapStateToProps, null)(ModalEvent);