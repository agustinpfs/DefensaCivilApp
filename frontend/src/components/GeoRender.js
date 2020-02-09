import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";


export default class GeoRender extends Component {
    state = {
        all: '',
        description: '',
        eventosLista: []
    }






    async componentDidMount() {
        this.getEntity();
    }

    getEntity = async () => {
        const res = await axios.get('http://localhost:4000/api/entity')
        this.setState({
            eventosLista: res.data
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


                <form onSubmit={this.getElementandSet} >{/*//lo manda al estado */}
                    <button type='submit' id="convert"> {/*//lo mete en el form */}
                        {/* <button id="convert"> */}
                        GeoJSON
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
                        // value={JSON.stringify(this.state.eventosLista)}
                        value={JSON.stringify(this.state.eventosLista)}
                        type="text"
                        // placeholder="cucu"
                    />
            </div>
            {/* {this.state.eventosLista} */}
            {JSON.stringify(this.state.eventosLista) + "AAAAAAAAAA"}


            </div>
        
        )

    }

}
