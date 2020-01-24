import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
// import { Link } from 'react-router-dom'


export default class EventsGeo extends Component {

    state = {
        eventosLista: []
    }

    async componentDidMount() {
        this.getGeo();
    }

    getGeo = async () => {
        const res = await axios.get('http://localhost:4000/api/geo')
        this.setState({
            eventosLista: res.data
        });
    }

    render() {
        return (
            <div className="">
                <Helmet>
                    {/* <meta charSet="utf-8" />
                    <title>Title</title> */}
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
                        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                        crossorigin="" />
                    <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
                        integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
                        crossorigin=""></script>
                    <script src="eventsScript.js"></script>

                </Helmet>
                <div className="row">
                    {<script src="eventsScript.js"></script>}
                    {console.log(this.state.eventosLista)}
                    {/* {console.log(testeo)} */}
                    <div id="mapid" className="clase">
                    </div>
                    <div>
                        <button type='submit' id="convert"> {/*//lo mete en el form */}
                            {/* <button id="convert"> */}
                            GeoJSON
                    </button>
                    </div>

                    <input
                        id='verse'
                        className="form-control"
                        value={JSON.stringify(this.state.eventosLista)}
                        type="text"
                    />
                </div>
            </div >
        )
    }
}