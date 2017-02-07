var time : GameObject ;
var victory : GameObject;
var Gametime : GameObject;
var Showtime : GameObject;


function OnControllerColliderHit (hit : ControllerColliderHit) {

if(hit.gameObject.tag == "Checkpoint")
	{
  	Destroy(hit.gameObject);
  
  var scriptGameObject = time.GetComponent("Timer");// as nameofthescript;
  scriptGameObject.timer += 15;
  // scriptGameObject.timer;
  // Debug.Log(scriptGameObject.timer); //scriptGameObject.methodYouWant();
 
	}
	
if(hit.gameObject.tag == "Respawn")
{
//Debug.Log("Restart");
//scriptGameObject.timer == 0;
Application.LoadLevel(Application.loadedLevel); //reset this level.
}

if(hit.gameObject.tag == "Win")
{
//Debug.Log("Restart");
//scriptGameObject.timer == 0;

victory.SetActive(true);
Gametime.SetActive(false);
Showtime.SetActive(true);

yield WaitForSeconds (2);
Application.LoadLevel(Application.loadedLevel); //reset this level.
}

}
 