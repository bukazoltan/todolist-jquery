// Check Off Specific Todos by Clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(200, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Pressing Enter adds the textinput to the ul
$("#addBar").keypress(function (event){
    if (event.which === 13 && $(this).val() !== "") {
        //Grabbing text from input
        const todoText = $(this).val();
        $(this).val("");
        //Creating a new li and add to ul
        $("ul").append(`<li><span id="delete"><i class="fas fa-trash-alt"></i></span>${todoText}</li>`);

    } 
});

//
$("#plus").click(function() {
    console.log("clickicon");
    $("#addBar").fadeToggle(300);
});