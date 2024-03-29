import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import blogsData from '../../Data/Blogs.json';
import blogImg from '../../assets/images/blog/b1.jpg'
function BlogDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [blogId, setBlogId] = useState();
    const [blogTitle, setBlogTitle] = useState();
    const [blogAuthor, setBlogAuthor] = useState();
    const [blogDate, setBlogDate] = useState();
    const [blogDesc, setBlogDesc] = useState();
    useEffect(() => {
        const blogData = blogsData.filter((blog) => blog.id == id);
        setBlogId(blogData[0].id);
        setBlogTitle(blogData[0].title);
        setBlogAuthor(blogData[0].author);
        setBlogDate(blogData[0].date);
        setBlogDesc(blogData[0].description);
    }, [])
    return (
        <div className="container">
            <button className='btn mt-3' onClick={() => { navigate('/blog') }}>Back to Blog</button>
            <div className="card m-auto">
                <img src={blogImg} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{blogTitle}</h5>
                    <div className="post-writer d-flex justify-content-between">
                        <p>By: <span>{blogAuthor}</span></p><p>Date: <span>{blogDate}</span></p>
                    </div>
                    <p className="card-text">{blogDesc}</p>
                </div>

            </div>

        </div>
    );
}

export default BlogDetails;