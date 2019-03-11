import React from 'react';
import { ImageBackground, StatusBar, View, Image, Text } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { gradientColors } from '../../../config';
import updateNavigation from '../NavigationHelper';
import { googleSignIn, googleIsSignedIn, googleGetCurrentUserInfo } from '../../services/google_identity';
import { homeStyles as styles } from '../../styles';
import { TutorialNavigator } from '../../constants/screenNames';
import { logonUser } from '../../actions';


/** 
 * Home/Login screen of the app.
 * Permits the user to log into the app with their Google account.*/
class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
		updateNavigation(this.constructor.name, props.navigation.state.routeName);
	}

	/**
	 * Sets the user information
	 */
	setUser = (userInfo) => {
		this.props.dispatch(logonUser(userInfo));
	}
	
	/**
	 * Log In the user with their Google Account
	 */
	signIn = () => {
		if (!this.state.clicked) {
			this.state.clicked = true;
			googleIsSignedIn().then((signedIn) => {
				if (!signedIn || this.props.HomeReducer.profile === null) {
					googleGetCurrentUserInfo().then((userInfo) => {
						if (userInfo !== undefined) {
							this.setUser(userInfo);
							this.props.navigation.navigate(TutorialNavigator);
						}
						googleSignIn().then((userInfo) => {
							if (userInfo !== null) {
								this.setUser(userInfo);
								this.props.navigation.navigate(TutorialNavigator);
							}
							this.state.clicked = false;
						});
					});
				} else {
					this.props.navigation.navigate(TutorialNavigator);
				}
			});
		}
	}

	render() {
		return (
			<LinearGradient style={styles.container}
				colors={gradientColors}>
				<ImageBackground style={styles.container} 
					source={require('../../assets/img/loginScreen/backPattern.png')}
					resizeMode="repeat">
					<StatusBar translucent={true} 
						backgroundColor={'#00000050'} />

					<View style={styles.content}>
						<View>
							<Image style={styles.logo}
								source={require('../../assets/img/kalendFullLogo.png')}
								resizeMode="contain" />
							<Text style={styles.text}>The Better Way to Start your Month!</Text>
						</View>

						<Image style={styles.userIcon}
							source={require('../../assets/img/loginScreen/userIcon.png')}
							resizeMode="contain" />

						<GoogleSigninButton 
							style={styles.signInButton} 
							size={GoogleSigninButton.Size.Wide} 
							color={GoogleSigninButton.Color.Light} 
							onPress={this.signIn} />
					</View>
				</ImageBackground>
			</LinearGradient>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		NavigationReducer: state.NavigationReducer
	};
};

export default connect(mapStateToProps, null)(Home);