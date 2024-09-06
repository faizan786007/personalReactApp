import React, { useRef, useState, useEffect, useReducer } from "react";
import "../Components/Blog.css";
function reducer(state, action) {
	switch (action.type) {
		case "ADD":
			return [...state, action.blog];
		case "REMOVE":
			return state.filter((_, i) => i !== action.index);

		default:
			return [];
	}
}
const Blog = () => {
	const [data, setdata] = useState({ title: "", content: "" });
	// const [blog, setBlog] = useState([]);
	const [blog, dispatch] = useReducer(reducer, []);
	const titleRef = useRef(null);

	useEffect(() => {
		titleRef.current.focus();
	}, []);
	useEffect(() => {
		if (blog.length) {
			document.title = blog[blog.length - 1].title;
		} else {
			document.title = "NO blogs";
		}
	}, [blog]);

	function handleSubmit(e) {
		e.preventDefault();
		// setBlog([...blog, { ...data, title: data.title, content: data.content }]);
		if (!data.title || !data.content) {
			alert("Both title and content are required.");
			return;
		}

		// Add the new blog entry and clear the form
		// setBlog([...blog, { ...data }]);
		dispatch({
			type: "ADD",
			blog: { title: data.title, content: data.content },
		});

		setdata({ title: "", content: "" });
		titleRef.current.focus();
	}
	function handleDelete(i) {
		// let newBlog = blog.filter((d, index) => i !== index);
		// setBlog(newBlog);
		dispatch({ type: "REMOVE", index: i });
	}
	return (
		<div className="container">
			<h1 className="heading">My Blog</h1>
			<form onSubmit={handleSubmit} className="blog-form">
				<label>Title</label>
				<br />

				<input
					type="text"
					placeholder="TITLE"
					value={data.title}
					onChange={(e) => setdata({ ...data, title: e.target.value })}
					ref={titleRef}
				/>
				<br />

				<label>Content</label>
				<br />

				<textarea
					type="text"
					placeholder="CONTENT"
					value={data.content}
					onChange={(e) => setdata({ ...data, content: e.target.value })}
				/>
				<br />
				<button type="submit">Add</button>
			</form>
			<div className="blog-entries">
				{blog.map((b, i) => (
					<div className="blog-entry" key={i}>
						<h1>{b.title}</h1>
						<p>{b.content}</p>
						<button className="delete-button" onClick={() => handleDelete(i)}>
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Blog;
