var photos = [
'https://upload.wikimedia.org/wikipedia/commons/7/74/Monet_dejeunersurlherbe.jpg', 
'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
'https://blog.singulart.com/wp-content/uploads/2019/08/the-persistence-of-memory-1931.jpg'
];

var inputValue = $(".inputName").val();

photos.forEach(function(a,b){

$(".art").append("<img src=" + photos[b] + ">");
    
});

$("button").click(function() {

var link = $(".inputName").val();

photos.push(link);

console.log(photos);

$(".art").empty();


photos.forEach(function(a,b){
    

$(".art").append("<img src=" + photos[b] + ">");

             $(".inputName").val("");
    
});
 
});



