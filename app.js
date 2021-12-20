const stdInfo = [
    {
        stdName:"Salih",
        image:"https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        study:"Computer Eng",
        hobby:"F1"
    },
    {
        stdName:"Lezan",
        image:"https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        study:"Computer Eng",
        hobby:"F1"
    },
    {
        stdName:"Dosty",
        image:"https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        study:"Computer Eng",
        hobby:"F1"
    },
    {
        stdName:"Viyan",
        image:"https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        study:"Computer Eng",
        hobby:"F1"
    },
    {
        stdName:"Ahmed",
        image:"https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        study:"Computer Eng",
        hobby:"F1"
    },
];
const App = ()=>{
    return React.createElement("div",{className:"conatainer"}),
    React.createElement("h1",{},"Student info"),
    stdInfo.map((std)=>{
        return React.createElement(stdCard,{
            stdName: std.stdName,
            image: std.image,
            study: std.study,
            hobby: std.hobby,
        });
    });
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));