export default function CustomImg({imgsrc,pt}){
    return (
        <div className="customimg" style={{paddingTop: pt}}>
            <img src={imgsrc} alt=""/>
        </div>
    )
}