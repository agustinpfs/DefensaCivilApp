import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";


export default class GeoRender extends Component {
    state = {
        all: ''
    }

    // componentDidMount() {
    //     this.getGeo();
    // }

    // getGeo = async () => {
    //     const res = await axios.get('http://localhost:4000/api/geo');
    //     this.setState({
    //         users: res.data
    //     });
    // }

    getElementandSet = (e) => {
        e.preventDefault(); //cancel reset

        const valor = document.getElementById('demo').value;

        this.setState({
            all: valor,
        })
    }

    onSubmit = async (e) => {
        e.preventDefault(); //cancel reset

        await axios.post('http://localhost:4000/api/geo', {
            all: this.state.all,
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
                            type="hidden"
                            id="demo"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>

                </form>
            </div>
        )
    }
}

