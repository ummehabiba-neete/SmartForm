// Your jQuery goes here

 
var userData={};
if (localStorage.getItem ('userData'))
{
userData=JSON.parse(localStorage.getItem('userData')) ;
$('.qustion').hide();
$('#'+userData.currentQustion).show();
$("#name").val(userData.name);
$("#email").val(userData.email)};

else 
{
userData = {
name:"test",
email:"",
html:{likes:[],dislikes:[]},
css:{likes:[],dislikes:[]},
js:{likes:[],dislikes:[]},
strength:{html:"",css:"",js:""},
currentQuestion:"welcome"
};

localStorage.setItem('userData',JSON.stringify(userData));

$("#startBtn").click(function(event)
{

$("#welcome"). hide();
$("#q1").show;
});


$("#name").change(function(event)){

	console.log($("# name").val());
});
$("#email").change(function(event)){
	console.log($("# email").val());
	if ($("#email").val()!="" && $("#name").val())
		$("#q1Next").prop ("disabled",false);}
});
$("#q1Next").click(function(event))
{userData.name=$("#name").val();
userData.email=$("#email").val();
userData.currentQuestion="q1";
localStorage.setItem('userData',JASON.stringify(userData));
$("#q1").hide();
$("#q2").show();
});
$("#htmlQ").click(function(event){

$("#q2").hide();
$("#q2b").show();

});
$("#jsQ").click(function(event){

$("#q2").hide();
$("#q2c").show();

});


$(".prevQ2") .click(function(event)
{
$("#q2") .show();
$(this).parent().parent().parent()hide();

});