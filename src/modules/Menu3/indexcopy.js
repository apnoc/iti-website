import React, { PureComponent } from 'react'
import axios from 'axios';
import "./Trades.css";
import ReactPaginate from 'react-paginate';

    

var Loader = require('react-loader');

export class Trades extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 10,
            currentPage: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
	
    }

    componentDidMount(){
        this.getData();
    }

    getData() {
        axios
            .get(`http://10.242.162.231/ITIWebservice/nic/webservice/ITIStatus/16/G`)
            .then(res => {

                var data = res.data;
				console.log(data)
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgtableData :res.data,
                    tableData:slice,
                    posts: res.data,
                    loader: true 
                })
            });
    }

    render() {
        return (
            <div >
                	<Loader loaded={this.state.loader} className="spinner" />
                  <h4 className="text-center  m-4" fontweight="2vw" >LIST OF ITI'S WITH TRADES & STRENGTHS INTERFACE</h4>
                  <table className="table container">
                        <thead className="thead-dark">
                           <tr>
                                <th>College Name</th>
                                <th>Trade Name</th>
                                <th>Strength</th>
                           </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.tableData.map((tdata) => (
                                    <tr>
                                        <td>{tdata.iti_name}</td>
                                        <td>{tdata.trade_name}</td>
                                        <td>{tdata.strength}</td>
                                    </tr>
                                
                            ))
                            }                            
                        </tbody>
                        </table>
               <section className="d-flex justify-content-center p-3">
               <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                                          </section>

            </div>
        )
    }
}


export default Trades;