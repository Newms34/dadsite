const app = angular.module('ghnSite',[]);
app.controller('caseCont', function($scope) {
    $scope.caseBlurbs = ["His very first federal jury trial, that of a man charged with hiding his two nephews who had escaped from Virginia's death row, resulted in a not guilty verdict (Johnnie Lee Council). In his first homicide case, he was able to convince the government's attorney that his client was a victim, and not the shooter, by having a bullet removed from his client's shoulder, which came from the shooter's gun, and was not a close-fired shot.", "Mr. Newman has successfully litigated appeals, which reversed the death sentences of Perry Poole, Michael LaCava (police killing), and Billy Brooks. He retried all three cases with successful results. None of these men returned to death row. He also represented one of two brothers charged in the most highly investigated police killing in Philadelphia history, preventing a death penalty. He has tried other murder cases to a not guilty (Darnell Murphy, Alex Hague), and even had a murder case discharged at a preliminary hearing on the grounds of self-defense.", "Mr. Newman successfully prevented an adult trial of a Long Island juvenile football player charged with the extreme hazing, including charges of sodomy, of younger football players while at a training camp in the Poconos. The youth was sent to a boot camp for several months.", "He represented the head of the Delaware Valley Pagans, who received a short sentence (27 months), for a daylight shooting in South Philadelphia, witnessed by over a dozen law enforcement agents, including the FBI.", "Mr. Newman tried the case of the owner of an ambulance company charged with taking diverted calls from a 911 dispatcher, gaining the dismissal of all felony charges.", "He successfully prevented the federal prosecution of the head of an alleged telemarketing scheme involving over $100 million.", "Mr. Newman represented a Berks County District Judge charged with obstruction of justice and destruction of evidence. A week-long jury trial resulted in a complete acquittal.", "Mr. Newman has represented a number of police officers. He was successful in having the harsh sentence of John Baird (initially represented by another attorney), the leader of the '39th District' police gang, reduced from 13 years to time-served.", "He recently convinced prosecutors not to charge a man with murder, who had fired his gun in self-defense.", "Just as notably, some of Mr. Newman’s successes are cases in which, after vigorous pre-charge representation, no charges were filed against his clients. For example, Mr. Newman has represented students at the University of Pennsylvania, Drexel University, Pennsylvania State University, and Lehigh University who were falsely accused of rape. Mr. Newman has recently successfully convinced the U. S. Justice Department to not charge an attorney in a multi-million dollar Medicare fraud case."]
        //RE: "not to charge a man with murder who had fired his gun in self defense"... is this a bit vague? Yes, attorney client priviledge is a thing, but I almost feel this is going too far in the other direction. A little sort of "oh yeh, he, uh, wins stuff..."
    $scope.appeals = ["United States v. Davis, 322 F.Supp 2d 591 (ED. Pa. 2004) (No leadership role enhancement).", "United States v, Baird, 218 F.3d 221 (3d Cir. 2000) (prior counsel ineffective for failing to object to use of information provided by defendant per cooperation agreement)", "United States v. Medford, 194 F.3d 419 (3d Cir. 1999) (due process requires notice of intent to upwardly depart)", "Commonwealth v. Brooks, 839 A.2d 245 (Pa. 2003) (death penalty reversed, new trial granted)", "Commonwealth v. Fontanez, 739 A.2d 152 (Pa. 1999) (forfeiture reversal)", "Commonwealth v. Caine, 683 A.2d 890 (en banc Pa. Super 1996) (reversed and defendant discharged on homicide by vehicle while DUI)", "Commonwealth v. LaCava, 666 A.2d 221 (Pa. 1995) (death penalty reversed; life sentence on retrial)", "Commonwealth v.Perry, 644 A.2d 705 (Pa. 1994) (death penalty reversed, new trial granted)", "Commonwealth v. Ben Samuel, 590 A.2d 1245 (1991) (manslaughter conviction reversed, client discharged)","Commonwealth v. Garcia, 588 A.2d 951 (Pa. Super 1991) (improper to bring in evidence of expert’s opinion on whether or not behavior was consistent with that of rape victim)","Commonwealth v. Austin, 575 A.2d 141 (Pa. Super. 1990). (insufficient evidence for murder charges)","Commonwealth v. Butler, 552 A.2d 702 (Pa. Super 1988) (double jeopardy bars second trial on drug charges after acquittal on DUI charges)","Commonwealth v. Fultz, 462 A.2d 1340 (Pa. Super. 1983) (sexual assault conviction reversed due to the trial counsel’s failure to challenge young witness’ competency)"];

})

app.controller('contCont', function($scope, $http) {
    $scope.showCont = false;
    $scope.contInfo = [{
        lbl: '\uD83C\uDF0E Location',
        data: 'Suite 2126, The Land Title Building, 100 S Broad St, Philadelphia, PA 19110'
    }, {
        lbl: '\u260E Phone',
        data: '215-592-9400'
    }, {
        lbl: '\uD83D\uDDB7 Fax',
        data: '???-???-????'
    }, {
        lbl: '\u2709 E-Mail',
        data: 'ghnlawyer@yahoo.com',
        isEm:true
    }];
    $scope.apk = 'AIzaSyAH6FaHnJI3G1OcDsMjU3Kh9Roz5geJ-aA'; //is there ANY way to store this on the back-end, or on the host or something?
});


app.controller('footCon', function($scope, $http) {
    $scope.chVw = function(v) {
        if (typeof v == 'string') v = JSON.parse(v);
        $('#main-view').fadeOut(300, function() {
            angular.element('body').scope().currState = '/views/' + v.state + '.html';
            angular.element('body').scope().$digest();
            $('#main-view').fadeIn(300);
        })
    }
});

app.controller('mainCont', function($scope) {
    $scope.currState = 'views/home.html';
  
})
app.controller('navCont', function($scope) {
    $scope.navs = [{
        state: 'home',
        desc: 'Home'
    }, {
        state: 'pract',
        desc: 'Practice Areas'
    }, {
        state: 'cases',
        desc: 'Noteworthy Cases'
    }, {
        state: 'pub',
        desc: 'Publications/Lectures'
    }, {
        state: 'contact',
        desc: 'Contact'
    }];
    $scope.chVw = function(v) {
        console.log('v',v)
        $('#main-view').fadeOut(300, function() {
            angular.element('body').scope().currState = '/views/' + v.state + '.html';
            angular.element('body').scope().$digest();
            $('#main-view').fadeIn(300);
        })
    };
})

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