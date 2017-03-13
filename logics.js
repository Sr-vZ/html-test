/* var grid=[1,2,3,4,5,6,7,8,9];

var k = 1;

for(var i=0;i<10;i++)
    grid[i]=document.getElementById('cell'+ k++);

var g=[9];

for(i=0;i<10;i++)
    g[i]=i;




console.log(grid);

*/

//var player=true;
var clk=0;
var fill=0;
var w_comb=[[1,4,7],[1,2,3],[1,5,9],[2,5,8],[3,5,7],[3,6,9],[4,5,6],[7,8,9]];

function resetGame()
{
    $('.grid').html(" ");
    fill=0;
    
}

function check_win(sym)
{
    var cg=$('.grid').text();
    cg=' ' + cg;
    for(var i=0;i<w_comb.length;i++)
    {
       if(cg[w_comb[i][0]]==sym && cg[w_comb[i][1]]==sym &&         cg[w_comb[i][2]]==sym)
       {
        alert(sym + " WINS !!!");
        resetGame();
       }
    }
    

}
/*
function p_toggle(player)
{
    if(player===true)
    {return play[0];player=false;}
    else
    {return play[1];player=true;}
}
*/
var play = ['X','O'];
var turn=["ai","player"];
var g_event="player";



function game(e) {
    clk++;
    fill++;
    var g,cell,t;
    
    g=e.target.id;

    //alert("Clicked "+e.target.id);
    console.log(g);
    cell='#'+g;
    //t=p_toggle(true);
    
        if(clk%2===1)    
            $(cell).html("X");
        else
            $(cell).html("O");
    
    
    if(fill==9)
        {
            fill=0;
            var y=confirm(":( Game Over !!! Play again?");
        }
    
    if(y===false)
        {alert("BYE ! BYE !");}
    
    if(y===true)
        {resetGame();}
        
            

    

}

function loading_effect() {
    //$('#tbl').hide();
    $('.spinner').hide();
    $('#tbl').css("visibility", "visible");

}

$(document).ready(function () {
//$('#tbl').hide;
    $('.grid').html(" ");
    
    setTimeout(function() {
        loading_effect();
}, 5000); // <-- time in milliseconds

    
    
    $(".grid" ).click(function (e) { 
        check_win('X');
        check_win('O');
        game(e);
         });
    
});

