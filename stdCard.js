const stdCard = (props)=>{
    return React.createElement("div",{className:'student-card'},
    React.createElement("img",{src: props.image}),
    React.createElement("div",{className:"card-info"},),
    React.createElement("p",{},`name ${props.stdname}`),
    React.createElement("p",{},`Study ${props.study}`),
    React.createElement("p",{},`Hobby ${props.hobby}`)
    );
    
}