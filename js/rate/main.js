function create(){
	config = {
	    mute: false,
	    volume: 1,
	    rate: 1,
	    detune: 0,
	    seek: 0,
	    loop: false,
	    delay: 0
	};

	music = this.sound.add('music', config);
	music.play(config);
	
	textRate = this.add.text(50, 50, 'Rate: ' + config.rate, {fontSize: '32px', fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
	textDetune = this.add.text(50, 120, 'Detune: ' + config.detune, {fontSize: '32px', fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
	textVol = this.add.text(50, 190, 'Volume: ' + config.volume, {fontSize: '32px', fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
	
	try{window.addEventListener('devicemotion', readAcc);} catch(e){}

    plugIns();
    //initAd();
}

function readAcc(event){
	accX = 0.1 + event.accelerationIncludingGravity.x / 12;
	accY = 0.1 + event.accelerationIncludingGravity.y / 12;
	accZ = 0.1 + event.accelerationIncludingGravity.z / 12;
	
	music.setRate(accX);
	music.setDetune(accY);
	music.setVolume(accZ);
	
	textRate.text = 'Rate: ' + accX;
	textDetune.text = 'Detune: ' + accY;
	textVol.text = 'Volume: ' + accZ;
}

function plugIns(){
	try{
		window.plugins.insomnia.keepAwake();
	} catch(e){}
	try{
	    StatusBar.hide();
	} catch(e){} 
}

function initAd(){
	admobid = {
    	banner: ''
    };
    
    if(AdMob) AdMob.createBanner({
	    adId: admobid.banner,
	    position: AdMob.AD_POSITION.TOP_BOTTOM,
    	autoShow: true
	});
}
