// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello";

// root.appendChild(heading);

// //Creating React core element
// const heading = React.createElement("h1",{id:"heading"},"Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//creating mutiple/nested element like<div><div><h1>Hello World</h1></div></div>
const heading = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I'm first sibling"),React.createElement("h1",{},"I'm second sibiling Tag")])
    
    ,React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I'm first sibling"),React.createElement("h1",{},"I'm second sibiling Tag")])
    
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);