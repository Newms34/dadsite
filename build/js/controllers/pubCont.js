app.controller('pubCont',function($scope){
	$scope.pubOrder = 'title';
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
		date:'Mar 2009'
	},{
		title:'Setting the Record Straight (Expungement)',
		pub:'The Pennsylvania Lawyer',
		pubber:'Pennsylvania Bar Association',
		date:'Nov-Dec 2008'
	},{
		title:'Arguing for Exceptions to the Mental Health Privilege',
		pub:'The Pennsylvania Lawyer',
		pubber:'Pennsylvania Bar Association',
		date:'Apr 2004'
	},{
		title:'Federal "Consent" Searches: Not Always Hopeless',
		pub:'PACDL Forum',
		pubber:'Pennsylvania Association of Criminal Defense Lawyers',
		date:'1997'
	},{
		title:'How to be a Trial Lawyer',
		pub:'The Philadelphia Lawyer',
		pubber:'Pennsylvania Bar Association',
		date:'Winter 1995'
	},{
		title:'Pennsylvania Corrupt Organizations Act: The Wounded Prosecutorial Dragon',
		pub:'Liberty Watch',
		pubber:'Pennsylvania Association of Criminal Defense Lawyers',
		date:'1994'
	}];
	$scope.lecOrder = 'date';
	$scope.lecDir = false;
	$scope.lecs = [{
		topic:'Understanding Federal Sentencing (repeat)',
		date:'10/2014',
		loc:'Philadelphia, PA',
	},{
		topic:'Understanding Federal Sentencing',
		date:'8/2014',
		loc:'Philadelphia, PA',
	},{
		topic:'Trying Drug Cases',
		date:'6/2014',
		loc:'Harrisburg, PA',
	},{
		topic:'Understanding Federal Sentencing',
		date:'11/2013',
		loc:'Las Vegas, NV',
	},{
		topic:'Understanding Federal Sentencing',
		date:'11/2012',
		loc:'Philadelphia, PA',
	},{
		topic:'Forfeitures',
		date:'1/2012',
		loc:'Philadelphia, PA',
	},{
		topic:'Drug Distribution Cases',
		date:'6/2011',
		loc:'Harrisburg, PA',
	},{
		topic:'Confidential Informants',
		date:'6/2010',
		loc:'Harrisburg, PA',
	},{
		topic:'Forfeitures',
		date:'3/2010',
		loc:'Philadelphia, PA',
	},{
		topic:'The Court Appointment Process',
		date:'10/2009',
		loc:'Philadelphia, PA',
	},{
		topic:'Drug and Alcohol Possession Cases',
		date:'6/2009',
		loc:'Philadelphia, PA',
	},{
		topic:'Expungements',
		date:'5/2009',
		loc:'Philadelphia, PA',
	},{
		topic:'View From the Bench (Moderator)',
		date:'9/2008',
		loc:'Philadelphia, PA',
	},{
		topic:'Search and Seizure (New Cases)',
		date:'6/2008',
		loc:'Philadelphia, PA',
	},{
		topic:'Forfeiture',
		date:'6/2007',
		loc:'Philadelphia, PA',
	},{
		topic:'Motions in Limine',
		date:'10/2005',
		loc:'Philadelphia, PA',
	},{
		topic:'Certification for Appointment Procedures',
		date:'10/2005',
		loc:'Philadelphia, PA',
	}];
})