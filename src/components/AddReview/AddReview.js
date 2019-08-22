
import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            // file: null
        }
    }
    // handleChange = (e) => {
    //     this.setState({name: e.target.value})
    // }
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const user = {
    //         name: this.state.name
    //     };
    //     console.log(e);
    //     console.log(user);
    //     // console.log(name);

    //     axios.post('https://localhost:44375/api/images', {user})
    //         .then(res => {
    //             console.log(user);
    //             // console.log(name);
    //             console.log(res);
    //             console.log(res.data);
    //         })
    // }
    

    
    // onClickHandler = (e) => {
    //     console.log(e.target)
    //     const data = new FormData()
    //     data.append('files', this.state.selectedFile)
    //     // console.log(this.state.selectedFile);
    // axios.post("https://localhost:44375/api/images", data, {
    // })
    // .then(res => {
    //     console.log(res.statusText)
    // })
    // }


    onChangeHandler = (e) => {
        console.log(e.target)
        this.setState({
            selectedFile: e.target.files[0],
            loaded: 0,
        })

        console.log(e.target.files[0])
    }


    handleFileSelect = (e) => {
        let reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            var binaryData = e.target.result;
            var base64String = window.btoa(binaryData);            
            axios({
                method: 'POST',
                url: 'https://localhost:44375/api/images',
                data: {img: base64String},
                headers: {
                    'Content-Type': 'application/json'
                }})
            .then(res => {
                console.log(res.statusText)
                alert('File converted to base64 successfuly!\nCheck in Textarea');
            })
            .catch(error => {
                console.log(error)
            })
          };
        })(this.state.selectedFile);
        reader.readAsBinaryString(this.state.selectedFile);
      }
  
   

  

    render() {
        return (
            <div>     
                <Header/>           
                <input type="file" name="img" id="img" onChange={this.onChangeHandler}/>
                {/* <button type="button" onClick={this.onClickHandler}>Upload</button> */}
                <button type="button" onClick={(e) => this.handleFileSelect(e)}>File Select</button>
            </div>
        )
    }
}

export default AddReview; 


//delete om annan lösning fungerar
{/* <form onSubmit={this.handleSubmit}> 
                    <input type="file" name="fileupload"/> 
                    <br/>
                    <input type="submit" />
                </form> */}