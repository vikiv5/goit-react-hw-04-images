import React, {useState} from "react";
import fetchImgApi from "./Api";
import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import { Loader } from "./Loader/Loader";
import {Button} from "./Button/Button"


const App = () => { 

  const [searchQuery, setSearchQuery]=useState ("") 
  const [items, setItems] = useState [items]
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState (1)
  const [totalhits, setTotalhits] = useState (200)

  const onOpenModalWithLargeImage = (url) => {
    this.setState({
      currentLargeImageURL: url,
    })}

    onModalClose = () => {
      this.setState({
        currentLargeImageURL: "",
      })

     const handleSearch = (searchQuery) => {
      setSearchQuery (searchQuery),
      setItems[items], 
      setIsLoading (false), 
      setPage(1)
       }

    const onLoadMore =()=>{
      setPage ((page) => page +1 )
        
      }
  return(
    <>
    <Searchbar handleSearch={handleSearch}/>
    
    {isLoading &&<Loader/>}
    {items.length > 0 && <ImageGallery items={items} onClick={onOpenModalWithLargeImage}/>}
    {currentLargeImageURL && (<Modal onClose={onModalClose} url={currentLargeImageURL}/>)}
    {items.length >= 12 && items.length< totalhits && !isLoading && <Button onLoadMore={onLoadMore}/>}


</>
  )}
}
export default App 



  /*state = { 
   
    searchQuery:"" , 
    items : [],
    isLoading: false,
    page:1 ,
    totalhits : 200,
    
    

  }
  onOpenModalWithLargeImage = (url) => {
    this.setState({
      currentLargeImageURL: url,
    })
  }

  onModalClose = () => {
    this.setState({
      currentLargeImageURL: "",
    })
  }


 async componentDidUpdate (_, prevState) {
  ///const { searchQuery, page } = this.state;

if (prevState.searchQuery !==this.state.searchQuery||
  this.state.page !== prevState.page ) {
    try{
    this.setState({isLoading:true}) ;
    const data = await fetchImgApi(this.state.searchQuery, this.state.page)
    
  this.setState (state =>  ({
    items:[...state.items, ...data.hits]
  }));
  if (!data.total){
    alert ("sorry, no matches found")
  }
  }
catch (error){
  console.log (error)
  }

 finally{
  this.setState({isLoading:false})
 }}}


 handleSearch = (searchQuery) => {
  this.setState ({searchQuery,items : [], isLoading:false, error:false, page:1})
 }
onLoadMore =()=>{
  this.setState ((prevState) => ({
    page:prevState.page +1
  }))
}


 render()
 {
  const {handleSearch}=this;
  const {items, isLoading,totalhits,currentLargeImageURL} = this.state;
  return(
    <>
    <Searchbar handleSearch={handleSearch}/>
    
    {isLoading &&<Loader/>}
    {items.length > 0 && <ImageGallery items={items} onClick={this.onOpenModalWithLargeImage}/>}
    {currentLargeImageURL && (<Modal onClose={this.onModalClose} url={currentLargeImageURL}/>)}
    {items.length >= 12 && items.length< totalhits && !isLoading && <Button onLoadMore={this.onLoadMore}/>}
    
    

</>
  )}}*/ 