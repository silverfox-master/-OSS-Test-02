class apiClient {
    loadItems(key){
         return JSON.parse(window.localStorage.getItem(key))
    };
      
    saveItems(key,value){
        window.localStorage.setItem(key,JSON.stringify(value))
        return true
    } 
    
  };
export default new apiClient();
