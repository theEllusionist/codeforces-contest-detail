import React from "react";
import moment from "moment";

class Cards extends React.Component{
    time_coverter =(num)=>{
        const hours = Math.floor(num / 3600);
        num%=3600;
        const minutes = num % 60;
        return hours + "Hr " + minutes +"Min";
    }
    relative_time = (num)=>{
        const now =new Date()
        const secondsSinceEpoch = Math.round(now.getTime() / 1000) -num
        return moment.unix(secondsSinceEpoch).fromNow()
    }
    render() {
        const dataList = (this.props.data.length)?(
            this.props.data.map(d=>{
                return(
                    <div className="col s12 m6 l6"  key={d.id}>
                        <div className="card z-depth-4" style={{marginTop:20 ,borderRadius:"40px 20px", backgroundColor:"#d2d2cf"}}>
                            <div className="card-stacked">
                                <div className="row" style={{backgroundColor:"eee4e1"}}>
                                    {(d.phase==="BEFORE"||d.phase==="CODING")&&
                                        <div>
                                             <div className="col s6 left" style={{border:"0px solid white"}}>
                                        <p style={{fontSize:"16pxx"}} ><b>{d.name}</b></p>
                                                 {/*<p style={{fontSize:"16pxx"}} >{d.name.length}</p>*/}
                                    </div>

                                         <span className=" col s2 right card-panel pull-s2 light-green accent-3 badge center">On</span>
                                            </div>

                                    }
                                    {d.phase!=="BEFORE"&&d.phase!=="CODINF"&&
                                    <div className="col s12 left" style={{border:"0px solid white"}}>
                                        <p style={{fontSize:"16pxx"}} ><b>{d.name}</b></p>
                                        {/*<p style={{fontSize:"16pxx"}} >{d.name.length}</p>*/}
                                    </div>
                                    }
                                </div>
                                <div className="row" style={{marginTop:-20}}>
                                    <div className="col s4">
                                        <ul>
                                            <li className="condensed light">Started On</li>
                                            <p><b>{moment.unix(d.startTimeSeconds).format('MMMM Do YYYY, h:mm:ss a')}</b></p>

                                        </ul>
                                    </div>
                                    <div className="col s4">
                                         <ul>
                                            <li className="condensed light">Duration</li>
                                             <p><b>{this.time_coverter(d.durationSeconds)}</b></p>

                                        </ul>
                                    </div>
                                    <div className="col s4">
                                         <ul>
                                            <li className="condensed light">Type</li>
                                             <p><b>{d.type}</b></p>

                                        </ul>
                                    </div>

                                </div>
                                {(d.phase==="BEFORE"||d.phase==="CODING")&&
                                    <div className="row card-action" style={{marginTop:-26}} >
                                     <div className="col s12 push-s2" style={{marginTop:-10}}>
                                         <div className="col s12 pull-s3" style={{display:"inline"}}>
                                             <p className="condensed light s6">Until Coming <b>{this.relative_time(d.relativeTimeSeconds)}</b></p>
                                         </div>

                                    </div>
                                </div>
                                }
                                {(d.phase!=="BEFORE"&&d.phase!=="CODING")&&
                                <div className="row card-action" style={{marginTop:-26}}>
                                     <div className="col s12 push-s2" style={{marginTop:-10}}>
                                         <div className="col s12 pull-s3" style={{display:"inline"}}>
                                             <p className="condensed light s6">Before Registeration <b>{this.relative_time(d.relativeTimeSeconds)}</b></p>
                                         </div>

                                    </div>
                                </div>
                                }

                            </div>
                        </div>
                    </div>

                )
            })
        ):(
            <div>
            </div>
        );
        return(
            <div>

                <div className="row" style={{marginTop:50}} >
                        {dataList}
                </div>
            </div>
)
    }
}
export default Cards