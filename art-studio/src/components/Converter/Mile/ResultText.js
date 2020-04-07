import React from "react";

function ResultText(props)
{
    // const [style,setStyle]=useState({color:''});
    // const [text,setText]=useState(" ");


    if (props.km >= 0 && props.km < 120)
    // {
    //     setStyle({color:"white"});
    //     setText("Good Driving!");
    // }

        return <p style={{ color: 'royalblue' }}>Good Driving! </p>
    if (props.km >= 120)
        return <p style={{ color: '#ff8080' }}>Over Speed! </p>
    // { setStyle({color:"#ff8080"});
    // setText("Over Speed!");}

    return <p style={{textAlign:"center", color:"royalblue"}}> <small>~ Play to see ~  </small>  </p>
}

export default ResultText;
