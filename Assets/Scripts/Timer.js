
public static var timer: float = 15; // set duration time in seconds in the Inspector

var Player : GameObject ;
function Start()
{
	timer = 15;
}
public function Update(){
  timer -= Time.deltaTime;
  if (timer > 0){
    GetComponent.<GUIText>().text = timer.ToString("F2");
  	} 
  else {  	
    GetComponent.<GUIText>().text = "TIME OVER\nPress X to restart";
    
    Player.GetComponent(CharacterController).enabled = false;
    
    
    if (Input.GetKeyDown("x")){ // reload the same level
    	 Application.LoadLevel(Application.loadedLevel);
    	
    }
	
  }
  
}