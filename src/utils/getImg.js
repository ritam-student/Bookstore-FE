function getImgUrl (book){
    return new URL(`../assets/books/${book.coverImage}` , import.meta.url)
}





export {getImgUrl}