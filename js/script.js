const blueDish = document.querySelector("#dish-back1");
const greenDish = document.querySelector("#dish-back2");
const modusDish = document.querySelector("#dish-back3");
const haloDish = document.querySelector("#dish-back4");

blueDish.addEventListener('mouseenter', function(){
    blueDish.style.width ="960px";
    greenDish.style.width ="320px";
    modusDish.style.width ="320px";
    haloDish.style.width ="320px";
});

blueDish.addEventListener('mouseleave', function(){
    blueDish.style.width ="480px";
    greenDish.style.width ="480px";
    modusDish.style.width ="480px";
    haloDish.style.width ="480px";
});

greenDish.addEventListener('mouseenter', function(){
    greenDish.style.width ="960px";
    blueDish.style.width ="320px";
    modusDish.style.width ="320px";
    haloDish.style.width ="320px";
});

greenDish.addEventListener('mouseleave', function(){
    greenDish.style.width ="480px";
    blueDish.style.width ="480px";
    modusDish.style.width ="480px";
    haloDish.style.width ="480px";
});

modusDish.addEventListener('mouseenter', function(){
    modusDish.style.width ="960px";
    blueDish.style.width ="320px";
    greenDish.style.width ="320px";
    haloDish.style.width ="320px";
});

modusDish.addEventListener('mouseleave', function(){
    modusDish.style.width ="480px";
    blueDish.style.width ="480px";
    greenDish.style.width ="480px";
    haloDish.style.width ="480px";
});

haloDish.addEventListener('mouseenter', function(){
    haloDish.style.width ="960px";
    blueDish.style.width ="320px";
    greenDish.style.width ="320px";
    modusDish.style.width ="320px";
});

haloDish.addEventListener('mouseleave', function(){
    haloDish.style.width ="480px";
    blueDish.style.width ="480px";
    greenDish.style.width ="480px";
    modusDish.style.width ="480px";
});
