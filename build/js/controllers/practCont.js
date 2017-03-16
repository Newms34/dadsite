app.controller('practCont',function($scope){
	$scope.areas = [{
		title:'Drug/Controlled Substance/Firearms Offenses',
		txt:'Possession with the Intent to Distribute, Continuing Criminal Enterprise, Racketeering, Telecommunications Violations, Conspiracy, Illegal Possession of Firearms, Felon in Possession, Armed Career Criminal'
	},{
		title:'Homicide/Assaults',
		txt:'Murder, Aggravated Assault, Kidnapping, Carjacking, Simple Assault, Recklessly Endangering Another, Harassment, Terroristic Threats',
		ex:null
	},{
		title:'Sexual Offenses',
		txt:'Rape, Involuntary Deviate Sexual Intercourse, Sexual Assault, Indecent Assault, Corrupting Morals of a Minor, Megan&rsquo;s Law Violations',
		ex:null
	},{
		title:'Property Offenses',
		txt:'Robbery, Burglary, Theft, Receiving Stolen Property, Arson',
		ex:null
	},{
		title:'Drunk Driving',
		txt:'First or Multiple Offenses',
		ex:null
	},{
		title:'Juvenile Offenses',
		txt:'Delinquency, Direct File, Decertifications',
		ex:null
	},{
		title:'Return of Property/Forfeiture',
		txt:'Return of Property from Law Enforcement',
		ex:null
	}]
})