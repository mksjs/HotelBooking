import React, { Component } from "react";
import HotelDataService from '../api/hotelBooking/HotelDataService.js';

class ListHotelsComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            
            hotels : []
        }
    }
    componentDidMount(){
        HotelDataService.retrieveAllHotels()
        .then(
            response => {
                    this.setState({hotels : response.data})
            })
    }
    render() {
        return (
            <div className="ListHotelsComponent"> 
                <h1>Hotels</h1>
                <div className="container">
                    <table className="table list-group-item">
                        <thead>
                            <tr> 
                                <th>Hotel Id</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Base Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.hotels.map (
                                    hotel =>
                                        <tr key ={hotel.hotelId}>
                                            <td>{hotel.hotelId}</td>
                                            <td>
                                                <div>{hotel.hotelName}</div>
                                                <br/>
                                                <div>
                                                    <div>
                                                        <button className="btn btn-warning">Amenities</button>
                                                    </div>
                                                    <br/>
                                                    <div>{hotel.amenities}</div>
                                                </div>
                                                <br/>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Vendor Id</th>
                                                            <th>Vendor Name</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            hotel.vendors.map (
                                                            vendor =>
                                                                    <tr key={vendor.vendorId}>
                                                                        <td className="btn">{vendor.vendorId}</td>
                                                                        <td className="btn">{vendor.vendorName}</td>
                                                                    </tr>
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td>
                                                <div>{hotel.location}</div>
                                                <br/>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <button className="btn btn-warning">Status</button>
                                                        </div>
                                                        <br/>
                                                        <div>{hotel.hotelStatus}</div>
                                                    </div>
                                                </div>
                                                <br/>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Promo Code</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            hotel.vendors.map (
                                                            vendor =>
                                                                    <tr key={vendor.vendorId}>
                                                                        <td className="btn">{vendor.promoCode === null ? "No Promo Code" : vendor.promoCode }</td>
                                                                    </tr>
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td>
                                                <div>{hotel.roomCharge}</div>
                                                    <br/>
                                                    <div>
                                                        <div>
                                                            <button className="btn btn-warning">Room Available</button>
                                                        </div>
                                                        <br/>
                                                        <div>{hotel.roomsAvailable}</div>
                                                    </div>
                                                    <br/>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th className="btn"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                hotel.vendors.map (
                                                                vendor => 
                                                                        <tr key={vendor.vendorId}>
                                                                            <td>
                                                                                <button className="btn btn-success">Book</button>
                                                                            </td>
                                                                        </tr>
                                                                )
                                                            }
                                                        </tbody>
                                                </table>
                                            </td>                                            
                                        </tr>
                                                                               
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListHotelsComponent;