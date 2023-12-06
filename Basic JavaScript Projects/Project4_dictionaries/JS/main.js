function my_Dictionary() {
    var Animal = {
        group:"vertebrate",
        class:"mammal",
        species:"dog",
        color:"black",
        breed:"labrador",
        age:5,
        sound:"bark!"
    };
    delete Animal.breed;
    document.getElementById("Dictionary") .innerHTML ="The " + Animal.species + " is a " + Animal.breed + " breed";
}
