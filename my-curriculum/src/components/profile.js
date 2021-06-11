import React from 'react';

class ProfileModel extends React.Component {
    render(){
        return(
        
        <>
        <h1 className={this.props.headerprofile}>{this.props.encabezado}</h1> 
        <p className={this.props.parrafoprofile}>{this.props.parrafo}</p>
        <ul className={this.props.listaprofile}>
            <div>
            <li><h2>{this.props.encabezado1}</h2></li>
            <li><h3>{this.props.subencabezado1}</h3></li>
            <li className={this.props.listaText}>{this.props.text1}</li>
            </div>
            
            <div>
            <li><h2>{this.props.encabezado2}</h2></li>
            <li><h3>{this.props.subencabezado2}</h3></li>
            <li className={this.props.listaText}>{this.props.text2}</li>
            </div>
           
           <div>
           <li><h2>{this.props.encabezado3}</h2></li>
           <li><h3>{this.props.subencabezado3}</h3></li>
           <li className={this.props.listaText}>{this.props.text3}</li>
           </div>
           
            
            
        </ul>
        
        </>
        
        ) ;
    }

    
}

export default ProfileModel;
