

const starwarsAPI = {
    getInfo(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(result => result.json())
            .then(json => resolve(json))
            .catch(err => reject(err));
        });
    },
    getInfoById(path) {
      var url = path;
    console.log(path) 
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(result => result.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    },
    getJson(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(result => result.json())
            .then(json => resolve(json))
            .catch(err => reject(err));
        })
    }
}
export default starwarsAPI;