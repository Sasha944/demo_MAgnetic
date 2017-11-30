var $addUser =  jQuery("#AllUser");
var $selectedUser = jQuery("#SelectedUser");
var $lead = jQuery("#teamLead");

$(".btnclick").click(function() {

    if(document.getElementById("SelectedUser").value==""){
        toastr.error("Please select a user");
    } else{
        $lead.append("<option>"+$selectedUser.val()+"</option>");
        $lead.val(jQuery("#teamLead>option").last().text());
        toastr.success("Team Lead are selected");
    }
});
jQuery(".refresh").click(function(el){
    el.preventDefault();
    $selectedUser.append("<option>"+$addUser.val()+"</option>");
    jQuery("#SelectedUser").val(jQuery("#SelectedUser>option").last().text());
    toastr.success("User are selected");
});
jQuery(document).ready(function(){
    jQuery(".all-user").val("Stepan");
    $( function() {
        $( "#tabs" ).tabs();
    } );
    for(var i = 0; i <=username.length; i++){
        console.log(username[i].name);
        $addUser.append("<option>"+username[i].name+"</option>");
    }

});
var username = [
    {
      name: "Alex"
    },
    {
        name: "Oksana"
    },
    {
        name: "Andrij"
    },
    {
        name: "Stepan"
    },
    {
        name: "Yuuri"
    },
    {
        name: "Nelia"
    }
];