console.log('scripts/poses/hadoken.js is available');
function hadoken(hero_object){
	if(hero_object.stamina_points >= 100){	
		hero_object.stamina_points -= 100;
		check_stamina(hero_object);
			hero_object.me.className = 'ken_hadoken_main';
				setTimeout(function(){
					hero_object.me.className += ' ken_hadoken_first';
					if(hero_object.x > 300){ 
					hero_object.x = 300; 
					move_horizontal(hero_object);
					}
						setTimeout(function(){
						hero_object.me.className += ' ken_hadoken_second';
						if(hero_object.x > 100){
							hero_object.x = 100;
							move_horizontal(hero_object);
						}									
							setTimeout(function(){
								hero_object.me.className = 'ken_breather_main';
							},500)
						},300);
				},300);
	}else{
		console.log(hero_object.id + ' does not have enough stamina to complete this move');
	}
}