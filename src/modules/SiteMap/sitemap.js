import React from 'react'
import './sitemap.css';
import data from '../../sitedata.json';
import {Link} from 'react-router-dom';

function sitemap() {
    return (
        <div className="container">
            {
                data.sitemap.map((e) => {
                    return(
                        <>
                            <h4 className="font-weight-bold p-3 ">{e.title}</h4>
                             {
                                 e.header.map((nav) => {
                                     return(
                                         <>
                                            <ul className="list ">
                                                <li>
                                                    <h6 className="font-weight-bold">  <i className=" fa fa-angle-double-right  px-2"></i>{nav.title}</h6>
                                                    {
                                                        nav.subheader.map((e)=> {
                                                            return(
                                                                <>
                                                                    <ul>
                                                                         <li><Link to={e.link}><i className=" fa fa-hand-o-right  px-2"></i>{e.title}</Link></li>
                                                                    </ul>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </li>
                                            </ul>
                                         </>
                                     )
                                 })
                             }

                        </>
                    )
                })
            }
        </div>
    )
}

export default sitemap
