import React, { Component } from 'react'
import axios from 'axios'


export default class LoadData extends Component {

    state = {
        tipoEntidad: '',
        nombre: '',
        telefono: '',
        email: '',
        sector: [],
        direccion: '',
        riesgo: [],
        lat: '',
        lon: '',
        // value: [],

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
        this.setState({ 
            nombre: '',
            tipoEntidad: '',
            telefono: '',
            email: '',
            sector: '',
            direccion:'',
            riesgo:'',
            lat:'',
            lon:''
        });
        // this.getEntity();
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value   //input info - e.target.name->depending on the name use a data
        })
    }

    handleChange = (event) => {
        this.setState({
            tipoEntidad: event.target.value,
            // sector: event.target.value,

        });
    }

    handleChange2 = (event) => {
        this.setState({
            sector: event.target.value,

        });
    }

    handleChange3 = (event) => {
        this.setState({
            riesgo: event.target.value,

        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <select className="form-control" value={this.state.tipoEntidad} onChange={this.handleChange}>
                            <option value="elegir">Tipo Entidad</option>
                            <option value="Educación">Educación</option>
                            <option value="Centro Salud">Centro Salud</option>
                            <option value="Organismo Público">Organismo Público</option>
                            <option value="Depósito Combustible">Depósito Combustible</option>
                            <option value="Lugar evento masivo">Lugar evento masivo</option>
                            <option value="Club">Club</option>
                            <option value="Hogar Acogida">Hogar Acogida</option>
                        </select>
                        {/* <input
                                type="text"
                                className="form-control"
                                placeholder="Tipo Entidad"
                                onChange={this.onInputChange}
                                name="tipoEntidad"
                                defaultValue={this.state.tipoEntidad}
                                     /> */}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            onChange={this.onInputChange}
                            name="nombre"
                            // defaultValue={this.state.nombre}
                            defaultValue=''
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
                        <select
                            className="form-control"
                            value={this.state.sector}
                            onChange={this.handleChange2}
                        >

                            <option value="elegir">Sector</option>
                            <option value="Público">Público</option>
                            <option value="Privado">Privado</option>

                        </select>
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
                        <select className="form-control" value={this.state.riesgo} onChange={this.handleChange3}>
                            <option value="elegir">Tipo Riesgo</option>

                            <option value="Incendio">Incendio</option>
                            <option value="Inundación">Inundación</option>
                            <option value="Amenaza Climática">Amenaza Climática</option>
                            <option value="Accidente">Accidente</option>
                        </select>
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
               
            </div>
        )
    }
}
