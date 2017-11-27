var $addUser =  jQuery("#AllUser");
var $selectedUser = jQuery("#SelectedUser");

$(".btnclick").click(function() {
    $selectedUser.append("<option>"+$addUser.val()+"</option>");
    jQuery("#SelectedUser").val(jQuery("#SelectedUser>option").last().text())
    toastr.success("User are selected")
});
jQuery(document).ready(function(){
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