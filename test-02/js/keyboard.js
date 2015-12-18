/**
 * Created by oscardelgadillo on 12/17/2015.
 */
function Keyboard(){

    this.drawKeys = function () {
        var containerStr = '<div></div>';
        var containerEl = $(containerStr); //html element

        for(var i = 0; i < 26; i++) {
            var letter = String.fromCharCode(65 + i);
            var cellEl = $('<div class = "cell" id="'+letter+'">' + letter + '</div>');
            cellEl.on('click', eventKey);
            cellEl.on("mouseover",eventSilver);
            cellEl.on("mouseleave",eventWhite);
            containerEl.append(cellEl);
        }

        var cellEl = $('<div class = "cell" id="reset"> RESET </div>');
        cellEl.on('click',eventKey);
        cellEl.on("mouseover",eventSilver);
        cellEl.on("mouseleave",eventWhite);
        containerEl.append(cellEl);

        var cellEl = $('<div class = "cell" id="space" > SPACE </div>');
        cellEl.on("mouseover",eventSilver);
        cellEl.on("mouseleave",eventWhite);
        cellEl.on('click',eventKey);
        containerEl.append(cellEl);

        $('.keys').append(containerEl);
    };

}

var eventKey = function (e) {
    var valueId = $(this).attr("id");

    if (valueId == 'space'){
        $('.display').append(" ");
    }
    else{
        if(valueId == 'reset'){
            $('.display').empty();
            $('.display').css('padding',10);
        }
        else{
            $('.display').append(valueId);
            $('.display').css('padding',1);
        }
    }

};

var eventSilver = function(){
    var valueId = $(this).attr("id");
    $('#'+valueId+'').css("background-color", "silver");
};

var eventWhite = function(){
    var valueId = $(this).attr("id");
    $('#'+valueId+'').css("background-color", "white");
};



