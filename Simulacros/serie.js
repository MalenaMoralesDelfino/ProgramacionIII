export default class Serie {
    _id;
    _url;
    _name;
    _language;
    _genres;
    _image;
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get url() {
        return this._url;
    }
    set url(value) {
        this._url = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get genres() {
        return this._genres;
    }
    set genres(value) {
        this._genres = value;
    }
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }

    constructor(id, url, name, language, genres, image) {
        if (typeof id == "number") {
            this._id = id;
        }
        if (typeof url == "string") {
            this._url = url;
        }
        if (typeof name == "string") {
            this._name = name;
        }
        if (typeof language == "string") {
            this._language = language;
        }
        if (genres instanceof Array) {
            this._genres = genres;
        }
        if (image instanceof Object) {
            this._image = image;
        }
    }
    toJsonString() {
        return JSON.stringify(this);
    }
    toJSON() {
        return {
            id: this._id,
            genres: this._genres,
            image: this._image,
            language: this._language,
            name: this._name,
            url: this._url
        }
    }
    static createFromJsonString(json) {
        let serie = new Serie(parseInt(json.id), json.url, json.name, json.language, json.genres, json.image);
        return serie;
    }
    createHtmlElement() {
        let newNode;
        newNode = document.createElement("p");
        let texto;
        if(this._name !== "Not Found"){
            texto = `>Nombre: ${this._name} \n>Idioma: ${this._language} \n>Genero: ${this._genres}\n>Imagen: ${this._image}>`
        }
        else{
            texto = "La serie no existe en la api."
        }
        newNode.innerText = texto;
        newNode.style.margin = "5px";
        newNode.style.padding = "5px";
        newNode.style.border = "1px solid black";
        return newNode;
    }
}
