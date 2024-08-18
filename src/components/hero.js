import CustomImg from "./customimg"

export default function Hero(){
    const images=[
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]

    return (
       <div className="section hero">
        <div className="col1 typography">
            <h1 className="title">What are we About</h1>
            <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus mauris, pretium id enim nec, mollis varius elit. Nullam ut dui aliquet, luctus magna vitae, ultricies felis. Aenean tortor orci, malesuada et condimentum sit amet, blandit a diam.
            </p>
            <button className="btn">Explore Now</button>

        </div>
        <div className="col1 gallery">
            { images.map((src,index) => (
            <CustomImg key={index} imgsrc={src} pt={"90%"}/>
             ))}
            
            
        </div>
        </div> 
    )
}