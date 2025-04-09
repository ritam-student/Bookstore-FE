function getNewsImg(name){
    return new URL(`../assets/news/${name}` , import.meta.url);
}


export {getNewsImg};


/***
 * function getImgUrl (book){
        return new URL (`../assets/books/${book.coverImg}`, import.meta.url);
    }
 */