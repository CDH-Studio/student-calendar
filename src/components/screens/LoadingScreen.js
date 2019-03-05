import React from 'react';
import { StyleSheet, StatusBar, View, Animated, Easing} from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import AnimatedGradient from '../AnimatedGradient';
import { gradientColors, blueColor, statusBarDark } from '../../../config';

const logoFile = require('../../assets/logoAnim.json');
const gradientAnimDuration = 2250;
const logoAnimDuration = 3000;

/**
 * The logo animation screen when the application is opened.
 */
class LoadingScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			colors: [blueColor, blueColor],
			animProgress: new Animated.Value(0),
			nextScreen: 'WelcomeScreen'
		};

		// Waits for the animation to finish, then goes to the next screen
		setTimeout(()=> {
			this.props.navigation.navigate(this.state.nextScreen);
		}, logoAnimDuration);
	}

	componentDidMount() {
		// Creates an animated value store at this.state.progress
		Animated.timing(this.state.animProgress, {
			toValue: 1,
			duration: gradientAnimDuration,
			easing: Easing.linear,
		}).start();

		// Sets the desired gradient, for it to be animated
		this.setState({
			colors: gradientColors
		});
	}

	componentWillMount() {
		// Checks which main screen was last accessed and changes
		// the next screen to that screen
		switch (this.props.main) {
			case 'Home':
				this.setState({
					nextScreen: 'LoginNavigator'
				});
				break;
			case 'SchoolSchedule':
				this.setState({
					nextScreen: 'TutorialNavigator'
				});
				break;
			case 'Dashboard':
				// Checks if the user is logged in, if so the next screen
				// is the dashboard, otherwise its the login screen
				if (this.props.profile !== null) {
					this.setState({
						nextScreen: 'DashboardOptionsNavigator'
					});
				}
				break;
		}
	}

	render() {
		const { colors, progress } = this.state;
		return(
			<View style={styles.container}>
				<AnimatedGradient
					style={{ flex: 1,}}
					colors={colors}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}/>

				<StatusBar translucent={true} 
					backgroundColor={statusBarDark} />
				
				<View style={styles.animView}>
					<LottieView
						progress={progress}
						source={logoFile}
						loop={false}
						speed={1}
						style={styles.anim} />
				</View>
			</View>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		main: state.NavigationReducer.main, 
		profile: state.HomeReducer.profile
	};
};

export default connect(mapStateToProps, null)(LoadingScreen);

const styles = StyleSheet.create({
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