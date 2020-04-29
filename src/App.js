import React from 'react';
import Navbar from "./Components/Navbar";
import axios from 'axios';
import Cards from "./Components/Card";
import Pages from "./Components/Pages";
import {BrowserRouter} from "react-router-dom";

class App extends React.Component{
    state={
        search:"",
        data:[],
        currentPage:1,
        postPerPage:50,
        totalPosts:null,
    };
    componentDidMount() {
        axios.get('https://codeforces.com/api/contest.list')
            .then((res)=>{
                const dataList = res.data.result.filter(data=>{
                    return data.name.length<=83
                })
                this.setState({
                    data:dataList,
                    totalPosts:dataList.length
                });
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    onSearch = (e)=>{
        this.setState({
                search:e.target.value
        })

    }
    render() {
        const {currentPage,postPerPage,totalPosts} = this.state
        const lastIndex=currentPage*postPerPage
        const firstIndex =lastIndex-postPerPage
        const currentPost =this.state.data.slice(firstIndex,lastIndex)
        const totalPages = totalPosts/postPerPage
        const paginate=(number)=>{
                this.setState({
                    currentPage: number,
                    search:"",
                })
        }
        let filteredData=currentPost.filter(data=>{
                return data.name.toLowerCase().includes(this.state.search.toLowerCase())
        })
        return(
            <BrowserRouter>
            <div style={{backgroundColor:"#252422"}}>
                <Navbar/>
                <div className="row container">
                    <div className="col center s10 push-s1 white" style={{border:"2px solid white",marginTop:20,borderRadius:"10px"}} >
                        <input type="text" onChange={this.onSearch} placeholder="Search..."/>
                    </div>
                </div>
                <Pages totalPages={totalPages} paginate={paginate}/>
                <div style={{marginLeft:70,marginRight:70,marginTop:-50}}>
                    <Cards data={filteredData}/>
                </div>

            </div>
            </BrowserRouter>
        )
    }
}

export default App;
