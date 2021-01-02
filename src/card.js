import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React , {Component} from 'react';
import axios from 'axios';


const body = {
    email: "harshyadav94250@gmail.com",
  };
  const config = {
      method : 'post',
      url : 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',

    headers: { 'Authorization': 'Bearer tTU3gFVUdP' },
    data : body
  };

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ood: 0,dex: 0,del: 0,int: 0,nfi: 0,data: [],filteredData: [],
      };
    }

    componentDidMount() {
        
        axios(config)
          .then((response) => {
            this.setState({ data: response.data }, () => this.handleFilter("DEL"));
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].current_status_code === "OOD"){
                    this.setState((prevState) => {
                        return {
                          ...prevState,
                          ood: prevState.ood + 1,
                        };
                      });
                }
                if (response.data[i].current_status_code === "DEL"){
                    this.setState((prevState) => {
                        return {
                          ...prevState,
                          del: prevState.del + 1,
                        };
                      });
                }
                if (response.data[i].current_status_code === "INT"){
                    this.setState((prevState) => {
                        return {
                          ...prevState,
                          int: prevState.int + 1,
                        };
                      });
                }
                if (response.data[i].current_status_code === "NFI"){
                    this.setState((prevState) => {
                        return {
                          ...prevState,
                          nfi: prevState.nfi + 1,
                        };
                      });
                }
                else{
                    console.log("gh",i)
                }
            //   switch (response.data[i].current_status_code) {
            //     case "OOD":
            //       this.setState((prevState) => {
            //         return {
            //           ...prevState,
            //           OOD: prevState.OOD + 1,
            //         };
            //       });
            //       break;
            //     case "DEL":
            //       this.setState((prevState) => {
            //         return {
            //           ...prevState,
            //           DEL: prevState.DEL + 1,
            //         };
            //       });
            //       break;
            //     case "INT":
            //       this.setState((prevState) => {
            //         return {
            //           ...prevState,
            //           INT: prevState.INT + 1,
            //         };
            //       });
            //       break;
            //     case "DEX":
            //       this.setState((prevState) => {
            //         return {
            //           ...prevState,
            //           DEX: prevState.DEX + 1,
            //         };
            //       });
            //       break;
            //     case "NFI":
            //       this.setState((prevState) => {
            //         return {
            //           ...prevState,
            //           NFI: prevState.NFI + 1,
            //         };
            //       });
            //       break;
            //     default:
            //       console.log("gh", i);
            //       break;
            //   }
            }
          }).catch(function(error){
              console.log(error);
          });
      }
      handleFilter = (param) => {
        let tempData = [];
        tempData = this.state.data.filter((x) => {
          return x.current_status_code === param;
        });
        console.log(tempData);
        console.log("card clicked")
        this.setState({ filteredData: tempData });
      };
 render() {
     const { ood,del,int,dex,nfi} = this.state;
     console.log(ood,"#",del,"#",int);
  return (
    <div className="">
       
      <div style={{marginTop: '10px'}} className=" d-flex justify-content-center">
       
        <div style={{backgroundColor: '#6B6DFB'}} className="display card m-2">
          <p className="pl-2">DEL</p>
            <h2 className="text-center mt-3">{del}</h2>
        </div>
        <div style={{backgroundColor: '#6B6DFB'}} className="display card m-2">
          <p className="pl-2">INT</p>
            <h2 className="text-center mt-3">{int}</h2>
        </div>
        <div style={{backgroundColor: '#6B6DFB'}} className="display card m-2">
          <p className="pl-2">OOD</p>
              <h2 className="text-center mt-3">{ood}</h2>
        </div>
        <div style={{backgroundColor: '#6B6DFB'}} className="display card m-2">
          <p className="pl-2">DEX</p>
              <h2 className="text-center mt-3">{dex}</h2>
        </div>
        <div style={{backgroundColor: '#6B6DFB'}} className="display card m-2">
          <p className="pl-2">NFI</p>
              <h2 className="text-center mt-3">{nfi}</h2>
        </div>
        
      </div>
     </div>
    );
}
};
export default Card;
