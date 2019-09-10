const app = angular.module('ghnSite',['ui.router']);

app.controller('caseCont', function($scope) {
    $scope.caseBlurbs = ["His very first federal jury trial, that of a man charged with hiding his two nephews who had escaped from Virginia's death row, resulted in a not guilty verdict (Johnnie Lee Council). In his first homicide case, he was able to convince the government's attorney that his client was a victim, and not the shooter, by having a bullet removed from his client's shoulder, which came from the shooter's gun, and was not a close-fired shot.", "Mr. Newman has successfully litigated appeals, which reversed the death sentences of Perry Poole, Michael LaCava (police killing), and Billy Brooks. He retried all three cases with successful results. None of these men returned to death row. He also represented one of two brothers charged in the most highly investigated police killing in Philadelphia history, preventing a death penalty. He has tried other murder cases to a not guilty (Darnell Murphy, Alex Hague), and even had a murder case discharged at a preliminary hearing on the grounds of self-defense.", "Mr. Newman successfully prevented an adult trial of a Long Island juvenile football player charged with the extreme hazing, including charges of sodomy, of younger football players while at a training camp in the Poconos. The youth was sent to a boot camp for several months.", "He represented the head of the Delaware Valley Pagans, who received a short sentence (27 months), for a daylight shooting in South Philadelphia, witnessed by over a dozen law enforcement agents, including the FBI.", "Mr. Newman tried the case of the owner of an ambulance company charged with taking diverted calls from a 911 dispatcher, gaining the dismissal of all felony charges.", "He successfully prevented the federal prosecution of the head of an alleged telemarketing scheme involving over $100 million.", "Mr. Newman represented a Berks County District Judge charged with obstruction of justice and destruction of evidence. A week-long jury trial resulted in a complete acquittal.", "Mr. Newman has represented a number of police officers. He was successful in having the harsh sentence of John Baird (initially represented by another attorney), the leader of the '39th District' police gang, reduced from 13 years to time-served.", "He recently convinced prosecutors not to charge a man with murder, who had fired his gun in self-defense.", "Just as notably, some of Mr. Newman's successes are cases in which, after vigorous pre-charge representation, no charges were filed against his clients. For example, Mr. Newman has represented students at the University of Pennsylvania, Drexel University, Pennsylvania State University, and Lehigh University who were falsely accused of rape. Mr. Newman has recently successfully convinced the U. S. Justice Department to not charge an attorney in a multi-million dollar Medicare fraud case."]
        //RE: "not to charge a man with murder who had fired his gun in self defense"... is this a bit vague? Yes, attorney client priviledge is a thing, but I almost feel this is going too far in the other direction. A little sort of "oh yeh, he, uh, wins stuff..."
    $scope.appeals = ["United States v. Davis, 322 F.Supp 2d 591 (ED. Pa. 2004) (No leadership role enhancement).", "United States v, Baird, 218 F.3d 221 (3d Cir. 2000) (prior counsel ineffective for failing to object to use of information provided by defendant per cooperation agreement)", "United States v. Medford, 194 F.3d 419 (3d Cir. 1999) (due process requires notice of intent to upwardly depart)", "Commonwealth v. Brooks, 839 A.2d 245 (Pa. 2003) (death penalty reversed, new trial granted)", "Commonwealth v. Fontanez, 739 A.2d 152 (Pa. 1999) (forfeiture reversal)", "Commonwealth v. Caine, 683 A.2d 890 (en banc Pa. Super 1996) (reversed and defendant discharged on homicide by vehicle while DUI)", "Commonwealth v. LaCava, 666 A.2d 221 (Pa. 1995) (death penalty reversed; life sentence on retrial)", "Commonwealth v.Perry, 644 A.2d 705 (Pa. 1994) (death penalty reversed, new trial granted)", "Commonwealth v. Ben Samuel, 590 A.2d 1245 (1991) (manslaughter conviction reversed, client discharged)","Commonwealth v. Garcia, 588 A.2d 951 (Pa. Super 1991) (improper to bring in evidence of expert’s opinion on whether or not behavior was consistent with that of rape victim)","Commonwealth v. Austin, 575 A.2d 141 (Pa. Super. 1990). (insufficient evidence for murder charges)","Commonwealth v. Butler, 552 A.2d 702 (Pa. Super 1988) (double jeopardy bars second trial on drug charges after acquittal on DUI charges)","Commonwealth v. Fultz, 462 A.2d 1340 (Pa. Super. 1983) (sexual assault conviction reversed due to the trial counsel’s failure to challenge young witness’ competency)"];

})

app.controller('contCont', function($scope, $http) {
    $scope.showCont = false;
    $scope.contInfo = [{
        lbl: 'Location',
        data: 'Suite 2126, The Land Title Building, 100 S Broad St, Philadelphia, PA 19110'
    }, {
        lbl: 'Phone',
        data: '215-592-9400'
    }, {
        lbl: 'Fax',
        data: '215-574-0699'
    }, {
        lbl: 'E-Mail',
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

app.controller('mainCont', function($scope,$window) {
    $scope.currState = 'views/home.html';
  	($scope.checkPhone = function() {
        var isMobile = false; //initiate as false
        // device detection
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
        console.log('isMobile:',isMobile,$window.location);
        var ignoreMobile=$window.location.search.indexOf('ignoreMob')>-1;
        if (isMobile && !ignoreMobile) {
            $window.location.href = 'mob.html';
        } 
    })();
})
app.controller('mobCont', function($scope) {
    $scope.currPan = 0;
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
	}];
	$scope.contInfo = [{
        lbl: 'Location',
        data: 'Suite 2126, The Land Title Building, 100 S Broad St, Philadelphia, PA 19110'
    }, {
        lbl: 'Phone',
        data: '215-592-9400'
    }, {
        lbl: 'Fax',
        data: '215-574-0699'
    }, {
        lbl: 'E-Mail',
        data: 'ghnlawyer@yahoo.com',
        isEm:true
    }];
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