public var timer : float;


function OnTriggerEnter() 
{
    
    Destroy(gameObject);
   //objectWithOtherScript.GetComponent.< script1 >().someVariable = someNumber;
   GUIText.Timer.timer = 0; 
}