document.addEventListener("DOMContentLoaded",()=>{
    var all=document.getElementById('all')
    var allvalue=document.getElementById('allvalue')
    var container=document.getElementById('container-2')
    var code=document.getElementById('code')
    var border_value=document.getElementById('border_style')//
    var button=document.getElementById('btncopy')
     border="solid"
    
    
    function update(){
       radius=all.value
       allvalue.innerText=radius+"px"
    
       coding=`border-radius:${radius}px;
    border:10px ${border} skyblue`
       code.value=coding
       container.style.cssText=coding
    }
    all.addEventListener("mousemove",update)
    all.addEventListener("change",update)
    update()
    border_value.addEventListener("change",function(){
    border=border_value.value
    update()
    
    })
    
    button.addEventListener("click",function(){
       document.querySelector('textarea').select()
       document.execCommand('copy')
       alert("copied")
    })
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // document.addEventListener("DOMContentLoaded",()=>{
    //     var btncopy=document.getElementById('btncopy')
    //     var conntainer=document.querySelector('.container-2')
    //     var allbordrer=document.getElementById('all')
    //     var  allvalue=document.getElementById('allvalue')
    //   var code=document.getElementById('code')
    //   var border_styleelemnet=document.getElementById('border_style')
    // var border="ridge"
    
    // function allborderupdate(){
    //    var all_radius=allbordrer.value
    //      allvalue.innerText=all_radius+"px"
    //      var coding=   
    //     `border-radius:${all_radius}px;   
    // border:${all_radius}px ${border} red`;     ;
    //      code.value=coding
    //      conntainer.style.cssText=coding;
        
    // }
    // allbordrer.addEventListener("mousemove",allborderupdate)
    // allbordrer.addEventListener("change",allborderupdate)
    // btncopy.addEventListener('click',()=>{
    //     document.querySelector('textarea').select()
    //     document.execCommand('copy')
    //     alert('codecopy')
    // })
    // allborderupdate()
    // border_styleelemnet.addEventListener('change',function(){
    //     border=this.value
    //     allborderupdate()
     
    // })
    
    
    // })