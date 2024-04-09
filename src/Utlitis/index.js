import toast from "react-hot-toast";
export const getBooks = () => {
    let service = [];
    const storageBooks =localStorage.getItem('services')
    if(storageBooks) {
        service = JSON.parse(storageBooks)
    }
    return service
}
export const saveBooks = book => {
    let services = getBooks()
    const isExiting = services.find(b => b.id === book.id)
    if (isExiting){
        return toast.error("Already have!.")
    }
    services.push(book)
    localStorage.setItem('services', JSON.stringify(services))
    toast.success("Service Add successfully")

}