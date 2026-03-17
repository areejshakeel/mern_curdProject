import React, { useEffect, useState } from "react"
import './service.css'
import {
    AngryIcon, BookIcon, CalendarIcon, CallIcon, CheckmarkIcon,
    CustomStarIcon, DocumentTextIcon, DollarIcon, GroupIcon, HashtagIcon, LineChartIcon, LocationIcon, NoteIcon, PackageIcon, PolygonArrowIcon, PromisedIcon,
    QualifiedOpportunity, QuestionIcon, SadIcon, ScriptIcon, SearchIcon, SmileyIcon, TagIcon, TimerIcon,
    UploadIcon,
    WarningIcon
} from "./svgFile";

//  {
//     "userName":"test-user6",
//     "email":"test236@gmail.com",
//     "password":"test213",
//     "phone":"7845120"
// }
const ServiceFile = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getServices()
    }, [])
    const getServices = async () => {
        const response = await fetch(`http://localhost:5000/api/data/service`, {
            method: "GET"
        })
        if (response.ok) {
            const data_ = await response.json()
            setData(data_.message)
        }
    }
    return (
        <>
            <div className="row p-2">
                <div className="col-md-12 wgreport-tab viewreport-box no-transition py-6">
                    <h4 className="section-header">
                        <LineChartIcon width={30} height={30} color={"#6366f1"} />
                        Sales & Pipeline Performance
                    </h4>
                </div>
            </div>
            <div className="row px-2 rowbox">
                <div className="col  insightReport-rowbox box1">
                    <div className="icon-bg bg1">
                        <QualifiedOpportunity width={28} height={28} color={"#059669"} />
                    </div>
                    <label className="sea-green">878</label>
                    <span className="sea-green">Qualified Opportunities</span>
                </div>
                <div className="col  insightReport-rowbox box2">
                    <div className="icon-bg bg2">
                        <DollarIcon width={28} height={28} color={"#b45309"} />
                    </div>
                    <label className="brown">878</label>
                    <span className="brown">Total Pipeline Value</span>
                </div>
                <div className="col insightReport-rowbox box3">
                    <div className="icon-bg bg3">
                        <CustomStarIcon width={28} height={28} color={"#4f881b"} />
                    </div>
                    <label className="parrot">878</label>
                    <span className="parrot">Average Deal Size</span>
                </div>
                <div className="col insightReport-rowbox box4">
                    <div className="icon-bg bg4">
                        <LineChartIcon width={28} height={28} color={"#0e7490"} />
                    </div>
                    <label className="light-blue">878%</label>
                    <span className="light-blue">Conversion Rate</span>
                </div>
                <div className="col insightReport-rowbox box5">
                    <div className="icon-bg bg5">
                        <BookIcon width={28} height={28} color={"#be185d"} />
                    </div>
                    <label className="light-pink">878</label>
                    <span className="light-pink">Bookings</span>
                </div>
                <div className="col insightReport-rowbox box6">
                    <div className="icon-bg bg6">
                        <TagIcon width={28} height={28} color={"#8d4f24"} />
                    </div>
                    <label className="light-brown">$878</label>
                    <span className="light-brown">Price Range Discussed</span>
                </div>
            </div>

            <div className="row p-2">
                <div className="col-md-12 wgreport-tab viewreport-box no-transition py-6">
                    <h4 className="section-header">
                        <PolygonArrowIcon width={28} height={28} color={"yellow"} />
                        Latest Collection
                    </h4>
                </div>
                <div className="row">
                    {data.map((item, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                            <div className="product-card">

                                {/* Image */}
                                <div className="product-img">
                                    <img
                                        src="/images/PERFUMEDESIGN.jpg" // dummy image
                                        alt="product"
                                    />
                                </div>

                                {/* Content */}
                                <div className="product-content">
                                    <h6 className="product-title">{item.name}</h6>
                                    <p className="product-desc">{item.description}</p>

                                    <div className="product-price">
                                        <span className="net">Net: ${item.net_price}</span>
                                        <span className="tax">Tax: {item.taxes}%</span>
                                    </div>

                                    <div className="total-price">
                                        ${item.price}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ServiceFile