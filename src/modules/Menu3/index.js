import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './Trades.css'
 
function Trades() {
 const [postsPerPage] = useState(10);
 const [offset, setOffset] = useState(1);
 const [posts, setAllPosts] = useState([]);
 const [pageCount, setPageCount] = useState(0)
 
 const getPostData = (data) => {
   return (
     data.map(post =>
         <div>
             <table >            
                <tbody>                           
                    <tr>
                        <td>{post.iti_name}</td>
                        <td>{post.trade_name}</td>
                        <td>{post.strength}</td>
                    </tr>                            
                </tbody>
             </table>             
         </div> )
)

 
 }
 
 const getAllPosts = async () => {
   const res = await axios.get(`http://10.242.162.231/ITIWebservice/nic/webservice/ITIStatus/16/G`)
   const data = res.data;
   const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)
 
   // For displaying Data
   const postData = getPostData(slice)
 
   // Using Hooks to set value
   setAllPosts(postData)
   setPageCount(Math.ceil(data.length / postsPerPage))
 }
 
 const handlePageClick = (event) => {
   const selectedPage = event.selected;
   setOffset(selectedPage + 1)
 };
 
 useEffect(() => {
   getAllPosts()
 }, [offset])
 
 return (
   <div >
     <h4 className="text-center  m-4" fontweight="2vw" >LIST OF ITI'S WITH TRADES & STRENGTHS INTERFACE</h4>
        <table className="table container">
              <thead className="thead-dark">
                 <tr>
                      <th>College Name</th>
                      <th>Trade Name</th>
                      <th>Strength</th>
                 </tr>
              </thead>
              {posts}
              </table>                                       
    {/* Using React Paginate */}
     <section className="d-flex justify-content-center p-3">
     <ReactPaginate
       previousLabel={"previous"}
       nextLabel={"next"}
       breakLabel={"..."}
       breakClassName={"break-me"}
       pageCount={pageCount}
       onPageChange={handlePageClick}
       containerClassName={"pagination"}
       subContainerClassName={"pages pagination"}
       activeClassName={"active"} />
       </section>
   </div>
 );
}
 
export default Trades;