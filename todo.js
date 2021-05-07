
$("#logout").click(function(){
    window.location.replace("index.html");
})


        let count=0;
    $("#table").on("change", ":checkbox", function () {
        //$(":checkbox").on("click", function () {
       
        
          //  if($(':checkbox').is(':checked')) {
               
     
                if(this.checked) {    
                 
                 count++;
                
            }
            if(this.checked===false){
                ///count--;
                count--;
            }
            // if(this.readyState){
            //     count--;
            // }
            var promise2 = new Promise(function (resolve, reject) {
            if(count==5){
                resolve("Congrats! 5 Tasks have been successfully completed!");   
             }
             
        });
    
  
    promise2
                .then(function (r) {
                    alert(r);
                    //count = [];
                })
                
            
     });
    
    
    


$("#todo").click(function(){loadtable();});
 function loadtable(){
     $("body").css("background-image","url(./Images/people-making-list-illustration_53876-64623.jpg)");
 var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        let List=JSON.parse(this.responseText);
       let output="<center><h2>Your To Do List is here!!!</h2><table><tr><th>ID</th><th>Title</th><th>Status</th></tr>";
       for (let i = 0; i < List.length; i++) {
       output+="<tr><td>"+List[i].id+"</td>";
       output+="<td>"+List[i].title+"</td>";
     output+="<td><input type='checkbox' id='checkbx'"+((List[i].completed==true) ? 'checked disabled' : '')+"></td>";
     // output += "<td><input type='checkbox' id='chkbox"+ List[i].id +"'" + ((List[i].completed == true) ? 'checked disabled' : '') + " ></td>";
      output+="</tr>"
       }
    output+="</center></table>"
    $("#table").html(output);
}
    }

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
 }
//     }
//  catch (e) {
//     document.getElementById("listdiv").innerHTML = e;
// }
// $("#logoutid").click(function(){location.replace("index.html");});

// });

//  $("").change(checkfive());
// function checkfive(){
//     if($(":checkbox").change("checked","true")){
//         alert("checked!");
//     }
// }
$("#logout").click(function(){
    window.location.replace("index.html");
})