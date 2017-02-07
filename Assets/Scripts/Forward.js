
var MoveDirection:Vector3;
var speed : float = 10;

function Update () {

var controller : CharacterController = GetComponent(CharacterController);
MoveDirection = transform.forward;
MoveDirection *= speed;
controller.Move(MoveDirection * Time.deltaTime);
// Bonus speed // 
//speed = speed + (Time.deltaTime * 1.1);
      }