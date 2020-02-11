import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";


export default class GeoRender extends Component {
    state = {
        all: '',
        description: '',
        entitySelected: '',
        riscSelected: '',
        entidadLista: [],
        currententity: [],
        currentrisc:[]
    }



    async componentDidMount() {
        this.getEntity();
    }

    getEntity = async () => {
        const res = await axios.get('http://localhost:4000/api/entity')
        // const entidades = "features:" + res.data
        // console.log(entidades)
        this.setState({
            // entidadLista: entidades
            entidadLista: res.data,
            entitySelected: res.data[0].properties.nombre,
            riscSelected: res.data[0].properties.riesgo
        });
    }
    // componentDidMount() {
    //     this.getGeo();
    // }

    // getGeo = async () => {
    //     const res = await axios.get('http://localhost:4000/api/geo');
    //     this.setState({
    //         all: res.data
    //     });

    currentEntity = (e) => {
        // window.location.reload(true);
        e.preventDefault();
        const entidades = this.state.entidadLista
        const entidadesNombre = this.state.entitySelected
        // const currev = this.state.currentevent
        for (let i = 0; i < entidades.length; i++) {
            if (entidades[i].properties.nombre === entidadesNombre) {
                this.setState({
                    currententity: entidades[i]
                });
            }
        }
    }
    currentRisc = (e) => {
        // window.location.reload(true);
        e.preventDefault();
        const entidades = this.state.entidadLista
        const entidadesRiesgo = this.state.riscSelected
        // const currev = this.state.currentevent
        for (let i = 0; i < entidades.length; i++) {
            if (entidades[i].properties.riesgo === entidadesRiesgo) {
                this.setState({
                    currentrisc: entidades[i]
                });
            }
        }
    }

        

    getElementandSet = (e) => {
        e.preventDefault(); //cancel reset

        const valor = document.getElementById('demo').value;
        const valor2 = document.getElementById('demo2').value;

        this.setState({
            all: valor,
            description: valor2,
        })
    }

    onSubmit = async (e) => {
        e.preventDefault(); //cancel reset
     
        await axios.post('http://localhost:4000/api/geo', {
            all: this.state.all,
            description: this.state.description
        });
    }




    onInputChange = (e) => {
        // e.onClick.target.value = this.currentEvent()
        this.setState({
            entitySelected: e.target.value   //input info - e.target.name->depending on the name use a data

        })
        // const es = e.target.value
        // es.onClick = currentEvent()
        // console.log(this.state.descSelected)
    }


    render() {
        return (
            <div className="">
                <Helmet>
                    {/* <meta charSet="utf-8" />
                    <title>Title</title> */}
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@0.7.7/dist/leaflet.css" />
                    <script src="https://unpkg.com/leaflet@0.7.7/dist/leaflet-src.js"></script>
                    <link rel="stylesheet" href="https://cdn.rawgit.com/Leaflet/Leaflet.draw/v0.3.0/dist/leaflet.draw.css" />
                    <script src="https://cdn.rawgit.com/Leaflet/Leaflet.draw/v0.3.0/dist/leaflet.draw-src.js"></script>
                    <script src="script.js"></script>

                </Helmet>
                <div id="map" className="clase"></div>






{/* BUSCAR POR ENTIDAD */}
{/* BUSCAR POR ENTIDAD */}
{/* BUSCAR POR ENTIDAD */}





<form id="opciones" onSubmit={this.currentEntity}>
                        {/* SELECT THE USER */}
                        <div className="form-group">


                            <select
                                // id="convert"
                                className="form-control"
                                value={this.state.entitySelected}
                                onChange={this.onInputChange}
                                name="entitySelected"
                            >
                                {
                                    this.state.entidadLista.map(nom => (
                                        <option >
                                            {nom.properties.nombre}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <br />
                        <br />
                        <input
                            id='ente'
                            className="form-control"
                            // value={JSON.stringify(this.state.currententity)}
                            // value={'{'+'"features":[' + JSON.stringify(this.state.currententity)+']}'}
                            value={JSON.stringify(this.state.currententity)}

                            type="text"
                        />
                        <button type='submit'>
                            submit
                    </button>
                    {/* {JSON.stringify(this.state.currententity)+ "aca"} */}
                        <button id="convertire" >
                            automático
                    </button>
                    {/* <button id="ir">show(gg)</button> */}
                        {/* <button type='submit'>
                            submit
                    </button> */}
                        {/* <Link to={"/ListEvents"} id = 'convert'>
                        showEvento
                                    </Link> */}
                    </form>




{/* FIN BUSCAR POR ENTIDAD */}
{/* FIN BUSCAR POR ENTIDAD */}
{/* FIN BUSCAR POR ENTIDAD */}




                <form onSubmit={this.getElementandSet} >{/*//lo manda al estado */}
                    <button type='submit' id="convert"> {/*//lo mete en el form */}
                        {/* <button id="convert"> */}
                        AGREGAR DATA
                    </button>
                </form>

                <h3>send to DB</h3>
                <form onSubmit={this.onSubmit} >
                    <div >
                        <input
                            // type="hidden"
                            id="demo"
                        />
                    </div>
                    <div className="">
                        <input 
                            // type="text" 
                            id ="demo2" 
                            placeholder="Descripción del evento"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Finalizar evento
                    </button>

                </form>

                <div>
                        <button id="conver"> {/*//lo mete en el form */}
                            {/* <button id="convert"> */}
                            testEntidad
                    </button>
                     <input
                        id='events'
                        className="form-control"
                        // value={JSON.stringify(this.state.entidadLista)}
                        value={'{'+'"features":' + JSON.stringify(this.state.entidadLista)+'}'}
                        type="text"
                        // placeholder="cucu"
                    />
            </div>
            {/* {this.state.entidadLista} */}
            {'aaaa' + JSON.stringify(this.state.entidadLista) + "AAAAAAAAAA"}

            
{/* BUSCAR POR TIPO DE EVENTO */}
{/* BUSCAR POR TIPO DE EVENTO */}
{/* BUSCAR POR TIPO DE EVENTO */}
{/* BUSCAR POR TIPO DE EVENTO */}
{/* BUSCAR POR TIPO DE EVENTO */}
{/* BUSCAR POR TIPO DE EVENTO */}
{/* BUSCAR POR TIPO DE EVENTO */}
{/* BUSCAR POR TIPO DE EVENTO */}
{/* BUSCAR POR TIPO DE EVENTO */}
{/* BUSCAR POR TIPO DE EVENTO */}
{/* BUSCAR POR TIPO DE EVENTO */}



<h3>SELECT RIESGO</h3>

{/* <form id="opciones" onSubmit={this.currentEntity}> */}
<form id="opciones" onSubmit={this.currentRisc}>
                        {/* SELECT THE USER */}
                        <div className="form-group">


                            <select
                                // id="convert"
                                className="form-control"
                                // value={this.state.entitySelected}
                                value={this.state.riscSelected}
                                onChange={this.onInputChange}
                                // name="entitySelected"
                                name="riscSelected"
                            >
                                {
                                    // this.state.entidadLista.map(nom => (
                                    this.state.entidadLista.map(risc => (
                                        <option >
                                            {/* {nom.properties.nombre} */}
                                            {risc.properties.riesgo}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <br />
                        <br />
                        <input
                            // id='ente'
                            id='enterisc'
                            className="form-control"
                            // value={JSON.stringify(this.state.currententity)}
                            // value={'{'+'"features":[' + JSON.stringify(this.state.currententity)+']}'}
                            // value={JSON.stringify(this.state.currententity)}
                            value={JSON.stringify(this.state.currentrisc)}

                            type="text"
                        />
                        <button type='submit'>
                            submit
                    </button>
                    {/* {JSON.stringify(this.state.currententity)+ "aca"} */}
                        {/* <button id="convertire" > */}
                        <button id="convertirRiesgo" >
                            sendToScript
                    </button>
                    {/* <button id="ir">show(gg)</button> */}
                        {/* <button type='submit'>
                            submit
                    </button> */}
                        {/* <Link to={"/ListEvents"} id = 'convert'>
                        showEvento
                                    </Link> */}
                    </form>








{/* FIN BUSCAR POR TIPO DE EVENTO */}
{/* FIN BUSCAR POR TIPO DE EVENTO */}
{/* FIN BUSCAR POR TIPO DE EVENTO */}
{/* FIN BUSCAR POR TIPO DE EVENTO */}
{/* FIN BUSCAR POR TIPO DE EVENTO */}







            </div>
        
        )

    }

}
