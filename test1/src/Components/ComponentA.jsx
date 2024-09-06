import React, { Component } from "react";

export default class ComponentA extends Component {
	constructor() {
		super();
		this.state = {
			name: "ali",
		};
		console.log("constructor");
	}
	static getDerivedStateFromProps() {
		console.log(" getDerivedStateFromProps");
		return null;
	}
	componentDidMount() {
		console.log("component did mount");
	}
	render() {
		console.log("render");
		return <div>ComponentA</div>;
	}
}
