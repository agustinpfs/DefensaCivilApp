import React, { Component } from 'react'
import axios from 'axios'


export default class LoadData extends Component {

    state = {
        tipoEntidad: '',
        nombre: '',
        telefono: '',
        email: '',
        sector: '',
        direccion: '',
        riesgo: [],
        lat: '',
        lon: '',
        // coord: [] 
    }



    onSubmit = async (e) => {
        console.log(this.state.coord)
        e.preventDefault(); //cansel reset
        // const newEntity = {
        //     tipoEntidad: this.state.tipoEntidad,
        //     nombre: this.state.nombre,
        //     telefono: this.state.telefono,
        //     email: this.state.email,
        //     sector: this.state.sector,
        //     direccion: this.state.direccion,
        //     riesgo: this.state.riesgo,
        //     coord: this.state.coord,
        // };
        // await axios.post('http://localhost:4000/api/entity', newEntity);
        await axios.post('http://localhost:4000/api/entity', {
            tipoEntidad: this.state.tipoEntidad,
            nombre: this.state.nombre,
            telefono: this.state.telefono,
            email: this.state.email,
            sector: this.state.sector,
            direccion: this.state.direccion,
            riesgo: this.state.riesgo,
            // coord: this.state.lat,
            lat: this.state.lat,
            lon: this.state.lon,
        });
        // this.setState({ username: '' });
        // this.getEntity();
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value   //input info - e.target.name->depending on the name use a data
        })
    }

    render() {
        return (
            <div>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tipo Entidad"
                                onChange={this.onInputChange}
                                name="tipoEntidad"
                                defaultValue={this.state.tipoEntidad}
                                     />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                onChange={this.onInputChange}
                                name="nombre"
                                defaultValue={this.state.nombre}
                                     />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Telefono"
                                onChange={this.onInputChange}
                                name="telefono"
                                defaultValue={this.state.telefono}
                                     />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="email"
                                onChange={this.onInputChange}
                                name="email"
                                defaultValue={this.state.email}
                                     />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Sector"
                                onChange={this.onInputChange}
                                name="sector"
                                defaultValue={this.state.sector}
                                     />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Direccion"
                                onChange={this.onInputChange}
                                name="direccion"
                                defaultValue={this.state.direccion}
                                     />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Riesgo"
                                onChange={this.onInputChange}
                                name="riesgo"
                                defaultValue={this.state.riesgo}
                                     />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Coordenadas"
                                onChange={this.onInputChange}
                                name="coord"
                                defaultValue={this.state.coord}
                                // defaultValue={JSON.stringify(this.state.coord)}
                                     />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Latitud"
                                onChange={this.onInputChange}
                                name="lat"
                                defaultValue={this.state.lat}
                                // defaultValue={JSON.stringify(this.state.coord)}
                                     />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Longitud"
                                onChange={this.onInputChange}
                                name="lon"
                                defaultValue={this.state.lon}
                                // defaultValue={JSON.stringify(this.state.coord)}
                                     />
                        </div>

                        <button type="submir">SAVE</button>

                    </form>
<div className="">
                    {this.state.tipoEntidad}
                    {/* {this.state.coord} */}
                    {this.state.lat}
                    {this.state.lon}
                    
                    </div>
            </div>
        )
    }
}
