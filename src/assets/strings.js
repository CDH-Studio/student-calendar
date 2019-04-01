const en = {
	Chatbot: {
		name: 'Chatbot',
	},
	CompareSchedule: {
		name: 'Compare Schedule',
	}, 
	Course: {
		name: 'Course',
		addTitle: 'Add Course',
		editTitle: 'Edit Course',
		description: 'Add all your courses from your school schedule',
		snackbarSuccess: 'Course successfully added',
		snackbarFailure: 'Invalid fields, please review to add course',
		week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		courseCodePlaceholder: 'Course Code',
		courseCodeEmpty: 'Course Code cannot be empty.',
		timeEmpty: 'Please select a Start and End Time.',
		locationPlaceholder: 'Location',
		dayOfWeek: 'Day of Week',
		confirmButton: 'Confirm',
		cancelButton: 'Cancel',
		startTime: 'Start Time',
		endTime: 'End Time',
		cancel: 'Cancel',
	},
	Dashboard: {
		name: 'Dashboard',
		createSchedule: 'Create Schedule',
		fabSchool: 'Add School Schedule',
		fabFixedEvent: 'Add Fixed Event',
		fabNonFixedEvent: 'Add Non-Fixed Event',
	},
	FixedEvent: {
		name: 'Fixed Event',
		addTitle: 'Add Fixed Event',
		editTitle: 'Edit Fixed Event',
		description: 'Add your events, office hours, appointments, etc.',
		recurrence: ['None', 'Everyday', 'Weekly', 'Monthly'],
		cancel: 'Cancel',
		snackbarSuccess: 'Event successfully added',
		snackbarFailure: 'Invalid fields, please review to add event',
		titleEmpty: 'Title cannot be empty.',
		datesTimesEmpty: 'Please select Dates and Times.',
		timesEmpty: 'Please select an End Date and Time.',
		alldayEmpty: 'Please select a Start and End Date.',
		allday: 'All-Day',
		start: 'Start',
		end: 'End',
		confirmButton: 'Confirm',
		cancelButton: 'Cancel',
		titlePlaceholder: 'Title',
		locationPlaceholder: 'Location',
		descriptionPlaceholder: 'Description',
	},
	Home: {
		name: 'Home',
		createdBy: 'Created by ',
		cdhStudio: 'CDH Studio',
	},
	NonFixedEvent: {
		name: 'Non-Fixed Events',
		addTitle: 'Add Non-Fixed Event',
		editTitle: 'Edit Non-Fixed Events',
		snackbarSuccess: 'Event successfully added',
		snackbarFailure: 'Invalid fields, please review to add event',
		titleEmpty: 'Title cannot be empty.',
		durationEmpty: 'Please add a Duration.',
		specificDateEmpty: 'Please select a Start and End Date.',
		description: 'Add the events you would like Kalend to plan for you',
		titlePlaceholder: 'Title',
		availability: 'Availability',
		dates: 'Dates',
		week: 'Week',
		specificDate: 'Specific Date Range',
		startDate: 'Start Date',
		confirmButton: 'Confirm',
		cancelButton: 'Cancel',
		low: 'Low',
		normal: 'Normal',
		high: 'High',
		duration: 'Duration',
		endDate: 'End Date',
		hours: 'hour(s)',
		minutes: 'minute(s)',
		splitDurationDate: 'Split duration over date range?',
		splitDurationWeek: 'Split duration over week?',
		numberTimeDate: 'Number of Times It Will Happen in Date Range',
		numberTimeWeek: 'Number of Times It Will Happen in Week',
		everyWeek: 'Every Week?',
		priorityLevel: 'Priority Level',
		details: 'Details',
		locationPlaceholder: 'Location',
		descriptionPlaceholder: 'Description',
	},
	ReviewEvent: {
		name: 'Review Events',
		title: 'Create a Schedule',
		allDay: 'All-Day',
		timeWeek: 'times/week',
		week: 'Week',
		error: 'Error',
		noEvent: 'You need to create events in order to generate a Calendar',
		courseTitle: 'School Schedule',
		noCourse: 'No School Schedule or Courses added',
		fixedTitle: 'Fixed Events',
		noFixed: 'No Fixed events added',
		nonFixedTitle: 'Non-Fixed Events',
		noNonFixed: 'No Non-Fixed events added',
		ok: 'Ok',
		low: 'Low',
		normal: 'Normal',
		high: 'High',
	},
	ScheduleCreation: {
		name: 'Schedule Creation',
		error: 'Error',
		ok: 'Ok',
		cancel: 'Cancel',
		dialogTitle: 'Creating your Schedule',
		dialogDescription: 'Our AI is now perfecting multiple schedule for you',
		backAlertTitle: 'Stopping creation',
		backAlertDescription: 'The schedules will stop being generated if you proceed, where do you want to go?',
	},
	ScheduleSelection: {
		name: 'Schedule Selection',
		weekLetters: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		cancel: 'Cancel',
		backAlertTitle: 'Discarding changes',
		backAlertDescription: 'The created schedules will be deleted if you proceed, where do you want to go?',
		description: 'Below you will find schedules of the current week created by the application. Please select the one you prefer.',
		courses: 'Courses',
		fixedEvents: 'Fixed Events',
		nonFixedEvents: 'Non-Fixed Events',
	},
	ScheduleSelectionDetails: {
		name: 'Schedule Selection Details',
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	},
	SchoolInformation: {
		name: 'School Information',
		title: 'Set School Information',
		description: 'Please enter the information about your current semester',
		institution: 'Post-Secondary Institution',
		carletonU: 'Carleton University',
		uOttawa: 'University of Ottawa',
		other: 'Other',
		noInstitution: 'Please select an institution',
		duration: 'Semester Duration',
		noDuration: 'Please select a start and end date',
		start: 'Start',
		end: 'End',
		confirmButton: 'Confirm',
		cancelButton: 'Cancel',
	},
	SchoolSchedule: {
		name: 'School Schedule',
		title: 'Add School Schedule',
		description: 'Import your school schedule by importing or taking a picture',
		selectPicture: 'Select a Picture',
		takePicture: 'Take a Picture',
		manual: 'or import your school schedule ',
		manually: 'manually',
	},
	SchoolScheduleCreation: {
		name: 'School Schedule Creation',
		dialogTitle: 'Analyzing your Picture',
		dialogDescription: 'Extracting the information from your picture',
		error: 'Error',
		fileNoData: 'No data',
		backAlertTitle: 'Stopping extraction',
		backAlertDescription: 'The schedule analyzing process will be stopped if you proceed, where do you want to go?',
		cancel: 'Cancel',
	},
	SchoolScheduleSelectPicture: {
		name: 'School Schedule Select Picture',
		title: 'Select Picture',
	},
	SchoolScheduleTakePicture: {
		name: 'School Schedule Take Picture',
		title: 'Take a Picture',
	},
	Settings: {
		name: 'Settings',
		profile: 'Profile',
		unavailableHours: 'Set Unavailable Hours',
		schoolInformation: 'Set School Information',
		preferences: 'Preferences',
		notifications: 'Notifications',
		theme: 'Theme',
		general: 'General',
		help: 'Help',
		tutorial: 'Reload Tutorial',
		deleteCalendar: 'Reset/Delete Calendar',
		clearCache: 'Clear Cache/Data',
		privacyPolicy: 'Privacy Policy',
		cdhStudio: 'CDH Studio',
		logout: 'Log out',
		version: 'Version 0.2.0',
	},
	UnavailableHours: {
		name: 'Unavailable Hours',
		timesEmpty: 'Please select a Start and End Time.',
		description: 'Add the hours for which you\'re not available or you don\'t want anything to be booked.',
		manual: 'Want to add more specific unavailable hours? Add them as ',
		fixedEvents: 'Fixed Events',
		sleeping: 'Sleeping Hours',
		commuting: 'Commuting Hours',
		eating: 'Eating Hours',
		other: 'Other Unavailable Hours',
		week: 'Week',
		weekEnd: 'Week-End',
		confirmButton: 'Confirm',
		cancelButton: 'Cancel',
	},
	WelcomeScreen: {
		name: 'Welcome Screen',
		title: [
			'School Schedule Integration',
			'Schedule Generator',
			'Compare Schedule',
			'Start right now\nwith Kalend!',
		],
		description: [
			'Add your school schedule by importing a picture or a screenshot of your schedule',
			'Add your events and the activities you would like to do and let the application generate the best schedules for you',
			'Find availabilities by comparing schedules with your friends and colleagues',
		],
	},
	EventOverview: {
		location: 'Location: ',
		description: 'Description: ',
		recurrence: 'Recurrence: ',
		priority: 'Priority Level: ',
		dates: 'Date(s): ',
		time: 'Time: ',
		details: 'Details',
		deleteEvent: 'Delete this event?',
		cancel: 'Cancel',
		yes: 'Yes',
	},
	ServicesError: {
		formatDate: 'Something went wrong while formating data (Array length == 0)',
		analyzePictureServerReceive: 'Could not receive response from the server, please try again',
		analyzePictureServerConnect: 'Could not connect to the server, please try again later',
		analyzePictureData: 'The data from your schedule could not be extracted, please try again',
		findEmptySlots: 'Something went wrong while checking for events in Google Calendar',
		insertFixedCourse: 'There was a problem inserting Course',
		insertFixed: 'There was a problem inserting Fixed Event'
	},
	BottomButtons: {
		add: 'Add',
		next: 'Next',
		done: 'Done',
	},
};

const fr = {
	Chatbot: {
		name: 'Chatbot',
	},
	CompareSchedule: {
		name: 'Comparer horaire',
	}, 
	Course: {
		name: 'Cours',
		addTitle: 'Ajout de cours',
		editTitle: 'Modifier le cours',
		description: 'Ajoutez tout les cours de votre horaire scolaire',
		snackbarSuccess: 'Cours ajouté avec succès',
		snackbarFailure: 'Champs non valides, veuillez vérifier pour ajouter un cours',
		week: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
		courseCodePlaceholder: 'Cote de cours',
		locationPlaceholder: 'Localisation',
		dayOfWeek: 'Jour de la semaine',
		confirmButton: 'Confirmer',
		cancelButton: 'Annuler',
		startTime: 'Début',
		endTime: 'Fin',
		courseCodeEmpty: 'Cote de cours ne peux pas être vide.',
		timeEmpty: 'Veuillez sélectionner un début et une fin.',
		cancel: 'Annuler',
	},
	Dashboard: {
		name: 'Tableau de bord',
		createSchedule: 'Créer un horaire',
		fabSchool: 'Ajouter un horaire scolaire',
		fabFixedEvent: 'Ajouter un événement fixe',
		fabNonFixedEvent: 'Ajouter un événement non fixe',
	},
	FixedEvent: {
		name: 'Événement Fixe',
		addTitle: 'Ajouter un événement fixe',
		editTitle: 'Modifier un événement fixe',
		description: 'Ajouter vos événements, heures de travail, rendez-vous, etc.',
		recurrence: ['Aucune', 'Tous les jours', 'Hebdomadaire', 'Mensuel'],
		cancel: 'Annuler',
		snackbarSuccess: 'Événement ajouté avec succès',
		snackbarFailure: 'Champs non valides, veuillez vérifier pour ajouter un événement',
		titleEmpty: 'Titre ne peut être vide.',
		datesTimesEmpty: 'Veuillez sélectionnez les dates et heures.',
		timesEmpty: 'Veuillez séletionner une date et une heure de fin.',
		alldayEmpty: 'Veuillez sélectionner une date de début et de fin.',
		allday: 'Toute la journée',
		start: 'Début',
		end: 'Fin',
		confirmButton: 'Confirmer',
		cancelButton: 'Annuler',
		titlePlaceholder: 'Titre',
		locationPlaceholder: 'Localisation',
		descriptionPlaceholder: 'Description',
	},
	Home: {
		name: 'Home',
		createdBy: 'Created by ',
		cdhStudio: 'CDH Studio',
	},
	NonFixedEvent: {
		name: 'Non-Fixed Events',
		addTitle: 'Add Non-Fixed Event',
		editTitle: 'Edit Non-Fixed Events',
		snackbarSuccess: 'Event successfully added',
		snackbarFailure: 'Invalid fields, please review to add event',
		titleEmpty: 'Title cannot be empty.',
		durationEmpty: 'Please add a Duration.',
		specificDateEmpty: 'Please select a Start and End Date.',
		description: 'Add the events you would like Kalend to plan for you',
		titlePlaceholder: 'Title',
		availability: 'Availability',
		dates: 'Dates',
		week: 'Week',
		specificDate: 'Specific Date Range',
		startDate: 'Start Date',
		confirmButton: 'Confirm',
		cancelButton: 'Cancel',
		low: 'Low',
		normal: 'Normal',
		high: 'High',
		duration: 'Duration',
		endDate: 'End Date',
		hours: 'hour(s)',
		minutes: 'minute(s)',
		splitDurationDate: 'Split duration over date range?',
		splitDurationWeek: 'Split duration over week?',
		numberTimeDate: 'Number of Times It Will Happen in Date Range',
		numberTimeWeek: 'Number of Times It Will Happen in Week',
		everyWeek: 'Every Week?',
		priorityLevel: 'Priority Level',
		details: 'Details',
		locationPlaceholder: 'Location',
		descriptionPlaceholder: 'Description',
	},
	ReviewEvent: {
		name: 'Review Events',
		title: 'Create a Schedule',
		allDay: 'All-Day',
		timeWeek: 'times/week',
		week: 'Week',
		error: 'Error',
		noEvent: 'You need to create events in order to generate a Calendar',
		courseTitle: 'School Schedule',
		noCourse: 'No School Schedule or Courses added',
		fixedTitle: 'Fixed Events',
		noFixed: 'No Fixed events added',
		nonFixedTitle: 'Non-Fixed Events',
		noNonFixed: 'No Non-Fixed events added',
		ok: 'Ok',
		low: 'Low',
		normal: 'Normal',
		high: 'High',
	},
	ScheduleCreation: {
		name: 'Schedule Creation',
		error: 'Error',
		ok: 'Ok',
		cancel: 'Cancel',
		dialogTitle: 'Creating your Schedule',
		dialogDescription: 'Our AI is now perfecting multiple schedule for you',
		backAlertTitle: 'Stopping creation',
		backAlertDescription: 'The schedules will stop being generated if you proceed, where do you want to go?',
	},
	ScheduleSelection: {
		name: 'Schedule Selection',
		weekLetters: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		cancel: 'Cancel',
		backAlertTitle: 'Discarding changes',
		backAlertDescription: 'The created schedules will be deleted if you proceed, where do you want to go?',
		description: 'Below you will find schedules of the current week created by the application. Please select the one you prefer.',
		courses: 'Courses',
		fixedEvents: 'Fixed Events',
		nonFixedEvents: 'Non-Fixed Events',
	},
	ScheduleSelectionDetails: {
		name: 'Schedule Selection Details',
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	},
	SchoolInformation: {
		name: 'School Information',
		title: 'Set School Information',
		description: 'Please enter the information about your current semester',
		institution: 'Post-Secondary Institution',
		carletonU: 'Carleton University',
		uOttawa: 'University of Ottawa',
		other: 'Other',
		noInstitution: 'Please select an institution',
		duration: 'Semester Duration',
		noDuration: 'Please select a start and end date',
		start: 'Start',
		end: 'End',
		confirmButton: 'Confirm',
		cancelButton: 'Cancel',
	},
	SchoolSchedule: {
		name: 'School Schedule',
		title: 'Add School Schedule',
		description: 'Import your school schedule by importing or taking a picture',
		selectPicture: 'Select a Picture',
		takePicture: 'Take a Picture',
		manual: 'or import your school schedule ',
		manually: 'manually',
	},
	SchoolScheduleCreation: {
		name: 'School Schedule Creation',
		dialogTitle: 'Analyzing your Picture',
		dialogDescription: 'Extracting the information from your picture',
		error: 'Error',
		fileNoData: 'No data',
		backAlertTitle: 'Stopping extraction',
		backAlertDescription: 'The schedule analyzing process will be stopped if you proceed, where do you want to go?',
		cancel: 'Cancel',
	},
	SchoolScheduleSelectPicture: {
		name: 'School Schedule Select Picture',
		title: 'Select Picture',
	},
	SchoolScheduleTakePicture: {
		name: 'School Schedule Take Picture',
		title: 'Take a Picture',
	},
	Settings: {
		name: 'Settings',
		profile: 'Profile',
		unavailableHours: 'Set Unavailable Hours',
		schoolInformation: 'Set School Information',
		preferences: 'Preferences',
		notifications: 'Notifications',
		theme: 'Theme',
		general: 'General',
		help: 'Help',
		tutorial: 'Reload Tutorial',
		deleteCalendar: 'Reset/Delete Calendar',
		clearCache: 'Clear Cache/Data',
		privacyPolicy: 'Privacy Policy',
		cdhStudio: 'CDH Studio',
		logout: 'Log out',
		version: 'Version 0.2.0',
	},
	UnavailableHours: {
		name: 'Unavailable Hours',
		timesEmpty: 'Please select a Start and End Time.',
		description: 'Add the hours for which you\'re not available or you don\'t want anything to be booked.',
		manual: 'Want to add more specific unavailable hours? Add them as ',
		fixedEvents: 'Fixed Events',
		sleeping: 'Sleeping Hours',
		commuting: 'Commuting Hours',
		eating: 'Eating Hours',
		other: 'Other Unavailable Hours',
		week: 'Week',
		weekEnd: 'Week-End',
		confirmButton: 'Confirm',
		cancelButton: 'Cancel',
	},
	WelcomeScreen: {
		name: 'Welcome Screen',
		title: [
			'School Schedule Integration',
			'Schedule Generator',
			'Compare Schedule',
			'Start right now\nwith Kalend!',
		],
		description: [
			'Add your school schedule by importing a picture or a screenshot of your schedule',
			'Add your events and the activities you would like to do and let the application generate the best schedules for you',
			'Find availabilities by comparing schedules with your friends and colleagues',
		],
	},
	EventOverview: {
		location: 'Location: ',
		description: 'Description: ',
		recurrence: 'Recurrence: ',
		priority: 'Priority Level: ',
		dates: 'Date(s): ',
		time: 'Time: ',
		details: 'Details',
		deleteEvent: 'Delete this event?',
		cancel: 'Cancel',
		yes: 'Yes',
	},
	ServicesError: {
		formatDate: 'Something went wrong while formating data (Array length == 0)',
		analyzePictureServerReceive: 'Could not receive response from the server, please try again',
		analyzePictureServerConnect: 'Could not connect to the server, please try again later',
		analyzePictureData: 'The data from your schedule could not be extracted, please try again',
		findEmptySlots: 'Something went wrong while checking for events in Google Calendar',
		insertFixedCourse: 'There was a problem inserting Course',
		insertFixed: 'There was a problem inserting Fixed Event'
	},
	BottomButtons: {
		add: 'Ajout',
		next: 'Prochain',
		done: 'Terminé',
	},
};

export default {
	en,
	fr
};