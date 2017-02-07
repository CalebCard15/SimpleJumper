public static var Gametime : float = 0; // set duration time in seconds in the Inspector
//public static var StringTime = "";
function Start()
{
Gametime = 0;
}
public function Update(){
  Gametime += Time.deltaTime; 
  //StringTime = Gametime.ToString("#.00");
  GetComponent.<GUIText>().text = Gametime.ToString("0.00");
}