window.onload=function(){
    //create a key value pairs of colors
    const colors={
        'orange':'rgb(232, 109, 22)',
        'green' : 'rgb(15, 143, 15)',
        'red' : 'rgb(249, 8, 8)'
    };
    //select a bacground color
    var bg_color = colors['orange'];
    //console.log(bg_color);
    //create a function that will draw the circle
    function create(event){
        //console.log('mouse click!');
        let el=document.createElement('p');
        let size=Math.floor(Math.random()*(200-10+1))+10;
        //add styles to el
        el.style.position='absolute';
        el.style.left = event.clientX+'px';
        el.style.top=event.clientY+'px';
        el.style.width= size+'px';
        el.style.height= size+'px';
        el.style.backgroundColor=bg_color;
        el.style.borderRadius=Math.floor(size/2)+'px';

        //classname for the element that will be created
        el.className='round';

        //add el to the body after the last child
        document.body.appendChild(el);
    }
    //create an event listener for click to call the function create
    document.addEventListener('click',create);
    //reload the page by using document
    document.getElementById('reset').addEventListener('click',function(){
        window.location.reload();
    })
    //process the selected/clicked color and assigned it as background color
    var button=document.getElementsByClassName('btn');
    for(let i=0; i<3; i++){
        button[i].onclick=function(e){
            e.stopPropagation();
            highlight(colors[this.innerText]);
        }
    }
    //create a function that will render the selected color as bacground and as highlight color
    function highlight(color){
        bg_color = color;
        //set a highlight color using a shadow
        nodes = document.getElementsByClassName('round');
        for(let i = 0; i < nodes.length; i++){
            if (nodes[i].style.backgroundColor == bg_color){
                nodes[i].style.boxShadow ='10px 20px 30px black';
            }
        }
    }
    // create a function that will shrink the shapes and remove from the dom
    shrink= function(){
        nodes=document.getElementsByClassName('round');
        for (let i = 0; i < nodes.length; i++){
             let height=nodes[i].style.height.replace('px' , ''); //remonved px from hieght value
             let width=nodes[i].style.height.replace('px' , '');

             if(height<=0){
                nodes[i].remove();
             }else{
                nodes[i].style.height = Math.floor(height-2/2) + 'px';
                nodes[i].style.width = Math.floor(height-2/2) + 'px';
             }
        }
    }
    //cvalls the shrink function every after 75 millioseconds using set intervals
    setInterval(shrink, 100);

}