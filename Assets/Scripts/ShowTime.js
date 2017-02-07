var GameTime : GameObject;

public function Update(){
  
    var scriptGameObject = GameTime.GetComponent("GameTime");// as nameofthescript;
  //Debug.Log(scriptGameObject.Gametime) ;
   
   var time;
   time = scriptGameObject.Gametime.ToString("#.00");
   GetComponent.<GUIText>().text = "Total Time: " + time;
   
  //guiText.text = scriptGameObject.Gametime("F00");
 
}