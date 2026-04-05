window.onload = () => {
   
 
 class raytracing {
   constructor(){}
   drawwall(ctx: CanvasRenderingContext2D, x1: number, y1: number,x2:number,y2:number):{start:[number,number],end:[number,number]}{
     ctx.strokeStyle = "white";
     ctx.beginPath();
     ctx.moveTo(x1+250,y1);
     ctx.lineTo(x2,y2);
     ctx.stroke();
     return {start:[x1,y1],end:[x2,y2+300]};
   }
  drawrays(ctx: CanvasRenderingContext2D, mousex: number, mousey: number):{pointx:number,pointy:number,mousex:number,mousey:number}|undefined {
    for (let i = 0; i <= 60; i++) {
    const radius=200;
    let theta=(i/60)*2*Math.PI;
    let pointx=mousex+Math.cos(theta)*radius;
    let pointy=mousey+Math.sin(theta)*radius;
    ctx.beginPath();
    ctx.strokeStyle="white";
    ctx.moveTo(pointx,pointy);
    ctx.lineTo(mousex,mousey);
    ctx.stroke();
    return {pointx,pointy,mousex,mousey};

    }

  
  // lineintersaction(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): number|undefined {
  //   let px;
  //   const num=(x1*y2-y1*x2)-(x3-x4)-(x1-x2)*(x3*y4-y3*x4);
  //   const dem=(x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);
  //   if (dem === 0) {
  //     return 0; // Lines are parallel
  //   }
  //     px =num/ dem;
  //   console.log (px);
    

  // }
}   




 }

  console.log("my friist project"); 
  const canvas=document.getElementById("canvas")as HTMLCanvasElement ;
  if (canvas ==null) throw new Error("canvas is undefine");  
  canvas.setAttribute("width","400");
  canvas.setAttribute("height","400");
  const ctx=canvas.getContext("2d");
  if (ctx ==null)throw new Error("context is not available");
  const ray = new raytracing();
  const centerLine1 = canvas.width/2+80;
  const centerLine2 = canvas.width/2;





  
 
  
  
    
   setInterval(()=>{   
        let x1 = Math.random() * canvas.width;
        let y1 = Math.random() * canvas.height;
        let x2 = Math.random() * canvas.width;
        let y2 = Math.random() * canvas.height; 
       for (let i = 0; i < 10; i++) {     
        ray.drawwall(ctx,x1,y1,x2,y2);
       }
    },9000);
 
   canvas.addEventListener("mousemove",(e)=>{
   let mousex=e.offsetX;
   let mousey=e.offsetY;
   ctx.clearRect(0,0,canvas.width,canvas.height);

  //  ray.drawwall(ctx, mousex, mousey);
   ctx.beginPath();
   ctx.arc(mousex, mousey,120,0,2*Math.PI); 
   ctx.lineWidth=1;
   ray.drawrays(ctx, mousex, mousey);
   // returns {start: [x1, y1], end: [x2, y2]}
   // returns {start: [mousex, mousey], end: [rayEndX, rayEndY]}

   
 
   
  })
  

   // Start the animation loop
 
  
  
     


 
  
 
 
  
 
  

  
                                    
}