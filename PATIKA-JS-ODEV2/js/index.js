function newElement(){

    let deger = document.getElementById("task").value;
    let temizdeger = deger.trim();

    if(temizdeger.length !== 0){

        const element = document.getElementById("task").value;
    
        const list = document.getElementById("list");

        const task = document.createElement("li");
        task.textContent = element;

        list.appendChild(task);

        const icon = document.createElement("i"); 
        icon.classList.add("fas", "fa-times", "close");
        icon.id = 'delete';
        icon.style.color = "#0d0d0d";
        

        task.appendChild(icon);

        document.getElementById("task").value = "";

        Toast_info("Görev Başarıyla Eklendi !!!")
    }
    else{
        
        document.getElementById("task").value = "";

        Toast_info("Lütfen Bir Değer Giriniz !!!");

    }
}


function deleteElements(){

    const deleteButtons = document.getElementById("delete");

    deleteButtons.addEventListener("click", (e) => {

        const listItem = deleteButtons.parentElement;
        listItem.remove();
        console.log("tıklandı");

    })
}




function Task_complate(){

    let myList = document.getElementById("list");
    let listItems = myList.getElementsByTagName("li");

    // Her liste öğesi için olay dinleyicisi ekleme
    for (let i = 0; i < listItems.length; i++) {

        listItems[i].addEventListener("click", function() {
           
            this.classList.toggle("checked");

        });
        
    }   

}





function Toast_info(info) {

    var myToast = new bootstrap.Toast(document.getElementById('myToast'));
    
    document.getElementById('myToast_Body').textContent = info;
        
    myToast.show();


}