const c = document.getElementById("canvas");
c.style.overflow='hidden'
c.style.backgroundColor = "rgba(0, 0, 0,0.1)";
// c.style.opacity = 0.1
// c.style.zIndex=-1;


let canvas = new fabric.Canvas('canvas');
canvas.isDrawingMode = true


const width = window.innerWidth;
const height = window.innerHeight;
canvas.setWidth(width);
canvas.setHeight(height);

fabric.Image.fromURL('rabbit.jpg', function(img) {
    
    // img.setWidth(500);
    // img.scale(3)
    const canvasHeight = window.innerHeight;
    console.log(canvasHeight,'hhhhh');
    const widthhh = (img.width * canvasHeight) / img.height
    console.log(widthhh,'wwwwwww');
    
    img.set({
        height: canvasHeight,
        width: widthhh, // Maintain aspect ratio
        left: (canvas.width - (img.width * canvasHeight) / img.height) / 2, // Center horizontally
        top: 0, // Align to the top,
        selectable:false
        
    });; // Set your desired width
    // img.scaleToHeight(window.innerHeight);
    
    // new fabric.Image.filters.Brightness({ brightness: 100 });
  
//     // apply filters and re-render canvas when done
    // img.applyFilters();
    
    canvas.add(img);
    // canvas.renderAll();
  });
// fabric.Image.fromURL('rabbit.jpg', function(img) {

//     // add filter
//     img.filters.push(new fabric.Image.filters.Grayscale());
  
//     // apply filters and re-render canvas when done
//     img.applyFilters();
//     // add image onto canvas (it also re-render the canvas)
//     canvas.add(img);
//   });
let rect = new fabric.Circle({
  left: 10,
  top: 100,
  fill: 'black',
  radius:50,
  selectable:true
});



canvas.add(rect,img1);
// canvas.renderAll()





