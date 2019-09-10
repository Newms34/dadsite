app.controller('pubCont',function($scope){
	$scope.pubOrder = 'dateStamp';
	$scope.pubDir = false;
	$scope.sortThings = function(col,tbl){
		if (tbl=='pub'){
			if (col==$scope.pubOrder){
				$scope.pubDir=!$scope.pubDir;
			}else{
				$scope.pubOrder = col;
				$scope.pubDir = false;
			}
		}else{
			
			if (col==$scope.lecOrder){
				$scope.lecDir=!$scope.lecDir;
			}else{
				$scope.lecOrder = col;
				$scope.lecDir = false;
			}
		
		}
	};
	$scope.pubs = [{
		title:'Fighting for the Safety Value Reduction (Without Cooperation)',
		pub:'The Champion',
		pubber:'National Association of Criminal Defense Lawyers',
		date:'Mar 2009',
		dateStamp: 1235865600
	},{
		title:'Setting the Record Straight (Expungement)',
		pub:'The Pennsylvania Lawyer',
		pubber:'Pennsylvania Bar Association',
		date:'Nov 2008',
		dateStamp: 1225497600
	},{
		title:'Arguing for Exceptions to the Mental Health Privilege',
		pub:'The Pennsylvania Lawyer',
		pubber:'Pennsylvania Bar Association',
		date:'Apr 2004',
		dateStamp: 1080777600
	},{
		title:'Federal "Consent" Searches: Not Always Hopeless',
		pub:'PACDL Forum',
		pubber:'Pennsylvania Association of Criminal Defense Lawyers',
		date:'1997',
		dateStamp: 852076800
	},{
		title:'How to be a Trial Lawyer',
		pub:'The Philadelphia Lawyer',
		pubber:'Pennsylvania Bar Association',
		date:'Winter 1995',
		dateStamp: 817776000
	},{
		title:'Pennsylvania Corrupt Organizations Act: The Wounded Prosecutorial Dragon',
		pub:'Liberty Watch',
		pubber:'Pennsylvania Association of Criminal Defense Lawyers',
		date:'1994',
		dateStamp: 757382400
	}];
	$scope.lecOrder = 'dateStamp';
	$scope.lecDir = false;
	$scope.lecs = [{
		topic:'Understanding Federal Sentencing (repeat)',
		date:'10/2014',
		loc:'Philadelphia, PA',
		dateStamp:1412121600
	},{
		topic:'Understanding Federal Sentencing',
		date:'8/2014',
		loc:'Philadelphia, PA',
		dateStamp:1406851200
	},{
		topic:'Trying Drug Cases',
		date:'6/2014',
		loc:'Harrisburg, PA',
		dateStamp:1401580800
	},{
		topic:'Understanding Federal Sentencing',
		date:'11/2013',
		loc:'Las Vegas, NV',
		dateStamp:1383264000
	},{
		topic:'Understanding Federal Sentencing',
		date:'11/2012',
		loc:'Philadelphia, PA',
		dateStamp:1351728000
	},{
		topic:'Forfeitures',
		date:'1/2012',
		loc:'Philadelphia, PA',
		dateStamp:1325376000
	},{
		topic:'Drug Distribution Cases',
		date:'6/2011',
		loc:'Harrisburg, PA',
		dateStamp:1306886400
	},{
		topic:'Confidential Informants',
		date:'6/2010',
		loc:'Harrisburg, PA',
		dateStamp:1275350400
	},{
		topic:'Forfeitures',
		date:'3/2010',
		loc:'Philadelphia, PA',
		dateStamp:1267401600
	},{
		topic:'The Court Appointment Process',
		date:'10/2009',
		loc:'Philadelphia, PA',
		dateStamp:1254355200
	},{
		topic:'Drug and Alcohol Possession Cases',
		date:'6/2009',
		loc:'Philadelphia, PA',
		dateStamp:1243814400
	},{
		topic:'Expungements',
		date:'5/2009',
		loc:'Philadelphia, PA',
		dateStamp:1241136000
	},{
		topic:'View From the Bench (Moderator)',
		date:'9/2008',
		loc:'Philadelphia, PA',
		dateStamp:1220227200
	},{
		topic:'Search and Seizure (New Cases)',
		date:'6/2008',
		loc:'Philadelphia, PA',
		dateStamp:1212278400
	},{
		topic:'Forfeiture',
		date:'6/2007',
		loc:'Philadelphia, PA',
		dateStamp:1180656000
	},{
		topic:'Motions in Limine',
		date:'10/2005',
		loc:'Philadelphia, PA',
		dateStamp:1128124800
	},{
		topic:'Certification for Appointment Procedures',
		date:'10/2005',
		loc:'Philadelphia, PA',
		dateStamp:1128124800
	}];
})