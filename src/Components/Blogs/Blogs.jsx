import React, { useState } from 'react';
import BlogImg from '../../assets/images/blog/b1.jpg';
import BlogsData from '../../Data/Blogs.json'
import { useNavigate } from 'react-router-dom';
function Blogs(props) {
    const [blogs, setBlogs] = useState(BlogsData);
    const navigate = useNavigate();
    const trunc = (str, num)=>{
        if(str.length> num){
            return str.slice(0, num) + "...."
        }else{
            return str
        }
    }
    return (
        <section className="blogs">
            <div className="container">
                <div className="inner my-5 p">
                    <div className="top-content">
                        <h2 className='title'>News & Articles</h2>
                        <h5 className='desc'>Always upto date with our latest News and Articles</h5>
                    </div>
                    <div className="cards">
                        {
                            blogs.map(blog => {
                                const {id, title, description, author, date} = blog;
                                return (
                                    <div className="card">
                                        <img src={BlogImg} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <div className="post-writer d-flex justify-content-between">
                                                <p>By: <span>{author}</span></p><p>Date: <span>{date}</span></p>
                                            </div>
                                            <p className="card-text">{trunc(description, 100)}</p>
                                        </div>
                                        <button className='btn mx-auto mb-3' onClick={()=>{navigate(`/blog/${id}`)}}>Read More</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blogs;