window.onload = function()
{
    //var linkGg = document.getElementById("linkgg");
    var links = document.getElementsByTagName("a");
    var count = 0;
    var countimg = 0;
    var imgslide = [];
    
    for(let item of links)
    {
        
        let img = new Image();
        img.src = item.href;
        img.name = "Hình " + (countimg);
        countimg++;
        imgslide.push(img);
        // item.onclick = function(e)
        // {
        //     e.preventDefault();
        //     document.getElementById("img-show").src = img.src;
        // }
    }
    
    myVar = setInterval(function(){
        count = ++count;
        document.getElementById("img-show").src = imgslide[count%3 + 1].src;
        document.getElementById("imgname").innerHTML = imgslide[count%3 + 1].name;
        //document.getElementById("count").innerHTML = count;
    }, 1000);
}