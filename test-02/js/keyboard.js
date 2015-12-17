/**
 * Created by oscardelgadillo on 12/17/2015.
 */
function Keyboard(){

    this.cell = [];

    this.drawKeys = function () {
        var w = 560;

        var containerStr = '<div></div>';
        var containerEl = $(containerStr); //html element
        for(var i = 0, total = 13, letter=0 ; i < total; i++){

            for(var j = 0; j < 2; j++){
                var cellEl = $('<div class = "cell">'+ String.fromCharCode(65+letter) +'</div>');
                cellEl.on('click',eventKey);
                containerEl.append(cellEl);
                letter++;
            }
        }
        var cellEl = $('<div class = "cell"> RESET </div>');
        cellEl.on('click',eventKey);
        containerEl.append(cellEl);
        var cellEl = $('<div class = "cell"> SPACE </div>');
        cellEl.on('click',eventKey);
        containerEl.append(cellEl);

        $('.keys').append(containerEl);

    };

}

var eventKey = function (e) {
        //if(e.target.id == 'space')
            $('.display').val($('.display').val()+" ");
        //if(e.target.id == 'reset')
        //    $('#display').val("");
};


